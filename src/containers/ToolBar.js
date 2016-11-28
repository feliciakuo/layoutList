/**
* 工具列
*/

import { connect } from 'react-redux'
import {
  setVisibilityFilter, setAddFormSwitch, selectSubreddit, fetchPosts
} from './../actions/action'
import ToolList from './../components/ToolList'

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
    // dispatch(selectSubreddit('removed'))
    dispatch(fetchPosts('removed', 'http://localhost:3000/removed'))
  }
})

const ToolBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolList)

export default ToolBar
