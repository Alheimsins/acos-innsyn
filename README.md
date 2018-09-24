# acos-innsyn

A Node.js module for connecting to the Acos Innsyn solution from Acos.

This API is based on screenscraping and might break without warning.

# API

Configure the module with an options object containing the endpoint.

## getUtvalg

Lists all utvalg.

```JavaScript
const { getUtvalg } = require('@alheimsins/acos-innsyn')
const options = {
  endpoint: 'https://www.baerum.kommune.no/innsyn/politikk'
}
getUtvalg(options)
  .then(console.log)
  .catch(console.error)
```

## getMedlemmer

Lists all members of a given utvalg.

```JavaScript
const { getMembers } = require('@alheimsins/acos-innsyn')
const options = {
  endpoint: 'https://www.baerum.kommune.no/innsyn/politikk',
  utvalgId: '8'
}
getMembers(options)
  .then(console.log)
  .catch(console.error)
```

# License
[MIT](LICENSE)
