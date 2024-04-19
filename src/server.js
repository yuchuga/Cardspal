const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()) //middleware - parse string to JSON object

app.get('/products', (req, res) => {
  res.status(200).send({
    name: 'tshirt',
    size: 'large',
    price: '$40'
  })
});

app.post('/product/:id', (req, res) => {
  const { id } = req.params
  const { logo } = req.body

  if(!logo) {
    res.status(418).send({ message: 'Missing logo' })
  } 
  res.send({
    tshirt: `tshirt with your ${logo} and ${id}`
  })
});

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})