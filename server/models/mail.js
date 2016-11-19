import { Schema }, mongoose from 'mongoose'

const Mail = {
  sender: { type: Schema.Types.ObjectId },
  recipient: { type: Schema.Types.ObjectId },
  body: { type: String },
  relation: {
    next: {
      type: Schema.Types.ObjectId,
      default: null,
      ref: 'Mail'
    },
    previous: {
      type: Schema.Types.ObjectId,
      default: null,
      ref: 'Mail'
    }
  }
}

const MailSchema = new Schema(Mail, { timestamps: true })
export default mongoose.model('mail', MailSchema)
