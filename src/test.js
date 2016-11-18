import { connect } from 'react-redux'
import { addItem } from './action'
import TodoList from './todolist'

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
  onTodoClick: (id) => {
    console.log('in', dispatch(addItem(id)))
    dispatch(addItem(id))
  }
})

const Test = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default Test
