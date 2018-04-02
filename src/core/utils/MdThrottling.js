

export default (fn, time, option) => {
  const leading = option ?
    (option.leading === false ? false : true ) :
    true
  const trailing = option ?
    (option.trailing === false ? false : true ) :
    true
  let timeout = null
  let duplicated = false

  return function () {
    const functionCall = () => fn.apply(this, arguments)

    if (timeout) {
      duplicated = true
      return false
    } else if (leading) {
      functionCall()
    }

    const setThrottling = () => {

      timeout = setTimeout(() => {
        timeout = null

        if (duplicated && trailing) {
          duplicated = false
          functionCall()
          setThrottling()
        }
      }, time)
    }
  }
}
