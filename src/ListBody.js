/**
* List body
*/

import React from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'

const getVisibleTodos = (items, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return items
    case 'SHOW_REMOVE':
      return items
    default:
      return items
  }
}

const mapStateToProps = (state) => {
  // console.log('state')
  return {
    items: getVisibleTodos(state.items, state.visbilityFilter)
  }
}

const ListBody = ({ items }) => {
  console.log('ListBody', items)

  const listItems = items.map((item) => {
    console.log('in items', item.info.tpl)

    return (
      <ListItem
        key={item.info.id}
        value={item.info}
      />
    )
  })

  return (
    <tbody>
      { listItems }
    </tbody>
  )
}

export default connect(
  mapStateToProps
)(ListBody)
