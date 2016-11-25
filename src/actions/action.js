import 'whatwg-fetch'

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
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALDATE_SUBREDDIT = 'INVALDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

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

// 載入資料
export function selectSubreddit(subreddit) {
  return { type: SELECT_SUBREDDIT, subreddit }
}

// 更新資料
export function invaldateSubreddit(subreddit) {
  return { type: INVALDATE_SUBREDDIT, subreddit }
}

// 針對subreddit 抓取 posts
export function requestPosts(subreddit) {
  return { type: REQUEST_POSTS, subreddit }
}

// 當網路請求傳回來時，我們會 dispatch RECEIVE_POSTS
export function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receiveAt: Date.now()
  }
}

// thunk action creator
export function fetchPosts(subreddit) {

  // Thunk middleware 知道如何去處理 function
  return (dispatch) => {
    // 呼叫 API
    dispatch(requestPosts(subreddit))

    return fetch('http://localhost:3000/removed')
      .then((response) => {
        return response.json()
      }).then((json) => {
        console.log('parsed json', json)

        dispatch(receivePosts(subreddit, json))
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
}
