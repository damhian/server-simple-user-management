var express = require('express')
var app = express()

module.exports =  app.use(function (req, res, next) {
  console.log('This is middleware:', Date.now())
  next()
})