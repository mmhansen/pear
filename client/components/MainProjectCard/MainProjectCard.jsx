import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
// utlity functions
import filter2D from '../utils/filter2D'
import guid from '../utils/guid'
// actions
import {changeRecipient} from '../../redux/modules/mail'
/*
 * This component is the cards displayed on the home page
 */
function MainProjectCard ({ myID, projects, primary, secondary, changeRecipient, authenticated }) {

  function handleChange (e) {
    e.preventDefault()
    changeRecipient(e.target.name)
    let mailID = guid()
    browserHistory.push(`/mail/${mailID}`)
  }
  let childElements = filter2D(projects, primary, secondary).map((a) => {
    // make the tags
    let tags = a.tags.map((b) => {
      return <p key={b} className="tag">{b}</p>
    })
    let description = a.description.slice(0,150)
    function messageLink () {
      return   <Link className="inline btn btn-default btn-lg" onClick={handleChange} name={`${a.owner._id},${a._id},${a.title}`}>Join!</Link>
    }
    // should only display join button if you are logged in and it is not your project
    let match = (authenticated && a.owner._id !== myID)

    return (
      <div className="col-sm-4" key={a._id}>
        <div className="project">
          <div className="details">
            <p className="title">{a.title}</p>
            <p className="description">{description}</p>
            <hr className="spacer"></hr>
            { tags }
          </div>
          <div className="row bottom">
            <div className="col-sm-4">
              <p className="stat">{a.count}/{a.options.max_members}</p>
              <p className="description">Members</p>
            </div>
            <div className="col-sm-4">
              <p className="stat">{a.age}</p>
              <p className="description">Days Old</p>
            </div>
            <div className="col-sm-4">
              { match &&  messageLink() }
            </div>
          </div>
        </div>
      </div>
    )
  })


  return (
    <div>
      { childElements }
    </div>
  )
}

MainProjectCard.propTypes = {
  projects: PropTypes.array,
  primary: PropTypes.string,
  secondary: PropTypes.string
}

const mapStateToProps = (state) => ({
  projects: state.statics.project_data,
  primary: state.form.search.primary,
  secondary: state.form.search.secondary,
  myID: state.statics.user_data._id,
  authenticated: state.authentication.authenticated
})

export default connect(mapStateToProps, { changeRecipient })(MainProjectCard)
