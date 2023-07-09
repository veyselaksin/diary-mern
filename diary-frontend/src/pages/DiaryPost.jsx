import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DiaryPost() {
    const [post, setPost] = useState([])
    const { id } = useParams()

    const fetchPost = async () => {
        const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        setPost(data.data)
    }

    useEffect(() => {
        fetchPost()
    }, [id])

    if (!post) {
        return null
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <div>{post.date}</div>
            <p>{post.content}</p>
        </div>
    )
}

export default DiaryPost
