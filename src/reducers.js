import { combineReducers } from 'redux'
import { lodash } from 'lodash'
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_ITEM, REMOVE_ITEM } from './action'

const { SHOW_ACTIVE } = VisibilityFilters

const visbilityFilter = (state = SHOW_ACTIVE, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// const allData = {
//   active: [
//     {
//       id: -1,
//       bulider: 'a',
//       name: 'a',
//       tpl: 'a',
//       url: 'a',
//       ver: 'a',
//       group: 'Group A'
//     },
//     {
//       id: -2,
//       bulider: 'abc',
//       name: 'abc',
//       tpl: 'abc',
//       url: 'abc',
//       ver: 'abc',
//       group: 'Group B'
//     }
//   ],
//   removed: [
//     {
//       id: -3,
//       bulider: 'DDDDD',
//       name: 'DDDDD',
//       tpl: 'DDDDD',
//       url: 'DDDDD',
//       ver: 'DDDDD',
//       group: 'Group B'
//     }
//   ]
// }

const activeData = [
  {
    id: -1,
    bulider: 'a',
    name: 'a',
    tpl: 'a',
    url: 'a',
    ver: 'a',
    group: 'Group A'
  },
  {
    id: -2,
    bulider: 'abc',
    name: 'abc',
    tpl: 'abc',
    url: 'abc',
    ver: 'abc',
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
    ver: 'DDDDD',
    group: 'Group B'
  }
]

let removeTarget = {}

const activeItems = (state = activeData, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        action.info,
        ...state
      ]
    case REMOVE_ITEM:
      removeTarget = Object.assign({}, state, state.splice(action.id, 1))
      console.log('activeItems', removeTarget)

      return [
        ...state
      ]
    default:
      return state
  }
}

const removedItems = (state = removeData, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      // const newObj = state.push(action.)
      console.log('removeItems', state, removeTarget)

      return [
        ...state
      ]
    default:
      return state
  }
}

// function itemApp(state = {}, action) {
//   return {
//     visbilityFilter: visbilityFilter(state.visbilityFilter, action),
//     items: items(state.items, action)
//   }
// }

const itemApp = combineReducers({
  visbilityFilter,
  activeItems,
  removedItems
})

export default itemApp
