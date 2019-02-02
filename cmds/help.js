colors = require('colors');

const menus = {
    main: `
    weather [command] <options>

    now ................ show weather right now
    version ............ show package version
    help ............... show help menu for a command
    `,

    now: `
    weather now <options>
    <default> .......... The users current location
    --location, -l ..... the location to use
    `,
    forecast: `
    weather forecast <options>
    <default> .......... The users current location
    --location, -l ..... the location to use
    `,
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]
    
    console.log((menus[subCmd] && menus[subCmd].cyan) || menus.main.cyan)
}