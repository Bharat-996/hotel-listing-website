import React from 'react'
import "./Tabs.css"

function Tabs() {

  return (
    <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link active" href="#">New York</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Mumbai</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Paris</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">London</a>
    </li>
  </ul>
  )
}

export default Tabs