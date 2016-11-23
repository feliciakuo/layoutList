/**
* 新增項目
*/

import { connect } from 'react-redux'
import { addItem, setAddFormSwitch, updateEditId, editItem } from './../actions/action'
import FormList from './../components/FormList'

const mapStateToProps = state => ({
  editIndex: state.editIndex,
  activeItems: state.activeItems,
  addFormSwitch: state.addFormSwitch
})

const mapDispatchToProps = dispatch => ({
  onSubmitClick: (info) => {
    dispatch(addItem(info))
  },
  onEditClick: (id, info) => {
    dispatch(editItem(id, info))
  },
  onCloseFormClick: (filter) => {
    dispatch(updateEditId(''))
    dispatch(setAddFormSwitch(filter))
  }
})

const ItemForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormList)

export default ItemForm
