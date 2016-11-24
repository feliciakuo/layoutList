/**
* reducer
* active items and removed items
*/

import 'whatwg-fetch'
import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, REVERT_ITEM } from './../actions/action'

const activeData = [
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
    id: -4,
    bulider: 'abc',
    name: 'abc',
    tpl: 'abc',
    url: 'abc',
    ver: '2',
    group: 'Group B'
  }
]

const removeData = [
  {
    id: -3,
    bulider: 'DDDDD',
    name: 'DDDDD',
    tpl: 'DDDDD',
    url: 'DDDDD',
    ver: '3',
    group: 'Group B'
  }
]


let removedTarget = {}

export const activeItems = (state = activeData, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        action.info,
        ...state
      ]
    case REMOVE_ITEM:
      removedTarget = Object.assign({}, state, state.splice(action.id, 1))
      return [
        ...state
      ]
    case EDIT_ITEM:
      Object.assign({}, state, state.splice(action.id, 1, action.info))
      return [
        ...state
      ]
    default:
      return state
  }
}

export const removedItems = (state = removeData, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return [
        removedTarget[0],
        ...state
      ]
    case REVERT_ITEM:
      return [
        ...state
      ]
    default:
      return state
  }
}

// fetch('http://localhost:3000/removed')
//   .then((response) => {
//     return response.json()
//   }).then((json) => {
//     console.log('parsed json', json)
//
//   }).catch((ex) => {
//     console.log('parsing failed', ex)
//   })
