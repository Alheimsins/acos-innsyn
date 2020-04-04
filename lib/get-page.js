const axios = require('axios')

module.exports = async url => {
  if (!url) {
    throw new Error('Missing required input: url')
  }

  const { data } = await axios(url)
  return data
}
