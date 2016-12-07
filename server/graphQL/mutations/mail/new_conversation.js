import {
  GraphQLNonNull,
  GraphQLID as IDType,
  GraphQLString as StringType
} from 'graphql'

import MailModel from '../../../models/mail'
import UserModel from '../../../models/user'
import ProjectModel from '../../../models/project'
import ConversationType from '../../types/conversation'

export default {
  name: 'new_conversation',
  type: IDType,
  args: {
    _id: {
      type: new GraphQLNonNull(IDType)
    },
    subject: {
      type: new GraphQLNonNull(IDType)
    },
    to: {
      type: new GraphQLNonNull(IDType)
    },
    body: {
      type: new GraphQLNonNull(StringType)
    }
  },
  async resolve (root, params, options) {

    const from = options.user._doc._id
    // save the conversation
    let { _id, to, body, subject } = params
    const conversation = {
      to,
      from,
      body
    }
    const parties = [
      to,
      from
    ]
    const newConversation = new MailModel({ _id, parties, conversation })
    const conv = await newConversation.save()

    // add the conv id to the sender and recipient
    // add the project to the sender as applicant
    UserModel.findByIdAndUpdate(
      to,
      {$push: {mail: conv._id}},
      { new: true },
      (err, user) => {}
    )
    UserModel.findByIdAndUpdate(
      from,
      {$push: {mail: conv._id, projects_as_applicant: subject}},
      { new: true },
      (err, user) => {}
    )
    // save the sender as an applicant on the project
    ProjectModel.findByIdAndUpdate(
      subject,
      {$push: {applicants: from }},
      { new: true },
      (err, user) => {}
    )
    //
    return conv._id
  }
}
