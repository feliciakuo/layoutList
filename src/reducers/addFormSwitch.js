/**
* reducer
* display or hide the form
*/

import { addFormFilters, SET_ADDFORM_SWITCH } from './../actions/action'

const { CLOSE_FORM } = addFormFilters
const addFormSwitch = (state = CLOSE_FORM, action) => {
  switch (action.type) {
    case SET_ADDFORM_SWITCH:
      return action.filter
    default:
      return state
  }
}

export default addFormSwitch
