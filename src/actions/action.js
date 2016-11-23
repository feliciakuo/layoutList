/*
* action type
*/
export const ADD_ITEM = 'ADD_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REVERT_ITEM = 'REVERT_ITEM'
export const UPDATE_EDIT_ID = 'UPDATE_EDIT_ID'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_ADDFORM_SWITCH = 'SET_ADDFORM_SWITCH'

/*
* 其他常數
*/

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_REMOVE: 'SHOW_REMOVE'
}

export const addFormFilters = {
  SHOW_FORM: 'SHOW_FORM',
  CLOSE_FORM: 'CLOSE_FORM'
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

export function revertItem(id) {
  return { type: REVERT_ITEM, id }
}

export function editItem(id, info) {
  return { type: EDIT_ITEM, id, info }
}

export function updateEditId(id) {
  return { type: UPDATE_EDIT_ID, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function setAddFormSwitch(filter) {
  return { type: SET_ADDFORM_SWITCH, filter }
}
