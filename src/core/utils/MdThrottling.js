

export default (fn, time, option) => {
  const leading = option ?
    (option.leading === false ? false : true ) :
    true
  const trailing = option ?
    (option.trailing === false ? false : true ) :
    true
  let timeout = null

  return function () {
    const functionCall = () => fn.apply(this, arguments)

    if (timeout) {
      return false
    }

    if (!timeout && leading) {
      functionCall()
    }

    timeout = setTimeout(() => {
      timeout = null
      if (trailing) {
        functionCall()
      }
    }, time)
  }
}
