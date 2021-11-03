import React from 'react'
import { useHistory } from 'react-router'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
    const router = useHistory()
    return(
        <div className="post">
            <div className="post__content">
                <strong> { props.post.id }. { props.post.title } </strong>
                <div>
                    { props.post.body }
                </div>
            </div>
            <div className="post__btns" hidden={ true }>
                <MyButton className="post__btns" onClick={ () => router.push(`/posts/${ props.post.id }`) }>Открыть</MyButton>
                <MyButton className="post__btns" onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem