export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  render(model) {
    model.forEach((block) => {
      this.insertAdjacentHTML('beforeend', block.toHTML());
    })
  }
}