function mdSupportsCSSFilter (property: string): boolean {
  const prefixes = ['-webkit-', '-ms-', '-moz-', '']

  return prefixes.some((prefix: string) => {
    const el = document.createElement('div')

    el.style.cssText = `${prefix}filter: ${property}(0 0 1px #000);`

    if (el.style.length != 0) {
      return true
    }

    return false
  })
}

export default mdSupportsCSSFilter
