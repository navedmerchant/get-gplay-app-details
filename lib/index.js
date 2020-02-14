#!/usr/bin/env node

var gplay = require('google-play-scraper')

const [, , ...args] = process.argv

gplay.app({appId: args})
  .then(result => {
      console.log(JSON.stringify(result));
  }, console.error)
