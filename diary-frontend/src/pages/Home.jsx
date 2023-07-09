import React from 'react'
import { useEffect, useState } from 'react'
import PostHeader from '../components/PostHeader'
import styles from '../styles/styles.module.scss'

function Home() {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:8000/api/posts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        setPosts(data)
        console.log(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <div>
                <h1>Home</h1>
                <p>Posts:</p>
                <ul className={styles.postList}>{posts.data && posts.data.map(post => <PostHeader key={post._id} post={post} />)}</ul>
            </div>

            <div></div>
        </>
    )
}

export default Home
