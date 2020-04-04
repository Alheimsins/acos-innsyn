const getPage = require('./get-page')
const parseUtvalg = require('./parse-utvalg')

module.exports = async options => {
  if (typeof options !== 'object') {
    throw new Error('Missing required input: options object')
  }

  if (!options.endpoint) {
    throw new Error('Missing required input: options.endpoint')
  }

  const url = `${options.endpoint}/wfinnsyn.ashx?response=moteplan`

  const body = await getPage(url)
  const data = parseUtvalg(body)
  return data
}
