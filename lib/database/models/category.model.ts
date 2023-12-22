import { Document } from 'mongodb'
import { Schema, model, models } from 'mongoose'

export interface ICatergory extends Document {
  _id: string
  name: string
}

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
})

const category = models.category || model('Category', categorySchema)

export default category
