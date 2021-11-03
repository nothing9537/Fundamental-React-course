import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from './../../hooks/useFetching';
import PostService from './../../API/PostService';
import PostItem from './../PostItem';
import Loader from './../UI/loader/Loader';
import PostComments from './../PostComments';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isPostLoading, postError] = useFetching( async () => {
		const response = await PostService.getById(params.id)
        setPost(response.data)
	})

    const [fetchComments, isCommLoading, comError] = useFetching( async () => {
		const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
	})

    useEffect( ()=> {   
        fetchPostById()
        fetchComments()
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста с ID: { params.id } </h1>
            { isPostLoading
                ? <Loader />
                : <PostItem post={ post} hidden={ true } />
            }
            { postError
                ? <h1>{ postError }</h1>
                : <div></div>
            }
            <h1 style={{ marginTop: 30 }}>Комментарии</h1>
            { isCommLoading
                ? <Loader />
                : <PostComments comments={ comments } />
            }
            { comError
                ? <h1>{ comError }</h1>
                : <div></div>
            }
        </div>
    )
}

export default PostIdPage
