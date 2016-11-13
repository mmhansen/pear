import mongoose from 'mongoose'

export default function (config) {
  mongoose.connect(`mongodb://${config.database.host}/${config.database.name}`)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => (
      console.log(`db connection open on ${config.database.name}`)
    ))
}
