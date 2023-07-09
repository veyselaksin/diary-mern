import Post from '../models/Posts.js'
import { SuccessResponse, ErrorResponse } from '../utils/response.helper.js'
import mongoose from 'mongoose'

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        const x = 10 / 0
        console.log(x)
        SuccessResponse(res, 'Posts fetched successfully', posts, 200)
    } catch (error) {
        ErrorResponse(res, 'Unexpected error occurred', 500)
    }
}

export const getPost = async (req, res) => {
    try {
        const { id } = req.params

        // check id is valid or not
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return ErrorResponse(res, 'No post with that id', 404)
        }

        const post = await Post.findById(id)
        if (!post) {
            return ErrorResponse(res, 'No post with that id', 404)
        }

        SuccessResponse(res, 'Post fetched successfully', post, 200)
    } catch (error) {
        ErrorResponse(res, 'Unexpected error occurred', 500)
    }
}

export const createPost = async (req, res) => {
    try {
        const { date, title, content } = req.body

        const newPost = await Post.create({ date, title, content })
        SuccessResponse(res, 'Post created successfully', newPost, 201)
    } catch (error) {
        ErrorResponse(res, 'Unexpected error occurred', 500)
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params

        // check id is valid or not
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return ErrorResponse(res, 'No post with that id', 404)
        }

        const post = await Post.findByIdAndDelete(id)
        if (!post) {
            return ErrorResponse(res, 'No post with that id', 404)
        }

        SuccessResponse(res, 'Post deleted successfully', null, 200)
    } catch (error) {
        ErrorResponse(res, 'Unexpected error occurred', 500)
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params

        // check id is valid or not
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return ErrorResponse(res, 'No post with that id', 404)
        }

        const { date, title, content } = req.body
        const updatedPost = await Post.findByIdAndUpdate(id, { date, title, content }, { new: true })

        if (!updatedPost) {
            return ErrorResponse(res, 'No post with that id', 404)
        }

        SuccessResponse(res, 'Post updated successfully', updatedPost, 200)
    } catch (error) {
        ErrorResponse(res, 'Unexpected error occurred', 500)
    }
}
