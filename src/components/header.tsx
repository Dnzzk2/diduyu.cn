import { createEffect, Component, createSignal } from 'solid-js'
import scrollToSection from '../utils/utils'

type Poem = {
  hitokoto: string
  from_who: string
  from: string
  uuid: string
}

const Header: Component = () => {
  const [poem, setPoem] = createSignal<Poem>()

  createEffect(() => {
    fetch('https://v1.hitokoto.cn?c=i&encode=json')
      .then((response) => response.json())
      .then((data) => {
        setPoem(data)
      })
      .catch(console.error)
  })

  return (
    <header
      id="header"
      class="bgbg h-screen bg-cover box-border bg-center flex justify-center items-center"
    >
      <div class="w-full text-center ">
        <p class="text-3xl title md:text-5xl ">{poem()?.hitokoto}</p>
      </div>
      <span class="bottomArrow" onClick={() => scrollToSection('#Du')}></span>
    </header>
  )
}

export default Header
