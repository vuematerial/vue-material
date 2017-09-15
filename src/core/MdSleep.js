export default duration => {
  return new Promise(resolve => {
    const timeout = window.setTimeout(() => {
      resolve(timeout)
    }, duration)
  })
}
