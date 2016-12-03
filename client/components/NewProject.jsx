import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/project_actions'
import { WithContext as ReactTags } from 'react-tag-input';
import { tagList, utcTimezones, languages } from './utils/tag_list'

class NewProject extends Component {
  componentDidMount() {
    this.props.emptyForm() 
  }
  newProjectSubmit (e) {
    e.preventDefault();
    this.props.newProject(this.props.form)
  }
  handleDelete (i) {
      this.props.handleTagDelete(i, this.props.form.tags)
  }
  handleAddition(tag) {
    this.props.handleTagAddition(tag, this.props.form.tags)
  }
  handleDrag(tag, currPos, newPos) {
    this.props.handleTagDrag(tag, currPos, newPos, this.props.form.tags)
  }
  render () {
    let { error, form: {tags, title, description, current_tag, timezone, communication} } = this.props

    let timezoneOptions = utcTimezones.map((a, i) => {
      return <option key={a+i} value={a}>{a}</option>
    })
    let langugageOptions = languages.map((a) => {
      return <option key={a} value={a}>{a}</option>
    })

    let errorElement = (error) => (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )


    return (
      <div className="container-fluid main">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-md-offset-3">
            <form onSubmit={this.newProjectSubmit.bind(this)}>
              { error &&  errorElement(error) }
            {/* title */}
            <div className='form-group'>
                <label className="control-label" htmlFor="text">Title</label>
                <input value={title} onChange={(e) => {this.props.handleChange(e)}} className="form-control" name="title" placeholder="Project title." type="text" />
            </div>
            {/* description */}
            <div className='form-group'>
                <label className="control-label" htmlFor="text">Description</label>
                <textarea placeholder="A couple sentences that describe your big idea!"
                  rows={5} value={description} onChange={(e) => {this.props.handleChange(e)}} className="form-control" name="description" type="text" />
            </div>
            {/* tags */}
            <div className='form-group'>
            <label className="control-label" htmlFor="text">Tags</label>
            <ReactTags tags={tags}
                  suggestions={tagList}
                  placeholder="Choose atleast one tag"
                  autocomplete={true}
                  handleDelete={this.handleDelete.bind(this)}
                  handleAddition={this.handleAddition.bind(this)}
                  handleDrag={this.handleDrag.bind(this)} />
            </div>
            <hr className="spacer"/>
            <div className="preferences">
              <p className="title">Communication options</p>
              <div className="row">
                  <div className="col-sm-12 col-md-6">
                    {/* timezone */}
                    <div className='form-group'>
                        <label className="control-label select" htmlFor="text">UTC Timezone</label>
                          <select name="timezone" value={timezone} onChange={(e) => this.props.handleChange(e)}>
                            <option value=""></option>
                              { timezoneOptions }
                          </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    {/* communication language */}
                    <div className='form-group'>
                        <label className="control-label select" htmlFor="text">Language</label>
                          <select name="communication" value={communication} onChange={(e) => this.props.handleChange(e)}>
                            <option value=""></option>
                            { langugageOptions }
                          </select>
                    </div>
                  </div>
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
  let { tags, title, description, current_tag, timezone, communication, error } = state.form
    return {
      error,
      form: {
        tags,
        title,
        description,
        current_tag,
        timezone,
        communication
      }
    }
}

export default connect(mapStateToProps, actions)(NewProject)
