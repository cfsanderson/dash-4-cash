import React from 'react'

export default function Groups () {
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
        <h1>Groups</h1>
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
