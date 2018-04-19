const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')

const port = 3001

const app = express()

app.use(cors())

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
