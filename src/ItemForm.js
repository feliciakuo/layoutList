/**
* 新增項目
*/

import { connect } from 'react-redux'
import { addItem } from './action'
import FormList from './FormList'

const mapStateToProps = (state) => {
  // console.log('mapState', state.items)
  return {
    activeItems: state.activeItems
  }
}

const mapDispatchToProps = dispatch => ({
  onAddClick: (info) => {
    console.log('mapDispatch', info)
    dispatch(addItem(info))
  }
})

const ItemForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormList)

export default ItemForm
