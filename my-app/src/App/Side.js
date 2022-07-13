import { useState } from "react"
import NewTodoComp from "./NewTodo"
import NewPostComp from "./NewPost"
import TodosComp from "./Todos"
import PostsComp from "./Posts"


function SideComp(props) {

    const [isNewTodo, setIsNewTodo] = useState(false)
    const [isNewPost, setIsNewPost] = useState(false)
    
    function changeNewTodoStatus() {
        setIsNewTodo(!isNewTodo)
    }

    function changeNewPostStatus() {
        setIsNewPost(!isNewPost)
    }

    return (
        <div className="side">
            {isNewTodo ? <NewTodoComp userId={props.userId} changeNewTodoStatus={changeNewTodoStatus}
                                    addNewTodo={props.addNewTodo}></NewTodoComp> :
                       <TodosComp todos={props.todos} userId={props.userId} markCompleted={props.markCompleted}
                                   changeNewTodoStatus={changeNewTodoStatus} ></TodosComp>}

            <br></br><br></br>
            {isNewPost ? <NewPostComp userId={props.userId} changeNewPostStatus={changeNewPostStatus}
                                    addNewPost={props.addNewPost}></NewPostComp> :
                       <PostsComp posts={props.posts} userId={props.userId} changeNewPostStatus={changeNewPostStatus} ></PostsComp>}


        </div>
    )
}

export default SideComp