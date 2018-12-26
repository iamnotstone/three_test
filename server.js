/*eslint-disable no-console, no-var */
var express = require('express')

var app = express()


var fs = require('fs')
var path = require('path')


app.use(express.static(path.resolve(__dirname, './src')))

app.listen(8080, function () {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})
