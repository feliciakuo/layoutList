/**
* reducer
* combine reducers
*/

import { combineReducers } from 'redux'
import visbilityFilter from './visbilityFilter'
import addFormSwitch from './addFormSwitch'
import editIndex from './editIndex'
import { activeItems, removedItems } from './items'
import {
  SELECT_SUBREDDIT, INVALDATE_SUBREDDIT,
  REQUEST_POSTS, RECEIVE_POSTS
} from './../actions/action'

// function selectedSubreddit(state = 'reactjs', action) {
//   switch (action.type) {
//     case SELECT_SUBREDDIT:
//       return action.subreddit
//     default:
//       return state
//   }
// }

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALDATE_SUBREDDIT:
      console.log('INVALDATE_SUBREDDIT')
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      console.log('REQUEST_POSTS')
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      console.log('RECEIVE_POSTS', action.posts)
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receiveAt
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

const itemApp = combineReducers({
  visbilityFilter,
  addFormSwitch,
  activeItems,
  removedItems,
  editIndex,
  // selectedSubreddit,
  postsBySubreddit
})

export default itemApp
