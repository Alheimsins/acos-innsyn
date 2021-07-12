const cheerio = require('cheerio')

function mapMember (data) {
  return {
    Id: null,
    Funksjon: data[2],
    Representerer: data[1],
    Sortering: 1,
    Provider: null,
    Utvalg: null,
    Person: {
      Id: null,
      Fornavn: data[0],
      Mellomnavn: null,
      Etternavn: data[0],
      Adresse: null,
      Postnummer: null,
      Poststed: null,
      Epost: data.length === 5 ? data[4] : data[5],
      Telefon: data[3],
      BildeUrl: null,
      Provider: null,
      Utvalg: null
    }
  }
}

module.exports = page => {
  const medlemmer = []

  const $ = cheerio.load(page)
  const navn = $('div.sec>h2.h2', page).text().trim()
  const rows = $('table.table.i-bgw.hh.mult>tbody>tr', page)
  rows.each((index, row) => {
    const cells = $('td', row)
    const data = []
    cells.each((index, cell) => {
      data.push($(cell).text().trim())
    })
    medlemmer.push(mapMember(data))
  })
  return {
    Navn: navn,
    Medlemmer: medlemmer
  }
}
