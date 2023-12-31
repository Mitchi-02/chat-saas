import mongoose, { ConnectOptions } from 'mongoose'
import { config } from 'dotenv'
config()


export default function connectToDB () {
  mongoose.connect(process.env.DB_CONNECTION || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
}

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', (error) => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})
