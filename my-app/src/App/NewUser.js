import { useState } from "react"



function NewUserComp(props) {

    const [newUserName, setNewUserName] = useState("")
    const [newUserEmail, setNewUserEmail] = useState("")

    function addNewUserHandler() {
        props.addNewUser(newUserName, newUserEmail)
        props.changeIsNewUserStatus()
    }

    return (
        <div className="side">
            Add New User
            <div className="blackBorderContainer">
                <div className="menuElements"><br></br><br></br>
                    <span className="userMenuKeys">Name:</span> <input type="text" onChange={(e) => setNewUserName(e.target.value)}></input>
                </div>
                <div className="menuElements">
                    <span className="userMenuKeys">Email:</span> <input type="text" onChange={(e) => setNewUserEmail(e.target.value)}></input><br></br>
                </div><br></br><br></br>
                <div className="menuElements">
                    <input className="btn" type="button" value="Cancel" onClick={props.changeIsNewUserStatus}></input>
                    <input className="btn" type="button" value="Add" onClick={addNewUserHandler}></input>
                </div>
            </div>
        </div>
    )
}

export default NewUserComp