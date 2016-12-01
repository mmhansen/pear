import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { newProject, handleChange } from '../actions/project_actions'


class NewProject extends Component {
  newProjectSubmit (e) {
    e.preventDefault();
    newProject(this.props.form)
  }
  render () {
    let { title, description, tags, timezone, communication } = this.props.form

    return (
      <div className="container-fluid main">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-md-offset-4">
            <form onSubmit={this.newProjectSubmit.bind(this)}>
            {/* title */}
            <div className='form-group'>
                <label className="control-label" htmlFor="text">Title</label>
                <input value={title} onChange={(e) => {this.props.handleChange(e)}} className="form-control" name="title" placeholder="" type="text" />
            </div>
            {/* description */}
            <div className='form-group'>
                <label className="control-label" htmlFor="text">Description</label>
                <input value={description} onChange={(e) => {this.props.handleChange(e)}} className="form-control" name="description" placeholder="" type="text" />
            </div>
            {/* tags */}
            <div className='form-group'>
                <label className="control-label" htmlFor="text">Tags</label>
                <input value={tags} onChange={(e) => {this.props.handleChange(e)}} className="form-control" name="tags" placeholder="" type="text" />
            </div>
            <div className="preferences">
              <p className="title">Preferences</p>
              {/* timezone */}
              <div className='form-group'>
                  <label className="control-label" htmlFor="text">Timezone</label>
                  <input value={timezone} onChange={(e) => {this.props.handleChange(e)}} className="form-control" name="timezone" placeholder="" type="text" />
              </div>
              {/* communication language */}
              <div className='form-group'>
                  <label className="control-label" htmlFor="text">Communication</label>
                  <input value={communication} onChange={(e) => {this.props.handleChange(e)}} className="form-control" name="communication" placeholder="" type="text" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { title, description, tags, timezone, communication } = state.form
    return {
      form: {
        title,
        description,
        tags,
        timezone,
        communication
      }
    }
}

export default connect(mapStateToProps, { handleChange })(NewProject)
