// npm - global command
// local debpendency ==> npm i <packagename>
// global dependency ==> npm -nstall -g <packagename>
// package.json -manifest (store important info about project)
// manual
// npm init (automate)
// npm init -y (everything default)

const _ = require('loadash')
const items = [1,2,[2,[4]]]

const newItems = _.flattenDeep(items)
console.log(newItems)