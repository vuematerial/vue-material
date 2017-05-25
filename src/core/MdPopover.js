import Popper from 'popper.js'

export default class MdPopover {
  constructor (reference, content) {
    this.referenceEl = this.getElement(reference)
    this.contentEl = this.getElement(content)
    this.removeNode(this.contentEl)
  }

  getElement (selector) {
    const element = document.querySelector(selector)

    if (element) {
      return element
    }

    throw new Error(`The ${selector} selector is not a valid HTML Element`)
  }

  removeNode (content) {
    const { parentNode } = content

    if (parentNode.contains(content)) {
      parentNode.removeChild(content)
    }
  }

  detachFromBody () {
    const { body } = document

    if (body.contains(this.contentEl)) {
      body.removeChild(this.contentEl)
    }
  }

  attachToBody () {
    const { body } = document

    if (!body.contains(this.contentEl)) {
      body.appendChild(this.contentEl)
    }
  }

  createElement () {
    if (!this._manager) {
      this.attachToBody()

      return new Promise(resolve => {
        this._manager = new Popper(this.referenceEl, this.contentEl, {
          placement: 'top',
          modifiers: {
            preventOverflow: {
              padding: 8,
              boundariesElement: document.body
            }
          },
          onCreate: resolve
        })
      })
    }

    return Promise.resolve()
  }

  removeElement () {
    if (this._manager) {
      return new Promise(resolve => {
        this._manager.destroy()
        this.detachFromBody()
        delete this._manager
        resolve()
      })
    }

    return Promise.resolve()
  }

  update () {
    if (this._manager) {
      this._manager.scheduleUpdate()
    }
  }

  setPosition (newPos) {
    if (this._manager) {
      this._manager.options.placement = newPos
      this.update()
    }
  }
}
