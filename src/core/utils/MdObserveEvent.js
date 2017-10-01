export default (el, eventName, observerFn, options) => {
  function killObserver () {
    el.removeEventListener(eventName, observerFn)
  }

  el.addEventListener(eventName, observerFn, options || false)

  return {
    destroy: killObserver
  }
}
