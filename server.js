const express = require('express')
const app = express()

app.get('/', function(res, req) {
    console.log('Hello, world')
})
.listen(3001)