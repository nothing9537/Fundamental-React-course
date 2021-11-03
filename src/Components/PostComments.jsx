import React from 'react'

const PostComments = (props) => {
    console.log(props.comments);
    return (
        <div>
            { props.comments.map((comments, index) => 
                // return(
                    <div className="post" key={ comments.id }>
                        <div className="post__content">
                            <strong> { index + 1 }. { comments.name } <br /> EMAIL: { comments.email } </strong>
                            <div>
                                { comments.body }
                            </div>
                        </div>
                    </div>
                // )
            )}
        </div>
    )
}

export default PostComments
