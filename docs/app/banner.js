if (process.env.NODE_ENV === 'production') {
  const base = 'color: #303030; font-family: "SF Mono", "Hack", monospace; font-size: 16px; font-weight: 500; line-height: 12px; vertical-align: middle;'
  const spacer = 'line-height: 8px;'
  const green = `${base}; color: #b3ff58;`
  const cyan = `${base}; color: #84ffff;`
  const blue = `${base}; color: #526dfe;`
  const emoji = `${base}; font-family: sans-serif; font-size: 12px; color: #f44336;`
  const title = `${base}; font-size: 20px; line-height: 1.5em;`
  const text = `${base}; line-height: 1em;`
  const message = `${base}; font-size: 14px; line-height: 17px;`

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
  console.log('%cLooking something specific? We can help you! Join us on discord: https://discord.gg/vuematerial', message)
}
