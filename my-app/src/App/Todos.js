import TodoComp from "./Todo"


function TodosComp(props) {

    return (
        <div>
            Todos-User {props.userId} <input type="button" value="Add" className="btn" onClick={props.changeNewTodoStatus}></input>
            <div className="blackBorderContainer">
                {
                    props.todos.map((item => {
                        return <TodoComp key={item.id} todo={item} markCompleted={props.markCompleted}></TodoComp>
                    }))
                }
            </div><br></br>
        </div>
    )
}

export default TodosComp