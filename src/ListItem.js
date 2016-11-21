/**
* List items
*/

import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from './action'
import styles from './list.css'


const mapStateToProps = (state) => {
  // console.log(state)

  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => ({
  onRemoveClick: (id) => {
    dispatch(removeItem(id))
  }
})

const ListItem = ({ value, index, onRemoveClick }) => {
  // console.log('inner', index)

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
        <button>Edit</button>
        <button onClick={() => onRemoveClick(index)}>Delete</button>
      </td>
    </tr>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem)

// export default ListItem
