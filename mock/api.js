const mock = require('mockjs')
const express = require('express')

const router = express.Router()

router.get('/user/:id', (req, res) => res.json(req.params))

router.get('/hello', (req, res) => {
  res.json({
    name: 'Lance'
  })
})

router.get('/data', (req, res) => {
  const random = mock.Random
  const data = {
    boolean: random.boolean(),
    integer: random.integer(1, 9527),
    float: random.float(1, 200, 0, 99),
    string: random.string(7, 10),
    range: random.range(1, 78, 5)
  }

  res.json(data)
})

module.exports = router
