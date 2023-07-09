import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/styles.module.scss'

function PostForm() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm()
    return (
        <>
            <form className={styles.postForm} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h3>Create Post</h3>
                </div>
                <input type='text' {...register('title', { required: 'required field' })} placeholder='Title' />
                <input type='date' {...register('date', { required: 'required field' })} placeholder='Date' />
                <input type='text' {...register('content', { required: 'required field' })} placeholder='Content' />
            </form>
        </>
    )
}

export default PostForm
