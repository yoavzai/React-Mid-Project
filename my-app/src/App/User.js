import { useEffect, useState } from "react"
import axios from "axios"
import OtherDataComp from "./OtherData"
import SideComp from "./Side"

function UserComp (props) {

    const [todos, setTodos] = useState([])
    const [posts, setPosts] = useState([])
    const [isOtherData, setIsOtherData] = useState(false)
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        async function fetchTodos() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos?userId="+props.user.id)
            setTodos(res.data)
        }
        fetchTodos()

        async function fetchPosts() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts?userId="+props.user.id)
            setPosts(res.data)
        }
        fetchPosts()
       
    },[])

    useEffect(() => {
        const completed = todos.map(e => {return e.completed}).every(e => e === true)
        let userElem = document.getElementById(props.user.id);
        if (completed) {
            userElem.classList.remove("todosNotCompleted")
            userElem.classList.add("todosCompleted")
        }
        else {
            userElem.classList.add("todosNotCompleted")
            userElem.classList.remove("todosCompleted")
        }

    },[todos])
 
    function revertUserData() {
        document.getElementById("nameInput"+props.user.id).value = props.user.name
        document.getElementById("emailInput"+props.user.id).value = props.user.email
    }

   function closeOtherData () {
        setIsOtherData(false)
   }

   function updateData(e) {
        e.stopPropagation()
        const newName = document.getElementById("nameInput"+props.user.id).value;
        const newEmail = document.getElementById("emailInput"+props.user.id).value;
        const newUsers = props.users.map(user => {
            if (user.id === props.user.id) {

                if (isOtherData) {
                    const newStreet = document.getElementById("streetInput"+props.user.id).value;
                    const newCity = document.getElementById("cityInput"+props.user.id).value;
                    const newZipCode = document.getElementById("zipCodeInput"+props.user.id).value;

                    return ({...user, name:newName, email:newEmail, address:{...user.address, street:newStreet, city:newCity, zipcode:newZipCode}})
                }

                else {
                    return {...user, name:newName, email: newEmail}
                }
            }

            else {
                
                return user;
            }
        })

        props.updateUsers(newUsers)
   }

   function deleteUser() {
        if (isSelected) {
            props.clearSide()
        }
        const newUsers = props.users.filter((user) => user.id !== props.user.id)
        props.updateUsers(newUsers)
   }

   function userSelected() {
        let userElem = document.getElementById(props.user.id);
        if (isSelected) {
            userElem.classList.remove("userSelected")
            sessionStorage["userSelectedId"] = ""
            setIsSelected(false)
        }
        else {
            props.clearSide()
            userElem.classList.add("userSelected")
            sessionStorage["userSelectedId"] = props.user.id
            setIsSelected(true)
        }
   }

   function markCompleted(todoId) {
        const newTodos = todos.map(item => {
            if (item.id === todoId) {
                return {...item, completed: true}
            }
            else {
                return item
            }
        })

        setTodos(newTodos)
   }

   function addNewTodo(title) {
        let lastTodoId = todos.length === 0 ? 0 : Number(todos[todos.length-1].id)
        
        setTodos([...todos, {completed: false, id: lastTodoId+1, title: title, userId: props.user.id}])
   }

   function addNewPost(title, body) {
        const lastPostId = posts.length === 0 ? 0 : Number(posts[posts.length-1].id)
        setPosts([...posts, {body: body, id: lastPostId+1, title: title, userId: props.user.id}])
   }

    return (
        <div className={"user menuElements"} id={props.user.id} onClick={revertUserData}>
            <div>
                <span id={"idLabel"+props.user.id} className="userMenuKeys" onClick={userSelected}>ID:</span> {props.user.id}<br></br>
            </div>
            <div>
                <span className="userMenuKeys">Name:</span> <input id={"nameInput"+props.user.id} className="textInput" 
                                                                   type="text" defaultValue={props.user.name}
                                                                   onClick={(e) => e.stopPropagation()}></input><br></br>
            </div>
            <div>
                <span className="userMenuKeys">Email:</span> <input id={"emailInput"+props.user.id}
                                                                    type="text" defaultValue={props.user.email} 
                                                                    onClick={(e) => e.stopPropagation()}></input><br></br>
            </div>
            <div>
                <input className="btnOtherData" type="button" value="Other Data"
                       onMouseOver={()=>setIsOtherData(true)} onClick={(e) => {e.stopPropagation(); setIsOtherData(!isOtherData)}}></input><br></br>
            </div>
            {isOtherData && <OtherDataComp user={props.user} closeOtherData={closeOtherData}></OtherDataComp>}
            <div>
                <input className="btn" type="button" value="Update" onClick={updateData}></input>
                <input className="btn" type="button" value="Delete" onClick={deleteUser}></input>
            </div>
            
            {isSelected && <SideComp key={props.user.id} userId={props.user.id} todos={todos} posts={posts}
                                     markCompleted={markCompleted} addNewTodo={addNewTodo} addNewPost={addNewPost}></SideComp>}

        </div>
    )
}

export default UserComp