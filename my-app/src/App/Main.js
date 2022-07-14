import "./App.css"
import {useState, useEffect} from "react"
import axios from "axios"
import UserComp from "./User"
import NewUserComp from "./NewUser"

function MainComp() {

    const [users, setUsers] = useState([])
    const [isNewUser, setIsNewUser] = useState(false)
    const [usersLoaded, setUsersLoaded] = useState(false)
    const [nextUserId, setNextUserId] = useState(0)

    useEffect (() => {
        async function fetchData() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(res.data.sort((a, b) => {return a.id - b.id}))
            setUsersLoaded(true)
        }
        fetchData()
        sessionStorage["userSelectedId"] = ""
    },[])

    useEffect (() => {
        if (usersLoaded) {
            setNextUserId(users[users.length-1].id + 1)
        }
    }, [usersLoaded])

    function clearSide() {
        if (sessionStorage["userSelectedId"] !== "") {
            document.getElementById("idLabel"+sessionStorage["userSelectedId"]).click()
        }
        else if (isNewUser) {
            setIsNewUser(false)
        }
    }

    function addNewUser(name, email) {
        setUsers([...users, {id: nextUserId, name: name, email: email, address:{}}])
        clearSide()
        setNextUserId(nextUserId+1)
   }

   function addNewUserBtnClick () {
        clearSide()
        setIsNewUser(true)

   }

    function search(e) {
        const substring = e.target.value.toLowerCase();
        
        for (const user of users) {
            let userElement = document.getElementById(user.id)
            
            if (user.name.toLowerCase().includes(substring) || user.email.toLowerCase().includes(substring)) {
                userElement.classList.remove("hidden")
            }
            else {
                userElement.classList.add("hidden")
            }
        }
    }

    function updateUsers(newUsers) {
        setUsers(newUsers)
    }

    return (
        <div className="page">
            <div className="main">
                Search <input type="text" onChange={search}></input>
                <input id="newUserBtn" className="btn" type="button" value="Add" onClick={addNewUserBtnClick}></input>
                {isNewUser && <NewUserComp addNewUser={addNewUser} clearSide={clearSide}></NewUserComp>}
                {
                    users.map(user => {return <UserComp key={user.id} user={user} users={users}
                                                        updateUsers={updateUsers}
                                                        clearSide={clearSide}></UserComp>})
                }
            </div>
        </div>
    )
}

export default MainComp