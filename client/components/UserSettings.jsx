import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { utcTimezones, languages } from './utils/tag_list'
import * as actions from '../actions/user_actions'

class UserSettings extends Component {
  componentDidMount () {
    this.props.getUser()
  }
  handleSave () {
    let { timezone, language, _id, updateUser  } = this.props
    updateUser({ timezone, language, _id })
  }
  render () {
    let timezoneOptions = utcTimezones.map((a, i) => {
      return <option key={a+i} value={a}>{a}</option>
    })
    let langugageOptions = languages.map((a) => {
      return <option key={a} value={a}>{a}</option>
    })
    let { timezone, language, handleUserOptions } = this.props
    return (
      <div className="user-content user-options">
        

        <label className="control-label select" htmlFor="text">My Primary Spoken Language</label>
        <select name="language" value={language} onChange={(e) => handleUserOptions(e)}>
          <option value=""></option>
          { langugageOptions }
        </select>
        <br />
        <label className="control-label select" htmlFor="text">My Timezone</label>
        <select name="timezone" value={timezone} onChange={(e) => handleUserOptions(e)}>
          <option value=""></option>
          { timezoneOptions }
        </select>
        <hr />
        <button onClick={this.handleSave.bind(this)}>Save Changes</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    timezone: state.user.timezone,
    language: state.user.language,
    _id: state.user._id
  }
}
export default connect(mapStateToProps, actions)(UserSettings)
