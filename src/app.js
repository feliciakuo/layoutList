import React from 'react'
import ToolBar from './toolbar'
import List from './list'
import ItemForm from './ItemForm'
import styles from './styles/index.css'

const App = () => (
  <div className={styles.layout}>
    <h1 className={styles.title}>Layout List</h1>
    <ToolBar />
    <List />
    <ItemForm />
  </div>
)

export default App
