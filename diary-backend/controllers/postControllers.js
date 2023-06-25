export const getAllPosts = async (req, res) => {
    res.json({ message: 'get all post' })
}

export const getPost = async (req, res) => {
    res.json({ message: 'get a post' })
}

export const createPost = async (req, res) => {
    res.json({ message: 'create a post' })
}

export const deletePost = async (req, res) => {
    res.json({ message: 'delete a post' })
}

export const updatePost = async (req, res) => {
    res.json({ message: 'update a post' })
}
