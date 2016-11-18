/**
* 新增項目 - 表單內容
*/

import React from 'react'
import styles from './formlist.css'

const FormList = ({ onAddClick }) => {
  const input = {}
  const layoutInfo = (val) => {
    const data = {}
    Object.keys(val).forEach((key) => {
      data[key] = val[key].value
    })
    onAddClick(data)
  }

  return (
    <div className={styles.formWrap}>
      <h3>新增版面</h3>
      <hr />
      <label htmlFor="layoutGroup">選擇群組</label>
      <select id="layoutGroup" ref={(val) => { input.group = val }}>
        <option value="Group A">Group A</option>
        <option value="Group B">Group B</option>
      </select>
      <br />
      <label htmlFor="layoutTpl">目錄名稱(TPL)</label>
      <input id="layoutTpl" type="text" ref={(val) => { input.tpl = val }} /><br />
      <label htmlFor="layoutName">版面名稱(Name)</label>
      <input id="layoutName" type="text" ref={(val) => { input.name = val }} /><br />
      <label htmlFor="layoutUrl">網址</label>
      <input id="layoutUrl" type="text" ref={(val) => { input.url = val }} /><br />
      <label htmlFor="layoutVer">版本(ver)</label>
      <input id="layoutVer" type="text" ref={(val) => { input.ver = val }} /><br />
      <label htmlFor="layoutBuilder">建立者(bulider)</label>
      <input id="layoutBuilder" ref={(val) => { input.bulider = val }} type="text" />
      <hr />
      <button type="submit" onClick={() => layoutInfo(input)}>Submit</button>
    </div>
  )
}

export default FormList
