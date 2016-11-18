/**
* 工具列
*/

import { connect } from 'react-redux'
import { addItem } from './action'
import ToolList from './ToolList'

const getVisibleTodos = (items, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return items
  }
}

const mapStateToProps = state => ({
  items: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onAddClick: (id) => {
    console.log('toobar', dispatch(addItem(id)))
    dispatch(addItem(id))
  }
})

const ToolBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolList)

export default ToolBar
