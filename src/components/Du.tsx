import { Component } from 'solid-js'
import Socialize from './Socialize'

const Du: Component = () => {
  return (
    <div class="pt-24 px-6 text-left text-xl max-w-[76ch] mx-auto relative mb-4 " id="Du">
      <div class="bird"></div>
      <h1 class="text-4xl font-bold">
        <span class="block title">Bonjour!</span>
        <span class="block mt-2 title">I'm Dnzzk2.</span>
      </h1>
      <div class="text-lg sm:text-xl mt-6 title">
        <div>前端小白一枚 / 啥也不会 ◔.̮◔ </div>
        <div class="mt-2">热衷于古诗词、问题目、摸鱼 દ ᵕ̈ ૩</div>
        <div class="mt-2">喜欢听歌 ♫ 、写代码</div>
        <div class="mt-2 title">也许我该出去走走</div>
        <Socialize />
      </div>
    </div>
  )
}

export default Du
