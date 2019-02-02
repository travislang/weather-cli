const ora = require('ora');
const colors = require('colors');
const getWeather = require('../utils/weather');

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
        const location = args.location || args.l
        const weather = await getWeather(location)

        spinner.stop()

        console.log(`Current conditions in ${location}:`)
        console.log(`\t${weather.condition.temp}° ${weather.condition.text}`)
    } catch (err) {
        spinner.stop()

        console.error(err)
    }
}