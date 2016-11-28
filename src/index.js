import React from 'react'
import ReactDOM from 'react-dom'
import thunkMilldeware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts, receivePosts } from './actions/action'
import itemApp from './reducers/index'
import './styles/global.css'
import App from './components/app'

const store = createStore(
  itemApp,
  applyMiddleware(thunkMilldeware)
)

// store.dispatch(selectSubreddit('active'))
store.dispatch(fetchPosts('active', 'http://localhost:3000/active')).then(() =>
  console.log('app', store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
