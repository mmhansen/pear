import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../actions/mail_actions'
import cookie from 'react-cookie'
import marked from 'marked'

class Conversation extends Component {
  componentDidMount () {
    // fetch the conversation with this route id
    //
    let id = this.props.location.pathname.slice(6)
    this.props.getMail(id)
  }
  componentWillUnmount () {
    this.props.emptyOut()
  }
  handleSend () {
    let { conversation, party } = this.props
    let me = cookie.load('user')
    //
    let recipient;
    if (!this.props.recipient) {
      let recipient = party.filter((a) => a.username != me.username)[0]._id
    } else {
      recipient = this.props.recipient
    }
    //
    let id = this.props.location.pathname.slice(6)
    this.props.sendMail({ body: conversation, from: me._id, to: recipient, id  })
  }

  render () {
    let { conversation, party, recipient, history, mailTextChange, modified } = this.props

    let historyElements = history.map((a,i) => {
      let me = cookie.load('user')
      let otherUser = party.filter((b) => b.username != me.username).map((b) => b.username)[0]

      let sender = (a.from === me._id) ? me.username : otherUser;

      let markdown = {__html: marked( a.body, {sanitize: true})}
      return (
        <div key={a.body.slice(0,10)+i} className="mail">
          <p className="from">from @{sender}</p>
          <p dangerouslySetInnerHTML={markdown} />
        </div>
      )
    })

    // map out the conversations, show the text, who sent it, and time sent,
    // then have a textarea at the bottom where you can write markdown,
    // have a back button at the top that goes to the mail box

    return (
      <div className="user-content conversation">
        <hr />
        { modified && <p className="title">Last message {modified} days ago</p>}
        <div className="history">
          { historyElements }
        </div>
        <div className="outgoing">
            <textarea value={conversation} name="textarea" className="full-width" placeholder="You can use markdown in here" onChange={(e) => {mailTextChange(e)}} rows={15} />
            <button className="btn full-width btn-primary" onClick={this.handleSend.bind(this)}>Send</button>
        </div>
      </div>
    )
  }
}

Conversation.propTypes = {
  recipient: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipient: state.mail.recipient,
    conversation: state.mail.conversation,
    history: state.mail.mail_history,
    modified: state.mail.modified,
    party: state.mail.party
  }
}

export default connect(mapStateToProps, actions)(Conversation);
