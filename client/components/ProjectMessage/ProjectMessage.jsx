import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

// component
function ProjectMesasge ({ data }) {



  const markdown = {__html: marked( data, {sanitize: true})}
  return (
    <p className="project-message" dangerouslySetInnerHTML={markdown} />
  )
}

ProjectMesasge.propTypes = {
}


export default ProjectMesasge
