var fabcoinjs = require('bitcoinjs-lib')

Object.assign(fabcoinjs.networks, require('./networks'))

fabcoinjs.utils = require('./utils')

module.exports = fabcoinjs
