import { Schema }, mongoose from 'mongoose'

/*
 * Define Mail Schema,
 * This is meant to behave like a linked list in that it points to a previous and next mail
 * I did this because we cannot anticipate the size of conversation trains, though it does bloat
 * the database with duplicate data.
 */
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
