const getPage = require('./get-page')
const parseMedlemmer = require('./parse-medlemmer')

module.exports = options => {
  return new Promise(async (resolve, reject) => {
    if (typeof options !== 'object') {
      return reject(new Error('Missing required input: options object'))
    }

    if (!options.endpoint) {
      return reject(new Error('Missing required input: options.endpoint'))
    }

    if (!options.utvalgId) {
      return reject(new Error('Missing required input: options.utvalgId'))
    }
    const now = new Date()
    const url = `${options.endpoint}/wfinnsyn.ashx?response=moteplan_utvalg&fradato=${now.getFullYear()}-01-01T00:00:00&utvalg=${options.utvalgId}`

    try {
      const body = await getPage(url)
      let data = parseMedlemmer(body)
      return resolve(Object.assign({}, { Id: options.utvalgId }, data))
    } catch (error) {
      return reject(error)
    }
  })
}
