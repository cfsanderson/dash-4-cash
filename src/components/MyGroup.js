import React from 'react'

export default function MyGroup () {
  return (
    <div>
      <header>
        {/* This is the same inner navbar */}
        <nav>
          <ul>
            <li>My Profile</li>
            <li>My Groups</li>
            <li>Help</li>
            <li>Log Out</li>
          </ul>
        </nav>
        <h1>Group Title Here</h1>
      </header>
      <div>
        <table>
          <tbody>
            <tr>
              <th>My Group</th>
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
