/**
* List body
*/

import React from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'

const getVisibleItems = (state, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return state.activeItems
    case 'SHOW_REMOVE':
      return state.removedItems
    default:
      return state.activeItems
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    items: getVisibleItems(state, state.visbilityFilter)
  }
}

const ListBody = ({ items }) => {
  // console.log('ListBody', items)

  const listItems = items.map((item, index) => {
    // console.log('in items', item)

    return (
      <ListItem
        key={item.id}
        value={item}
        index={index}
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
