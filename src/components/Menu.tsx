import { Component, createSignal } from 'solid-js'
import scrollToSection from '../utils/utils'

type MenuProps = {
  isFixed: boolean
}

const Menu: Component<MenuProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false)

  const rollbackIsOpen = () => {
    setIsOpen(!isOpen())
  }

  const scrollTo = (selector: string) => {
    scrollToSection(selector)
    rollbackIsOpen()
  }

  return (
    <div class="sm:hidden">
      <span
        class={`i-ri-align-right text-2xl text-custom-2 hover:text-custom-1 `}
        onClick={rollbackIsOpen}
      />
      <div onClick={rollbackIsOpen} class={`mask inset-0 ${isOpen() ? 'open' : 'hidden'}`}></div>
      <div class={`drawer  bg-custom-nav ${isOpen() ? 'open' : ''}`}>
        <div class="flex justify-end mb-4 ">
          <span
            class="i-ri-align-right text-2xl text-custom-2 hover:text-custom-1"
            onClick={rollbackIsOpen}
          />
        </div>
        <div class="nav-item-sm" onClick={() => scrollTo(props?.isFixed ? '#header' : '#topNav')}>
          首页
        </div>
        <div class="nav-item-sm" onClick={() => scrollTo('#Du')}>
          关于
        </div>
        <div class="nav-item-sm" onClick={() => scrollTo('#Opus')}>
          作品
        </div>
        <div class="nav-item-sm" onClick={() => scrollTo('#Chain')}>友链</div>
      </div>
    </div>
  )
}

export default Menu
