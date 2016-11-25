import React from 'react'
import ReactDOM from 'react-dom'
// import thunkMilldeware from 'react-thunk'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import itemApp from './reducers/index'
import './styles/global.css'
import App from './components/app'

const store = createStore(itemApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
