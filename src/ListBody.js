/**
* List body
*/

import React from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'

const getVisibleItems = (state, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return {
        state: state.activeItems,
        show: filter
      }
    case 'SHOW_REMOVE':
      return {
        state: state.removedItems,
        show: filter
      }
    default:
      return {
        state: state.activeItems,
        show: filter
      }
  }
}

const mapStateToProps = (state) => {

  return {
    items: getVisibleItems(state, state.visbilityFilter)
  }
}

const ListBody = ({ items }) => {
  // console.log('ListBody', items)
  const filter = items.show

  const listItems = items.state.map((item, index) => {
    return (
      <ListItem
        key={item.id}
        index={index}
        filter={filter}
        value={item}
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
