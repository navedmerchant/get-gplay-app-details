/* global describe, it */

var expect = require('chai').expect
var getGplayAppDetails = require('./index')

describe('get gplay app details', function () {
  it('should export a function', function () {
    expect(getGplayAppDetails).to.be.a('function')
  })
})
