import { Component, createEffect, createSignal, onCleanup } from 'solid-js'
import scrollToSection from '../utils/utils'
import Menu from './Menu'
import navPng from "/src/assets/logoX3.png"
const Nav: Component = () => {
  const [isFixed, setIsFixed] = createSignal(false)

  createEffect(() => {
    function scrollListener() {
      const header = document.getElementById('header')
      const scrollPosition = window.scrollY
      setIsFixed(scrollPosition > header.scrollHeight - 100)
    }
    window.addEventListener('scroll', scrollListener)
    onCleanup(() => {
      window.removeEventListener('scroll', scrollListener)
    })
  })
  return (
    <nav
      id="topNav"
      class={`bg-custom-nav top-0 w-full z-40 ${isFixed() ? 'fixed shadow-md  ' : 'absolute'}`}
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center  justify-between sm:justify-around h-16">
          <div class="flex items-center">
            <img src={navPng} alt="logo" width={40} height={40} />
            <span class="logo title text-3xl px-1">Du</span>
          </div>
          <div class="text-custom-2 whitespace-nowrap font-alimama  text-2xl  hidden sm:flex">
            <span
              class="nav-item"
              onClick={() => scrollToSection(isFixed() ? '#header' : '#topNav')}
            >
              首页
            </span>
            <span class="nav-item" onClick={() => scrollToSection('#Du')}>
              关于
            </span>
            <span class="nav-item" onClick={() => scrollToSection('#Opus')}>
              作品
            </span>
            <span class="nav-item" onClick={() => scrollToSection('#Chain')}>
              友链
            </span>
          </div>
          <Menu isFixed={isFixed()} />
        </div>
      </div>
    </nav>
  )
}

export default Nav
