import React, { Component, PropTypes } from 'react'
import Navbar from '../Navbar'

function Container ({ children }) {
  return (
    <div>
      <Navbar />
       { children }
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container;
