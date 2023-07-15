export default function scrollToSection(selector: string) {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}
