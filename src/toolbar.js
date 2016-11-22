/**
* 工具列
*/

import { connect } from 'react-redux'
import { setVisibilityFilter, setAddFormSwitch } from './action'
import ToolList from './ToolList'

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  onAddClick: (filter) => {
    dispatch(setAddFormSwitch(filter))
  },
  onShowActive: (filter) => {
    dispatch(setVisibilityFilter(filter))
  },
  onShowRemoves: (filter) => {
    dispatch(setVisibilityFilter(filter))
  }
})

const ToolBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolList)

export default ToolBar
