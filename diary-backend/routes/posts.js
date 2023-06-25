import { Router } from 'express'
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controllers/postControllers.js'

const router = Router()

router.get('/', getAllPosts)
router.get('/:id', getPost)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)

export default router
