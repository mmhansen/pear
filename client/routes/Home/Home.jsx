import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { fetchActiveProjects } from '../../redux/modules/projects'
// child components
import MainProjectCard from '../../components/MainProjectCard'
import Search from '../../components/Search'

/*
 * Fetch projects and user data when component loads
 */

class Main extends Component {
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
  
}

export default connect(null, { fetchActiveProjects })(Main);
