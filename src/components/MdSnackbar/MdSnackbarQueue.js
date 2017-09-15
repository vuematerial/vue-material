let currentSnackbar = null
let timeout = null

function createPromise (duration) {
  return new Promise(resolve => {
    currentSnackbar = {
      destroy: () => {
        currentSnackbar = null
        resolve()
      }
    }

    if (duration !== Infinity) {
      timeout = window.setTimeout(destroySnackbar, duration)
    }
  })
}

export const destroySnackbar = () => {
  return new Promise(async resolve => {
    if (currentSnackbar) {
      window.clearTimeout(timeout)
      currentSnackbar.destroy()
      window.setTimeout(resolve, 400)
    } else {
      resolve()
    }
  })
}

export const createSnackbar = async duration => {
  if (currentSnackbar) {
    await destroySnackbar()

    return createPromise(duration)
  }

  return createPromise(duration)
}
