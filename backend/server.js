const express = require('express');
const exerciseRoute = require('./route/exercise.js');
const userRoute = require('./route/user.js');

const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('hello world!')
})
app.delete('/collage', (req, res) => {
    res.send('collage!')
  })
  app.get('/school', (req, res) => {
    res.send('my name is host!')
  })
  app.put('/village', (req, res) => {
    res.send('md naseem!')
  })
  app.use('/exercise',exerciseRoute);
  app.use('/user',userRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})