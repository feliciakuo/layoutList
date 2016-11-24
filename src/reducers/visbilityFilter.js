/**
* reducer
* show active items or removed items
*/

import { VisibilityFilters, SET_VISIBILITY_FILTER } from './../actions/action'

const { SHOW_ACTIVE } = VisibilityFilters
const visbilityFilter = (state = SHOW_ACTIVE, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visbilityFilter
