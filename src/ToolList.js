import React from 'react'
import Addbtn from './Addbtn'
import styles from './tool.css'

const ToolList = ({ items, onAddClick }) => (
  <div className={styles.btnWrap}>
    <Addbtn addClick={() => onAddClick(items)} />
  </div>
)

export default ToolList
