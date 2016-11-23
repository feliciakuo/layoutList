import React from 'react'
import List from './List'
import ToolBar from './../containers/ToolBar'
import ItemForm from './../containers/ItemForm'
import styles from './../styles/index.css'

const App = () => (
  <div className={styles.layout}>
    <h1 className={styles.title}>Layout List</h1>
    <ToolBar />
    <List />
    <ItemForm />
  </div>
)

export default App
