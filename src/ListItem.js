/**
* List items
*/

import React from 'react'
import { connect } from 'react-redux'
import { removeItem, revertItem } from './action'
import styles from './styles/list.css'

const mapStateToProps = (state) => {
  // console.log('state', state)

  return {
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
  onEditClick: (id) => {
    console.log('onEditClick', id)
  }
})

const ListItem = ({ index, filter, value, onRemoveClick, onRevertClick, onEditClick }) => {
  const switchControl = []

  switch (filter) {
    case 'SHOW_REMOVE':
      switchControl.push(<button key={'revert'} onClick={() => onRevertClick(index)}>Revert</button>)
      break
    default:
      switchControl.push(<button key={'edit'} onClick={() => onEditClick(index)}>Edit</button>)
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
