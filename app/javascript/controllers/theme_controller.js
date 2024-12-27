import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggleButton", "darkIcon", "lightIcon"]

  connect() {
    this.updateTheme()
    this.setupIcons()
  }

  updateTheme() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.darkIconTarget.classList.add('hidden')
      this.lightIconTarget.classList.remove('hidden')
    } else {
      document.documentElement.classList.remove('dark')
      this.darkIconTarget.classList.remove('hidden')
      this.lightIconTarget.classList.add('hidden')
    }
  }

  toggle() {
    // Toggle the icons
    this.darkIconTarget.classList.toggle('hidden')
    this.lightIconTarget.classList.toggle('hidden')

    // If is dark mode
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
}
