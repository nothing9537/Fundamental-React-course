/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useFetching } from './../../hooks/useFetching';
import { usePosts } from './../../hooks/usePosts';
import PostService from './../../API/PostService';
import { getPageCount } from './../../utils/pages';
import MyButton from './../UI/button/MyButton';
import MyModal from './../UI/modal/MyModal';
import PostForm from './../PostForm';
import PostFilter from './../PostFilter';
import { usePagination } from './../../hooks/usePagination';
import PostList from './../PostList';
import Pagination from './../UI/pagination/Pagination';
import Loader from './../UI/loader/Loader';


const Posts = () => {

	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState( {sort: "", query: ""} )
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
		const response = await PostService.getAllPosts(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	useEffect(() => {
		fetchPosts()
	}, [page])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}
	
	return (
		<div className="App">
			<MyButton style={{ marginTop: 30 }} onClick={ () => setModal(true) }>
				Создать пост
			</MyButton>
			<MyModal visible={ modal } setVisible={ setModal } >
				<PostForm create={ createPost } />
			</MyModal>
			<hr style={{ margin: "15px 0" }} />
			<PostFilter
				filter={ filter }
				setFilter={ setFilter }
			/>
			<usePagination 
				posts={ posts }
				page={ page }
				setPage={ setPage }
			/>
			{ postError && <h1>Произошла ошибка { postError }</h1> }
			{ isPostLoading 
				? <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}> <Loader /> </div>
				: <PostList posts={ sortedAndSearchedPosts } title={ "Roflan spisok postov :DD" } remove={ removePost } /> 
			}
			<Pagination posts={ posts } page={ page } setPage={ setPage } totalPages={ totalPages } />
		</div>
	)
}

export default Posts;