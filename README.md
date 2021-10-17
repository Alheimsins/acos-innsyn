[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# acos-innsyn

A Node.js module for connecting to the Acos Innsyn solution from Acos.

This API is based on screenscraping and might break without warning.

# API

Configure the module with an options object containing the endpoint.

## getUtvalg

Lists all utvalg.

```JavaScript
(async () => {
  const { getUtvalg } = require('@alheimsins/acos-innsyn')
  const options = {
    endpoint: 'https://www.baerum.kommune.no/innsyn/politikk'
  }
  try {
    const utvalg = await getUtvalg(options)
    console.log(utvalg)
  } catch (error) {
    console.error(error)
  }
})()
```

## getMedlemmer

Lists all members of a given utvalg.

```JavaScript
(async () => {
  const { getMedlemmer } = require('@alheimsins/acos-innsyn')
  const options = {
    endpoint: 'https://www.baerum.kommune.no/innsyn/politikk',
    utvalgId: '8'
  }
  try {
    const medlemmer = await getMedlemmer(options)
    console.log(medlemmer)
  } catch (error) {
    console.error(error)
  }
})()
```

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" alt="Alheimsins logo" height="150px" width="150px" />