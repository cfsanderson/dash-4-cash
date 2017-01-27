import React from 'react'
import InnerNavbar from './InnerNavbar.js'

export default function MyGroups () {
  return (
    <div>
      <header>
        <InnerNavbar />
        <h1>A List of My Groups</h1>
      </header>
      <div>
        <table>
          <tbody>
            <tr>
              <th>My Groups</th>
            </tr>
            <tr>
              <td>Group name A</td>
              <td><button>+ Members</button></td>
            </tr>
            <tr>
              <td>Group name B</td>
              <td><button>+ Members</button></td>
            </tr>
            <tr>
              <td>Group name C</td>
              <td><button>+ Members</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
