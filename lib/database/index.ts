import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL

let cached = (global as any).mongoose || { con: null, promise: null }

export const connectToDatabase = async () => {
  if (cached.con) return cached.con

  if (!MONGO_URL) throw new Error('MONGO_URL is missing')

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URL, {
      dbName: 'evently',
      bufferCommands: false,
    })

  cached.con = await cached.promise

  return cached.con
}
