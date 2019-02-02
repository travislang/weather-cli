const axios = require('axios')

module.exports = async (location) => {
    await new Promise(resolve => setTimeout(resolve, 5000))
    const results = await axios({
        method: 'get',
        url: `https://api.weatherbit.io/v2.0/current`,
        params: {
            key: process.env.WEATHERBIT_API,
            exclude: 'minutely,hourly,daily,alerts,flags',
        },
    })

    // `https://api.weatherbit.io/v2.0/current?key=aa61859ac903400ba17133e6577fda09&units=I&ip=97.88.25.172

    return results.data.query.results.channel.item
}