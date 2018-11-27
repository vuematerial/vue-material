const base = 'color: #303030; font: 500 16px/12px "SF Mono", "Hack", monospace; vertical-align: middle;'
const spacer = 'line-height: 8px;'
const green = `${base}; color: #b3ff58;`
const cyan = `${base}; color: #84ffff;`
const blue = `${base}; color: #526dfe;`
const emoji = `${base}; font-family: sans-serif; font-size: 12px; color: #f44336;`
const title = `${base}; font-size: 20px; line-height: 1.5em;`
const text = `${base}; line-height: 1em;`
const message = `${base}; font-size: 14px; line-height: 17px;`

export default () => {
  console.clear()
  console.log('%c                         #             %c#', green, blue)
  console.log('%c                        ##            %c##', green, blue)
  console.log('%c                       ###           %c###', green, blue)
  console.log('%c                     #####         %c#####', green, blue)
  console.log('%c                    ######        %c######', green, blue)
  console.log('%c                  ########      %c########', green, blue)
  console.log('%c                ##########    %c##########', green, blue)
  console.log('%c               ###########   %c###########', green, blue)
  console.log('%c             ############# %c#############', green, blue)
  console.log('%c            #############%c#%c##############', green, cyan, blue)
  console.log('%c          ##############%c##%c##############', green, cyan, blue)
  console.log('%c        ##############%c####%c##############', green, cyan, blue)
  console.log('%c       ##############%c#####%c##############', green, cyan, blue)
  console.log('%c     ###############%c######%c##############', green, cyan, blue)
  console.log('%c   ###############%c########%c##############', green, cyan, blue)
  console.log('%c  ##############%c##########%c##############', green, cyan, blue)
  console.log('%c##############%c############%c##############', green, cyan, blue)
  console.log('%c', spacer)
  console.log('%c    Material Design for Vue.js', title)
  console.log('%c        Made with%c ♥ %cby Marcos Moura', text, emoji, text)
  console.log('%c', spacer)
  console.log('%c', spacer)
  console.log('%cLooking something specific? We can help you! Join us on discord: https://discord.gg/rgcmTtm', message)
  console.log('%c', spacer)
}
