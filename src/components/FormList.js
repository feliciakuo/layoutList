/**
* 新增／更新項目 - 表單內容
*/

import React from 'react'
import { addFormFilters } from './../actions/action'
import styles from './../styles/formlist.css'

const { CLOSE_FORM } = addFormFilters
const FormList = ({ activeItems, editIndex, addFormSwitch, onSubmitClick, onCloseFormClick, onEditClick }) => {
  if (addFormSwitch !== 'SHOW_FORM') { return null }
  const [ data, input, inputVal = '' ] = [ {}, {}, activeItems[editIndex] ]
  const getInputValue = (ele) => {
    Object.keys(ele).forEach((key) => {
      data[key] = ele[key].value
    })

    if (editIndex !== '') {
      data.id = inputVal.id
      onEditClick(editIndex, data)
      onCloseFormClick(CLOSE_FORM)
      return
    }
    onSubmitClick(data)
    onCloseFormClick(CLOSE_FORM)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.formWrap}>
        <h3>
          { (editIndex !== '') ? '更新版面' : '新增版面' }
        </h3>
        <hr />
        <label htmlFor="layoutGroup">選擇群組</label>
        <select id="layoutGroup" defaultValue={inputVal.group} ref={(val) => { input.group = val }}>
          <option value="Group A">Group A</option>
          <option value="Group B">Group B</option>
        </select>
        <br />
        <label htmlFor="layoutTpl">目錄名稱(TPL)</label>
        <input id="layoutTpl" type="text" defaultValue={inputVal.tpl} ref={(val) => { input.tpl = val }} /><br />
        <label htmlFor="layoutName">版面名稱(Name)</label>
        <input id="layoutName" type="text" defaultValue={inputVal.name} ref={(val) => { input.name = val }} /><br />
        <label htmlFor="layoutUrl">網址</label>
        <input id="layoutUrl" type="text" defaultValue={inputVal.url} ref={(val) => { input.url = val }} /><br />
        <label htmlFor="layoutVer">版本(ver)</label>
        <input id="layoutVer" type="text" defaultValue={inputVal.ver} ref={(val) => { input.ver = val }} /><br />
        <label htmlFor="layoutBuilder">建立者(bulider)</label>
        <input id="layoutBuilder" type="text" defaultValue={inputVal.bulider} ref={(val) => { input.bulider = val }} />
        <hr />
        <button type="submit" className={styles.submitBtn} onClick={() => getInputValue(input)}>
          { (editIndex !== '') ? 'Update' : 'Submit' }
        </button>
        <button className={styles.closeBtn} onClick={() => onCloseFormClick(CLOSE_FORM)} >X</button>
      </div>
    </div>
  )
}

export default FormList
