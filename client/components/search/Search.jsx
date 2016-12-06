import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { secondarySearch, primarySearch } from '../../redux/modules/form'

function Search ({primary, secondary, secondarySearch, primarySearch }) {
  let options;
  if (primary == "age") {
    options = [
      <option key="newest" value="newest">newest</option>,
      <option key="oldest" value="oldest">oldest</option>
    ]
  } else if (primary == "language") {
    options = [
      <option key="javascript" value="javascript">javascript</option>,
      <option key="ruby" value="ruby">ruby</option>
    ]
  }
  return (
    <div>
      <div className="form-group">
        <label>Primary Search</label>
        <select className="form-control" value={primary}
          onChange={ (e) => { primarySearch(e.target.value) } }>
          <option key="age" value="age">age</option>
          <option key="language" value="language">language</option>
        </select>
      </div>

      <div className="form-group">
        <label>Secondary Search</label>
        <select className="form-control" value={secondary}
          onChange={ (e) => { secondarySearch(e.target.value) } }>
          { options }
        </select>
      </div>
    </div>
  )
}

Search.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string
}

const mapStateToProps = (state) => ({
  primary: state.form.search.primary,
  secondary: state.form.search.secondary
})

export default connect(mapStateToProps, { secondarySearch, primarySearch })(Search)
