const axios = require('axios')

module.exports = async (location) => {
    const results = await axios({
        method: 'get',
        url: `https://api.weatherbit.io/v2.0/forecast/3hourly`,
        params: {
            key: process.env.WEATHERBIT_API,
            units: 'I',
            city: location
        },
    })

    return results.data
}