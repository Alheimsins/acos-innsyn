const axios = require('axios')

module.exports = url => {
  return new Promise(async (resolve, reject) => {
    if (!url) {
      return reject(new Error('Missing required input: url'))
    }

    try {
      const { data } = await axios(url)
      return resolve(data)
    } catch (error) {
      return reject(error)
    }
  })
}
