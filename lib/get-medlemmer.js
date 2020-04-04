const getPage = require('./get-page')
const parseMedlemmer = require('./parse-medlemmer')

module.exports = async options => {
  if (typeof options !== 'object') {
    throw new Error('Missing required input: options object')
  }

  if (!options.endpoint) {
    throw new Error('Missing required input: options.endpoint')
  }

  if (!options.utvalgId) {
    throw new Error('Missing required input: options.utvalgId')
  }
  const now = new Date()
  const url = `${options.endpoint}/wfinnsyn.ashx?response=moteplan_utvalg&fradato=${now.getFullYear()}-01-01T00:00:00&utvalg=${options.utvalgId}`

  const body = await getPage(url)
  const data = parseMedlemmer(body)
  return { Id: options.utvalgId, ...data }
}
