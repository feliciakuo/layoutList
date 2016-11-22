import React from 'react'
import { VisibilityFilters, addFormFilters } from './action'
import styles from './styles/tool.css'

const { SHOW_ACTIVE, SHOW_REMOVE } = VisibilityFilters
const { SHOW_FORM } = addFormFilters

const ToolList = ({ onAddClick, onShowActive, onShowRemoves }) => (
  <div className={styles.btnWrap}>
    <button onClick={() => onShowActive(SHOW_ACTIVE)}>SHOW ACTIVE</button>
    <button onClick={() => onShowRemoves(SHOW_REMOVE)}>SHOW REMOVED</button>
    <button onClick={() => onAddClick(SHOW_FORM)}>Add</button>
  </div>
)

export default ToolList
