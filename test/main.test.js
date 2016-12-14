let assert = require('assert')
let color = require('../src_main').color

describe('color', function (){
  it('should return the color associated with the argument', function (){
    let a = color(100)
    assert.equal(a, '#f44b42')
    })
})
