const getOption = (options, key) => options ?
  (options[key] === false ? false : true ) :
  true

export default (fn, time, option) => {
  const leading = getOption(option, 'leading')
  const trailing = getOption(option, 'trailing')
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
