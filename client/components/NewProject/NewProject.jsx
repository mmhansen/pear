import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { WithContext as ReactTags } from 'react-tag-input';
// actions
import { deleteTag, addTag, dragTag, handleProjectFormChange as handleChange } from '../../redux/modules/form'
import { newProject } from '../../redux/modules/projects'
// utils
import { tagList, utcTimezones, languages } from '../utils/tag_list'


// component
function NewProject ({
  error,
  form: {
    tags,
    title,
    description,
    current_tag,
    timezone,
    communication
  },
  newProject,
  deleteTag,
  addTag,
  dragTag,
  handleChange
}) {
  function newProjectSubmit (e) {
    e.preventDefault();
    newProject({
      tags,
      title,
      description,
      current_tag,
      timezone,
      communication
    })
  }
  function handleDelete (i) {
    deleteTag(i, tags)
  }
  function handleAddition(tag) {

    addTag(tag, tags)
  }
  function handleDrag(tag, currPos, newPos) {
    dragTag(tag, currPos, newPos, tags)
  }
  function formChange (e) {


    const data = {
      key: e.target.name,
      value: e.target.value
    }
    handleChange(data)

  }

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
          <form onSubmit={newProjectSubmit}>
            { error &&  errorElement(error) }
          {/* title */}
          <div className='form-group'>
              <label className="control-label" htmlFor="text">Title</label>
              <input value={title} onChange={(e) => {formChange(e)}} className="form-control" name="title" placeholder="Project title." type="text" />
          </div>
          {/* description */}
          <div className='form-group'>
              <label className="control-label" htmlFor="text">Description</label>
              <textarea placeholder="A couple sentences that describe your big idea!"
                rows={5} value={description} onChange={(e) => {formChange(e)}} className="form-control" name="description" type="text" />
          </div>
          {/* tags */}
          <div className='form-group'>
          <label className="control-label" htmlFor="text">Tags</label>
          <ReactTags tags={tags}
                suggestions={tagList}
                placeholder="Choose atleast one tag"
                autocomplete={true}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag} />
          </div>
          <hr className="spacer"/>
          <div className="preferences">
            <p className="title">Communication options</p>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                  {/* timezone */}
                  <div className='form-group'>
                      <label className="control-label select" htmlFor="text">UTC Timezone</label>
                        <select name="timezone" value={timezone} onChange={(e) => formChange(e)}>
                          <option value=""></option>
                            { timezoneOptions }
                        </select>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  {/* communication language */}
                  <div className='form-group'>
                      <label className="control-label select" htmlFor="text">Language</label>
                        <select name="communication" value={communication} onChange={(e) => formChange(e)}>
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

const mapStateToProps = (state) => {
  let { tags, title, description, current_tag, timezone, communication, error } = state.form.new_project
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

const actions = {
  newProject,
  deleteTag,
  addTag,
  dragTag,
  handleChange
}
export default connect(mapStateToProps, actions)(NewProject)
