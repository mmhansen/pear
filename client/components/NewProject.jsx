import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/project_actions'
import { WithContext as ReactTags } from 'react-tag-input';
import { tagList } from './utils/tag_list'

class NewProject extends Component {
  newProjectSubmit (e) {
    e.preventDefault();
    actions.newProject(this.props.form)
  }
  handleDelete (i) {
      this.props.handleTagDelete(i, this.props.tags)
  }
  handleAddition(tag) {
    this.props.handleTagAddition(tag, this.props.tags)
  }
  handleDrag(tag, currPos, newPos) {
    this.props.handleTagDrag(tag, currPos, newPos, this.props.tags)
  }
  render () {
    let { tags, form: {title, description, current_tag, timezone, communication} } = this.props

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
            <ReactTags tags={tags}
                  suggestions={tagList}
                  placeholder="Add atleast one tag"
                  autocomplete={true}
                  handleDelete={this.handleDelete.bind(this)}
                  handleAddition={this.handleAddition.bind(this)}
                  handleDrag={this.handleDrag.bind(this)} />

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
            <button type="submit" className="full-width btn btn-primary">Create</button>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { tags, title, description, current_tag, timezone, communication } = state.form
    return {
      tags,
      form: {
        title,
        description,
        current_tag,
        timezone,
        communication
      }
    }
}

export default connect(mapStateToProps, actions)(NewProject)
