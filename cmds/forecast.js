const ora = require('ora');
const colors = require('colors');
const getForecast = require('../utils/weather-forecast');
const getLocation = require('../utils/location')


module.exports = async (args) => {
    const spinner = ora({
        color: 'yellow',
        spinner: 'dots4',
        text: 'Loading forecast...'
    }).start()
    try {
        const location = (args.location || args.l || await getLocation());
        const paddedLocation = location.padEnd(25, ' ');
        const weather = await getForecast(location);
        if (!weather.data) {
            spinner.stop()
            console.log('unable to get the weather for that location.  Check the spelling and then try again'.cyan);
            return;
        }
        const today = {
            temp: String(weather.data[0].temp + '°F').padEnd(8, ' '),
            wind: weather.data[0].weather.description.padEnd(15, ' '),
            summary: weather.data[0].weather.description.padEnd(16, ' ')
        }
        const tomorrow = {
            temp: String(weather.data[8].temp + '°F').padEnd(8, ' '),
            wind: weather.data[8].weather.description.padEnd(15, ' '),
            summary: weather.data[8].weather.description.padEnd(16, ' ')
        }
        const dayAfter = {
            temp: String(weather.data[16].temp + '°F').padEnd(8, ' '),
            wind: weather.data[16].weather.description.padEnd(8, ' '),
            summary: weather.data[16].weather.description.padEnd(16, ' ')
        }

        spinner.stop()
        if (!weather.data) {
            console.log('unable to get the weather for that location.  Check the spelling and then try again'.cyan);
            return;
        }
        // DO NOT CHANGE FORMATTING - it will align correctly in the console
        console.log(`  
         -------------------------------------------------------------------
        |              3 Day Forecast for ${paddedLocation}         |
        |                                                                   |
        |           Today             Tomorrow            Day After         |
        |    -----------------    -----------------    -----------------    |
        |   |                 |  |                 |  |                 |   |
        |   | temp: ${today.temp}  |  | temp: ${tomorrow.temp}  |  | temp: ${dayAfter.temp}  |   |
        |   | ${today.summary}|  | ${tomorrow.summary}|  | ${dayAfter.summary}|   |
        |   |                 |  |                 |  |                 |   |
        |    -----------------    -----------------    -----------------    |
        |                                                                   |
         -------------------------------------------------------------------      
         `.cyan)
    } catch (err) {
        spinner.stop()
        console.error(err)
    }
}