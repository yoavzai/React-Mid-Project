

function PostComp(props) {

    return (
        <div className="todoAndPosts userMenuElemContainer">
            <span className="userMenuKeys">Title:</span> {props.post.title}<br></br>
            <span className="userMenuKeys">Body:</span> {props.post.body}
        </div>
    )
}

export default PostComp