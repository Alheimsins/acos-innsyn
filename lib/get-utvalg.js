const getPage = require('./get-page')
const parseUtvalg = require('./parse-utvalg')

module.exports = options => {
  return new Promise(async (resolve, reject) => {
    
    if (typeof options !== 'object') {
      return reject(new Error('Missing required input: options object'))
    }

    if (!options.endpoint) {
      return reject(new Error('Missing required input: options.endpoint'))
    }

    const url = `${options.endpoint}/wfinnsyn.ashx?response=moteplan`

    try {
      const body = await getPage(url)
      let data = parseUtvalg(body)
      return resolve(data)
    } catch (error) {
      return reject(error)
    }
  })
}
