let currentSnackbar = null
let timeout = null

function createPromise (duration, context) {
  return new Promise(resolve => {
    currentSnackbar = {
      destroy: () => {
        currentSnackbar = null
        resolve()
      }
    }

    if (duration !== Infinity) {
      timeout = window.setTimeout(() => {
        destroySnackbar()
        context._vnode.componentInstance.initDestroy(true)
      }, duration)
    }
  })
}

export const destroySnackbar = () => {
  return new Promise(resolve => {
    if (currentSnackbar) {
      window.clearTimeout(timeout)
      currentSnackbar.destroy()
      window.setTimeout(resolve, 400)
    } else {
      resolve()
    }
  })
}

export const createSnackbar = (duration, context) => {
  if (currentSnackbar) {
    return destroySnackbar().then(() => {
      return createPromise(duration, context)
    })
  }

  return createPromise(duration, context)
}
