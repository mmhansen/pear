import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
// utils
import { utcTimezones, languages } from '../../components/utils/tag_list'
// actions
import { updateUser, handleChange } from '../../redux/modules/user'

/*
 * Display the user options and allow them to be changed
 */
class Profile extends Component {
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
    let { timezone, language, handleChange } = this.props
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <h1>Profile</h1>
            <div className="user-content user-options">
              <label className="control-label select" htmlFor="text">My Primary Spoken Language</label>
              <select name="language" value={language} onChange={(e) => handleChange(e)}>
                <option value=""></option>
                { langugageOptions }
              </select>
              <br />
              <label className="control-label select" htmlFor="text">My Timezone</label>
              <select name="timezone" value={timezone} onChange={(e) => handleChange(e)}>
                <option value=""></option>
                { timezoneOptions }
              </select>
              <hr />
              <button onClick={this.handleSave.bind(this)}>Save Changes</button>
            </div>
            <a href="/logout" className={"btn btn-warning"}>Logout</a>

          </div>
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  timezone: PropTypes.string,
  language: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    timezone: state.user.timezone,
    language: state.user.language
  }
}

export default connect(mapStateToProps, { updateUser, handleChange })(Profile)
