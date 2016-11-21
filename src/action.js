/*
* action type
*/
export const ADD_ITEM = 'ADD_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
* 其他常數
*/

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_REMOVE: 'SHOW_REMOVE'
}

/*
* action creator
*/
let nextItemId = 0
export function addItem(info) {
  info.id = nextItemId++
  return {
    type: ADD_ITEM,
    info
  }
}

export function removeItem(id) {
  return { type: REMOVE_ITEM, id }
}

export function editItem(index) {
  return { type: EDIT_ITEM, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
