/**
* List items
*/

import React from 'react'
import { connect } from 'react-redux'
import { removeItem, revertItem, updateEditId, setAddFormSwitch, addFormFilters } from './../actions/action'
import styles from './../styles/list.css'

const mapStateToProps = (state) => {
  console.log('state111', state)

  return {
    // items: state.postsBySubreddit.rmItems.items
    items: state.items
  }
}

const mapDispatchToProps = dispatch => ({
  onRemoveClick: (id) => {
    dispatch(removeItem(id))
  },
  onRevertClick: (id) => {
    dispatch(revertItem(id))
  },
  onEditClick: (filter, id) => {
    dispatch(updateEditId(id))
    dispatch(setAddFormSwitch(filter))
  }
})
const { SHOW_FORM } = addFormFilters
const ListItem = ({ index, filter, value, onRemoveClick, onRevertClick, onEditClick }) => {
  const switchControl = []

  console.log('value', value)

  switch (filter) {
    case 'SHOW_REMOVE':
      switchControl.push(<button key={'revert'} onClick={() => onRevertClick(index)}>Revert</button>)
      break
    default:
      switchControl.push(<button key={'edit'} onClick={() => onEditClick(SHOW_FORM, index)}>Edit</button>)
      switchControl.push(<button key={'del'} onClick={() => onRemoveClick(index)}>Delete</button>)
  }

  return (
    <tr>
      <td>{value.tpl}</td>
      <td>{value.name}</td>
      <td><a href={value.url}>測試</a></td>
      <td><a href={value.url}>正式</a></td>
      <td>{value.ver}</td>
      <td>{value.bulider}</td>
      <td>{value.group}</td>
      <td className={styles.btnWrap}>
        {switchControl}
      </td>
    </tr>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem)
