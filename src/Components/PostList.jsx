import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const PostList = ({posts, title, remove, lenght}) => {

    // if (!lenght) {
    //     console.log("sadadsad");
    //     return(
    //         <h1 style={{ textAlign: 'center', marginTop: 20 }}>
    //             Посты не найдены!
    //         </h1>
    //     )
    // }

    // console.log(lenght);

    return(
        <div>
            <h1 style={{ textAlign: "center" }}>
                { title }
            </h1>
			<TransitionGroup>
                { posts.map((post, index) =>
                    <CSSTransition
                        key={ post.id }
                        timeout={ 500 }
                        classNames="post"    
                    >
                        <PostItem number={ index + 1 } post={ post } remove={ remove } />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList