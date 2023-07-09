import React from 'react'
import styles from '../styles/styles.module.scss'
import { Link } from 'react-router-dom'

function PostHeader({ post }) {
    const deletePost = async () => {
        const response = await fetch(`http://localhost:8000/api/posts/${post._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await response.json()
    }

    return (
        <li>
            <span className={styles.postHeadHeader}>
                <h2>
                    <Link to={`/diary/${post._id}`}>{post.title}</Link>
                </h2>
                <span class='material-symbols-outlined' onClick={deletePost}>
                    delete
                </span>
            </span>
            <div>{post.date}</div>
            <p>{post.content.substring(0, 200) + '...'}</p>
        </li>
    )
}

export default PostHeader
