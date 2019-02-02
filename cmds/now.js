const ora = require('ora');
const colors = require('colors');
const getWeather = require('../utils/weather');
const getLocation = require('../utils/location')


module.exports = async (args) => {
    const spinner = ora({
        color: 'blue',
        spinner: 'dots4',
        text: 'Loading weather...'
    }).start()
    setTimeout(() => {
        spinner.color = 'yellow';
    }, 1000);
    try {
        const location = (args.location || args.l || await getLocation());
        const paddedLocation = location.padEnd(25, ' ');
        const weather = await getWeather(location)
        const temp = String(weather.data[0].temp + '°F').padEnd(8, ' ');
        const summary = weather.data[0].weather.description.padEnd(15, ' ');
        const wind = String(weather.data[0].wind_spd + ' MPH').padEnd(15, ' ');

        spinner.stop()
        // DO NOT CHANGE FORMATTING - it will align correctly in the console
        console.log(`  
         -----------------------------------------------------------
        |        Current Weather for ${paddedLocation}      |
        |                                                           |
        |                      Temp:    ${temp}                    |
        |                      wind:    ${wind}             |
        |                      Summary: ${summary}             |
        |                                                           |
         -----------------------------------------------------------      
         `.cyan)
    } catch (err) {
        spinner.stop()
        console.error(err)
    }
}