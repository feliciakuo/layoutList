/**
* List table
*/

import React from 'react'
import ListBody from './ListBody'

const List = () => (
  <div>
    <table>
      <thead>
        <tr>
          <td>TPL</td>
          <td>Name</td>
          <td>dev link</td>
          <td>master link</td>
          <td>ver</td>
          <td>bulider</td>
          <td>group</td>
          <td>contol</td>
        </tr>
      </thead>
      <ListBody />
    </table>
  </div>
)

export default List
