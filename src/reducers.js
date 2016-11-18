import { combineReducers } from 'redux'
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_ITEM, ROMOVE_ITEM } from './action'

const { SHOW_ACTIVE } = VisibilityFilters

const visbilityFilter = (state = SHOW_ACTIVE, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const data = [
  {
    info: {
      id: -1,
      bulider: 'a',
      name: 'a',
      tpl: 'a',
      url: 'a',
      ver: 'a',
      group: 'Group A'
    }
  },
  {
    info: {
      id: -2,
      bulider: 'abc',
      name: 'abc',
      tpl: 'abc',
      url: 'abc',
      ver: 'abc',
      group: 'Group B'
    }
  }
]

const items = (state = data, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log('reducers ADD_ITEM', action)
      return [
        {
          info: action.info
        },
        ...state
      ]
    case ROMOVE_ITEM:
      console.log('reducers ROMOVE_ITEM', action, state)

      return [
        ...state
        // {
        //   id: action.id,
        //   text: action.text
        // }
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
  items
})

export default itemApp
