import PostComp from "./Post"


function PostsComp(props) {

    return (
        <div>
            Posts-User {props.userId} <input type="button" value="Add" className="btn" onClick={props.changeNewPostStatus}></input>
            <div className="blackBorderContainer">
                {
                    props.posts.map((item => {
                        return <PostComp key={item.id} post={item}></PostComp>
                    }))
                }
            </div><br></br>
        </div>
    )
}

export default PostsComp
