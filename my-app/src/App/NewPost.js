import { useState } from "react"



function NewPostComp(props) {

    const [newPostTitle, setNewPostTitle] = useState("")
    const [newPostBody, setNewPostBody] = useState("")

    function addNewPostHandler() {
        props.addNewPost(newPostTitle, newPostBody)
        props.changeNewPostStatus()
    }

    return (
        <div>
            New Post - User {props.userId}
            <div className="blackBorderContainer">
                <div className="menuElements"><br></br><br></br>
                    <span className="userMenuKeys">Title:</span> <input type="text" onChange={(e) => setNewPostTitle(e.target.value)}></input>
                </div>
                <div className="menuElements">
                    <span className="userMenuKeys">Body:</span> <input type="text" onChange={(e) => setNewPostBody(e.target.value)}></input><br></br>
                </div><br></br><br></br>
                <div className="menuElements">
                    <input className="btn" type="button" value="Cancel" onClick={props.changeNewPostStatus}></input>
                    <input className="btn" type="button" value="Add" onClick={addNewPostHandler}></input>
                </div>
            </div>
        </div>
    )
}

export default NewPostComp