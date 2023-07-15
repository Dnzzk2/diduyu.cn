import { Component, Index } from 'solid-js'

interface SocializeProps {
  data: {
    icon: string
    class: string
    link: string
  }
}

const SocializeItem: Component<SocializeProps> = (props) => {
  const { data } = props
  return (
    <a
      onClick={(e) => {
        if (!data.link) {
          e.preventDefault()
        }
      }}
      href={data.link}
      target="_blank"
      class={`brands  relative inline-flex px-3 py-2 mr-2 sm:px-5 rounded-md bg-gray-50 ${data.class} hover:text-white `}
    >
      <div class="flex justify-center">
        <div class={data.icon} />
      </div>
    </a>
  )
}

export default () => {
  const socialLists = [
    {
      icon: 'i-fa-brands-github',
      class: 'before:bg-gray-700',
      link: 'https://github.com/Dnzzk2'
    },
    {
      icon: 'i-ri-markdown-line',
      class: 'before:bg-[#359EE6]',
      link: ''
    },
    {
      icon: 'i-ri-bilibili-fill',
      class: 'before:bg-[#01AFFD]',
      link: ''
    },
    {
      icon: 'i-ri-openai-fill',
      class: 'before:bg-custom-openaicolor ',
      link: ''
    },
    {
      icon: 'i-ri-heart-2-line',
      class: 'before:bg-[#fb7299] ',
      link: 'https://github.com/h7ml'
    }
  ]

  return (
    <div class="mt-4">
      <Index each={socialLists}>{(item) => <SocializeItem data={item()} />}</Index>
    </div>
  )
}
