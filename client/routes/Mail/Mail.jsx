import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Mail extends Component {
  render () {
    let { mail, me } = this.props

    const messages = mail.map((a,i) => {

      const otherUser = a.parties.filter((b) => b.username !== me).map((b) => b.username)[0]

      return (
        <li key={a._id}><Link to={`/mail/${a._id}`}>with {otherUser}</Link> {a.modified} days ago</li>
      )
    })


    return (
      <div className="container-fluid main">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-1">
            <Link to="/mail" className="btn btn-primary btn-lg">Inbox</Link>
            <ul className="inbox">
              { messages }
            </ul>
          </div>
          <div className="col-sm-6">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

Mail.propTypes = {
  children: PropTypes.node
}

const mapStateToProps = (state) => {
  return {
    mail: state.user.mail,
    me: state.user.username
  }
}

export default connect(mapStateToProps, null)(Mail)
