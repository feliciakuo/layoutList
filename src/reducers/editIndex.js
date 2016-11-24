/**
* reducer
* update the index
*/

import { UPDATE_EDIT_ID } from './../actions/action'

const editIndex = (state = '', action) => {
  switch (action.type) {
    case UPDATE_EDIT_ID:
      return action.id
    default:
      return state
  }
}

export default editIndex
