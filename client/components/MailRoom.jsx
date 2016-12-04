import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../actions/mail_actions'
import cookie from 'react-cookie'

class MailRoom extends Component {
  componentDidMount () {
    this.props.getMyConversations()
  }
  render () {

    let { conversations } = this.props
    let convElements = conversations.map((a) => {
      // determine which user is not me
      let otherUser = a.party.filter((b) => {
        let me = cookie.load('user').username
        return b.username != me
      })[0]


      return (
        <Link to={`/mail/${a._id}`} key={a._id} className="conv-wrapper">
          <div className="conversation-digest">
            <span className="with">With @{otherUser.username}</span>

            <span className="right mail-time">Last message {a.modified} days ago</span>
          </div>
        </Link>
      )
    })

    return (
      <div className="user-content mail-room">
        <p className="title">Conversations</p>
        <hr />
        { convElements }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    conversations: state.mail.my_conversations
  }
}

export default connect(mapStateToProps, actions)(MailRoom)
