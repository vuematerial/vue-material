export default () => {
  const oldConsole = global.console

  global.console = { error: jest.fn() }

  return () => {
    global.console = oldConsole
  }
}
