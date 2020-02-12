#!/usr/bin/env node

var gplay = require('google-play-scraper')

const [, , ...args] = process.argv

gplay.app({appId: args})
  .then(console.log, console.log)
