import {
  Component,
  createEffect,
  createSignal,
  For,
  on,
  onCleanup,
} from "solid-js";

/**
 * GitHub贡献图组件的属性接口
 */
interface Props {
  /** GitHub用户名 */
  username: string;
  /** 指定年份（可选）。如果不提供，将显示最近一年的贡献 */
  year?: number;
  /** 缓存选项（可选） */
  cacheOptions?: {
    /** 是否启用缓存，默认为true */
    enableCache?: boolean;
    /** 缓存持续时间（毫秒），默认为24小时 */
    duration?: number;
    /** 缓存更新间隔（毫秒），默认为12小时 */
    updateInterval?: number;
  };
  /** 自定义颜色数组，必须提供5种颜色（可选）。颜色顺序从最少贡献到最多贡献 */
  customColors?: [string, string, string, string, string];
}

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface CachedData {
  contributions: Contribution[];
  timestamp: number;
}

const CACHE_KEY = "github_contributions";
const DEFAULT_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24小时
const DEFAULT_UPDATE_INTERVAL = 12 * 60 * 60 * 1000; // 12小时

// 自定义5个等级的颜色
const DEFAULT_COLORS = [
  "#e6eef4", // 0级 - 最浅色
  "#b3cce0", // 1级
  "#80aacc", // 2级
  "#6688aa", // 3级 - 基础色
  "#4d6680", // 4级 - 最深色
];

/**
 * GitHub贡献图组件
 *
 * @param username GitHub用户名
 * @param year 可选，指定年份（默认为最近一年）
 * @param cacheOptions 可选，缓存选项，包括是否启用缓存、缓存持续时间和缓存更新间隔（默认为24小时和12小时）
 * @param customColors 可选，自定义颜色数组，必须提供5种颜色
 *
 * @returns GitHub贡献图
 */
const GithubContributionsGraph: Component<Props> = ({
  username,
  year,
  cacheOptions = {},
  customColors,
}) => {
  const [contributions, setContributions] = createSignal<Contribution[]>([]);
  const [isHovering, setIsHovering] = createSignal(false);

  let containerRef: HTMLDivElement | undefined;

  // 使用自定义颜色或默认颜色
  const LEVEL_COLORS = customColors || DEFAULT_COLORS;

  // 默认缓存
  const {
    enableCache = true,
    duration = DEFAULT_CACHE_DURATION,
    updateInterval = DEFAULT_UPDATE_INTERVAL,
  } = cacheOptions;

  const fetchContributions = async () => {
    try {
      const response = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}`
      );
      const data = await response.json();
      const today = new Date();
      const lastYear = new Date(today);
      lastYear.setFullYear(today.getFullYear() - 1);

      const thisYearContributions = year
        ? data.contributions.filter(
            (contrib: Contribution) =>
              new Date(contrib.date).getFullYear() === year
          )
        : data.contributions.filter(
            (contrib: Contribution) =>
              new Date(contrib.date) >= lastYear &&
              new Date(contrib.date) <= today
          );

      // 按照日期排序
      thisYearContributions.sort(
        (a: Contribution, b: Contribution) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      setContributions(thisYearContributions);

      if (enableCache) {
        // 缓存数据
        const cacheData: CachedData = {
          contributions: thisYearContributions,
          timestamp: Date.now(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      }
    } catch (error) {
      console.error("Error fetching contributions:", error);
    }
  };

  const loadCachedData = () => {
    if (!enableCache) return false;
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { contributions, timestamp }: CachedData = JSON.parse(cachedData);
      if (Date.now() - timestamp < duration) {
        setContributions(contributions);
        return true;
      }
    }
    return false;
  };

  createEffect(() => {
    if (!loadCachedData()) {
      fetchContributions();
    }

    setTimeout(() => {
      if (containerRef) {
        containerRef.scrollLeft = containerRef.scrollWidth;
      }
    }, 0);

    if (enableCache) {
      const intervalId = setInterval(fetchContributions, updateInterval);
      onCleanup(() => clearInterval(intervalId));
    }
  });

  const getColor = (level: number) => {
    return LEVEL_COLORS[level] || LEVEL_COLORS[0];
  };

  const scrollLeft = () => {
    if (containerRef) {
      containerRef.scrollLeft -= containerRef.scrollWidth / 2;
    }
  };

  const scrollRight = () => {
    if (containerRef) {
      containerRef.scrollLeft += containerRef.scrollWidth / 2;
    }
  };

  return (
    <div
      class="relative w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 箭头 */}
      <button
        onClick={scrollLeft}
        class={`left-2 arrow ${isHovering() ? "opacity-100" : "opacity-0"}`}
      >
        <span class="i-ri-arrow-left-s-line"></span>
      </button>
      <button
        onClick={scrollRight}
        class={`right-2 arrow ${isHovering() ? "opacity-100" : "opacity-0"}`}
      >
        <span class="i-ri-arrow-right-s-line"></span>
      </button>
      {/* 贡献图本体 */}
      <div
        ref={containerRef}
        id="githubGraph"
        class="w-full grid grid-rows-[repeat(7,_1fr)] grid-flow-col gap-1 overflow-scroll scroll-smooth"
      >
        <For each={contributions()}>
          {(contrib) => (
            <div
              class="w-3 h-3 bg-slate-200 rounded-[2px]"
              style={{ "background-color": getColor(contrib.level) }}
            ></div>
          )}
        </For>
      </div>
    </div>
  );
};

export default GithubContributionsGraph;
