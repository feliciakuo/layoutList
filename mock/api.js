const mock = require('mockjs')
const express = require('express')

const router = express.Router()

router.get('/user/:id', (req, res) => res.json(req.params))

router.get('/hello', (req, res) => {
  res.json({
    name: 'Lance'
  })
})

router.get('/removed', (req, res) => {
  res.json([
    {
      id: -4,
      bulider: 'RRR',
      name: 'RRR',
      tpl: 'RRR',
      url: 'RRR',
      ver: '3',
      group: 'Group B'
    }
  ])
})

router.get('/active', (req, res) => {
  res.json([
    {
      id: -1,
      bulider: 'a',
      name: 'a',
      tpl: 'a',
      url: 'a',
      ver: '1',
      group: 'Group A'
    },
    {
      id: -2,
      bulider: 'kkk',
      name: 'kkk',
      tpl: 'kkk',
      url: 'kkk',
      ver: '5',
      group: 'Group B'
    },
    {
      id: -3,
      bulider: 'abc',
      name: 'abc',
      tpl: 'abc',
      url: 'abc',
      ver: '2',
      group: 'Group B'
    }
  ])
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
