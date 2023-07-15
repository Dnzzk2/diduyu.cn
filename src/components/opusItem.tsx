import { Component } from 'solid-js'

interface Props {
  data: {
    name: string
    desc: string
    link: string
    icon: string
  }
}

const OpusItem: Component<Props> = (props) => {
  const { data } = props

  return (
    <a
      class="px-4 py-3 bg-gray-50 rounded-md transition-colors hover:bg-gray-100 "
      href={data.link}
      target="_blank"
      onClick={(e) => {
        if (!data.link) {
          e.preventDefault()
        }
      }}
    >
      <div class="flex h-full items-center justify-center">
        <div class="mr-4 text-4xl">
          <span class={data.icon} />
        </div>
        <div class="flex-1">
          <div class="font-alimama font-medium">{data.name}</div>
          <div class="font-alimama text-sm text-custom-2">{data.desc}</div>
        </div>
      </div>
    </a>
  )
}

export default OpusItem
