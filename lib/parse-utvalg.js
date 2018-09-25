const $ = require('cheerio')

function getUtvalgId (url) {
  const partList = url.split('&')
  let utvalg = partList.filter(part => part.startsWith('utvalg'))
  utvalg = utvalg[0].replace('utvalg=', '')
  return utvalg
}

module.exports = page => {
  let utvalg = []
  const rows = $('#moteplan_content>table>tbody>tr>th.header-cell>a', page)
  rows.each((index, row) => {
    utvalg.push({
      Id: getUtvalgId($(row)[0].attribs.href),
      Navn: $(row).text().trim()
    })
  })
  return utvalg
}
