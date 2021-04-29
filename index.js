const express = require('express')
const app = express()
const port = 3000

let c = 0

app.get('/', (req, res) => {
  c++
  res.send('Hello World: ' + c)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
