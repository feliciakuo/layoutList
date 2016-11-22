/**
* 新增項目
*/

import { connect } from 'react-redux'
import { addItem, setAddFormSwitch } from './action'
import FormList from './FormList'

const mapStateToProps = state => ({
  activeItems: state.activeItems,
  addFormSwitch: state.addFormSwitch
})

const mapDispatchToProps = dispatch => ({
  onSubmitClick: (info) => {
    dispatch(addItem(info))
  },
  onCloseFormClick: (filter) => {
    dispatch(setAddFormSwitch(filter))
  }
})

const ItemForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormList)

export default ItemForm
