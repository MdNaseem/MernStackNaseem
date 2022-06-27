const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('hello world!')
})
app.delet('/collage', (req, res) => {
    res.send('collage!')
  })
  app.get('/school', (req, res) => {
    res.send('my name is host!')
  })
  app.put('/village', (req, res) => {
    res.send('md naseem!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})