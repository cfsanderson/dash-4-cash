import React from 'react'
import InnerNavbar from './InnerNavbar.js'

export default function Help () {
  return (
    <div>
      <header>
        <InnerNavbar />
        <h1>This is a Help page.</h1>
      </header>
      <div>
        <h2>FAQs and How-to-dos</h2>
        <p>It would be nice to have some cool breadcrumbs and how-to docs here.</p>
      </div>
    </div>
  )
}
