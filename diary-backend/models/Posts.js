import { Schema, model } from 'mongoose'

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true,
            default: Date.now
        }
    },
    {
        collection: 'posts',
        timestamps: true
    }
)

export default model('Post', PostSchema);