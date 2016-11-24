/**
* reducer
* combine reducers
*/

import { combineReducers } from 'redux'
import visbilityFilter from './visbilityFilter'
import addFormSwitch from './addFormSwitch'
import editIndex from './editIndex'
import { activeItems, removedItems } from './items'

const itemApp = combineReducers({
  visbilityFilter,
  addFormSwitch,
  activeItems,
  removedItems,
  editIndex
})

export default itemApp
