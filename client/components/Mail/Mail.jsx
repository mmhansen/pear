import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
// actions
import { newMail, continueMail } from '../../redux/modules/mail'
import { textareaChange } from '../../redux/modules/form'

function NewMail ({ to, subject, myID, myUsername, mail, title, value, newMail, textareaChange, continueMail, params: { id } }) {
  const currentMessage = mail.filter((a) => a._id === id )[0]
  // if there is a message history
  let history = [];
  let otherUser;
  if (currentMessage) {
    otherUser = currentMessage.parties.filter((a) => a._id !== myID)[0]
    to = otherUser._id
    history = currentMessage.conversation
  }

  history = history.map((a,i) => {
    let markdown = {__html: marked( a.body, {sanitize: true})}
    let sender = (a.from === myID) ? 'me' : otherUser.username;
    return (
      <div key={i}>
        <p className="strong">{`from ${sender}`}</p>
        <p dangerouslySetInnerHTML={markdown} />
      </div>
    )
  })


  function handleChange (e) {
    textareaChange(e.target.value)
  }
  function handleSubmit (e) {
    e.preventDefault()

    if(currentMessage) {
      continueMail({
        _id: id,
        to,
        body: value
      })
    } else {
      newMail({
        _id: id,
        to,
        body: value,
        subject
      })
    }
  }
  // does this conversation already exist?


  const newMessage = () => <p className="title">Start a conversation with the creator of <span className="strong">{title}</span></p>
  const continueMessage = () => <p className="title">Continue your conversation with <span className="strong">{otherUser.username}</span></p>

  return (
    <div>
      { (!currentMessage) ? newMessage() : continueMessage() }
      { history }
      <textarea value={value} name="textarea"
        className="full-width" placeholder="You can use markdown in here"
        onChange={handleChange} rows={15} />
      <button className="btn full-width btn-primary" onClick={handleSubmit}>Send</button>
    </div>
  )
}

NewMail.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    title: state.mail.recipient.title,
    to: state.mail.recipient.userID,
    subject: state.mail.recipient.projectID,
    myID: state.user._id,
    myUsername: state.user.username,
    value: state.form.mail,
    mail: state.user.mail
  }
}

export default connect(mapStateToProps, { newMail, continueMail, textareaChange })(NewMail)
