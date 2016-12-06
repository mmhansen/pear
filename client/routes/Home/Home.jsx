import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { getUser } from '../../redux/modules/user'
import { fetchActiveProjects } from '../../redux/modules/projects'
// child components
import MainProjectCard from '../../components/MainProjectCard'
import Search from '../../components/Search'
/*
 * Fetch projects and user data when component loads
 */

class Main extends Component {
  componentDidMount () {
    this.props.getUser()
    this.props.fetchActiveProjects()
  }
  render () {
    return (
        <div className="container-fluid main">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 ">
              <Search />
           </div>
         </div>
         <div className="row">
           <div className="col-sm-10 col-sm-offset-1 ">
             <MainProjectCard />
          </div>
         </div>
        </div>
    )
  }
}

Main.propTypes = {
  get_user: PropTypes.func,
  fetch_active_projects: PropTypes.func
}

export default connect(null, { getUser, fetchActiveProjects })(Main);
