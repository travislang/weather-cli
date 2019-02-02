const axios = require('axios')

module.exports = async () => {
    const results = await axios({
        method: 'get',
        url: `https://api.ipdata.co?api-key=${process.env.IPDATA}`,
    })

    const { city, region } = results.data
    return `${city}, ${region}`
}