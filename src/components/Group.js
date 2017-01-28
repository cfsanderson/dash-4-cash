import React from 'react'
import InnerNavbar from './InnerNavbar.js'

export default function Group () {
  return (
    <div>
      <InnerNavbar />
      <div className='inner'>
        <header>
          <h1>This is my Group</h1>
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
    </div>
  )
}
