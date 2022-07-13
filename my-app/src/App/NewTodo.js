import { useState } from "react"



function NewTodoComp(props) {

    const [newTodoTitle, SetnewTodoTitle] = useState("")

    function addNewTodoHandler() {
        props.addNewTodo(newTodoTitle)
        props.changeNewTodoStatus()
    }

    return (
        <div>
            New Todo - User {props.userId}
            <div className="blackBorderContainer">
                <div className="menuElements"><br></br><br></br>
                    <span className="userMenuKeys">Title:</span> <input type="text" onChange={(e) => SetnewTodoTitle(e.target.value)}></input><br></br>
                </div><br></br><br></br>
                <div className="menuElements">
                    <input className="btn" type="button" value="Cancel" onClick={props.changeNewTodoStatus}></input>
                    <input className="btn" type="button" value="Add" onClick={addNewTodoHandler}></input>
                </div>
            </div>
        </div>
    )
}

export default NewTodoComp