import { combineReducers } from 'redux'
import { VisibilityFilters, addFormFilters, SET_VISIBILITY_FILTER, SET_ADDFORM_SWITCH, ADD_ITEM, REMOVE_ITEM, REVERT_ITEM, EDIT_ITEM, UPDATE_EDIT_ID } from './../actions/action'

const { SHOW_ACTIVE } = VisibilityFilters
const visbilityFilter = (state = SHOW_ACTIVE, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const { CLOSE_FORM } = addFormFilters
const addFormSwitch = (state = CLOSE_FORM, action) => {
  switch (action.type) {
    case SET_ADDFORM_SWITCH:
      return action.filter
    default:
      return state
  }
}

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

const editIndex = (state = '', action) => {
  switch (action.type) {
    case UPDATE_EDIT_ID:
      return action.id
    default:
      return state
  }
}

let removedTarget = {}

const activeItems = (state = activeData, action) => {
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

const removedItems = (state = removeData, action) => {
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

// function itemApp(state = {}, action) {
//   return {
//     visbilityFilter: visbilityFilter(state.visbilityFilter, action),
//     items: items(state.items, action)
//   }
// }

const itemApp = combineReducers({
  visbilityFilter,
  addFormSwitch,
  activeItems,
  removedItems,
  editIndex
})

export default itemApp
