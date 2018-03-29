# medium-graphql

[![Build Status](https://travis-ci.org/Wizyma/medium-graphql.svg?branch=master)](https://travis-ci.org/Wizyma/medium-graphql)
[![codecov](https://codecov.io/gh/Wizyma/medium-graphql/branch/master/graph/badge.svg)](https://codecov.io/gh/jsparanoguy/medium-graphql)
[![Known Vulnerabilities](https://snyk.io/test/github/jsparanoguy/medium-graphql/badge.svg)](https://snyk.io/test/github/jsparanoguy/medium-graphql)
[![npm version](https://badge.fury.io/js/medium-graphql.svg)](https://badge.fury.io/js/medium-graphql)
[![Greenkeeper badge](https://badges.greenkeeper.io/Wizyma/medium-graphql.svg)](https://greenkeeper.io/)

medium api using graphql

use ``npm install medium-graphql`` to install the package

this is a middleware that should be used with your server 

express example :
```javascript
const express = require('express')
const app = express()
const mediumServer = require('medium-graphql').default

app.use('/graphql', mediumServer) // you can use whatever path you want for the middleware

app.listen(3000)
```
For now only medium posts are available, i plan to implement the user search too

made with :heartbeat:
