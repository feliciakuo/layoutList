/**
* List body
*/

import React from 'react'
import { connect } from 'react-redux'
import ListItem from './../containers/ListItem'

const getVisibleItems = (state, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return {
        state: state.postsBySubreddit.active.items,
        // state: state.activeItems,
        show: filter
      }
    case 'SHOW_REMOVE':
      console.log('SHOW_REMOVE', state)
      return {
        // state: state.removedItems,
        state: state.postsBySubreddit.removed.items,
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
  console.log('ListBody', items.state)
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
