// es module
import sum from './sum'

// commonjs
const minus = require('./minus')

// amd
require(['./muti'], function (muti) {
  console.log('muti(23, 24) = ', muti(23, 24))
})

console.log('sum(23, 24) = ', sum(23, 24))
console.log('minus(23, 24) = ', minus(23, 24))