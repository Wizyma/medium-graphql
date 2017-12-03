# medium-graphql

[![Build Status](https://travis-ci.org/jsparanoguy/medium-graphql.svg?branch=master)](https://travis-ci.org/jsparanoguy/medium-graphql)

medium api using graphql

use ``npm install medium-graphql`` to install the package

this is a middleware that should be used with your server 

express example :
```javascript
const express = require('express')
const app = express()
const mediumServer = require('medium-graphql')

app.use('/graphql', mediumServer) // you can use whatever path you want for the middleware

app.listen(3000)
```
For now only medium posts are available, i plane to implement the user search too

made with :heartbeat:
