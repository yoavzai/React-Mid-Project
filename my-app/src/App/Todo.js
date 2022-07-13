

function TodoComp(props) {

    return (
        <div className="todoAndPosts userMenuElemContainer">
            <span className="userMenuKeys">Title:</span> {props.todo.title}<br></br>
            <span className="userMenuKeys">Completed:</span> {props.todo.completed.toString()} 
            {!props.todo.completed && <input className="btn" type="button" value="Mark Completed"
                                             onClick={() => props.markCompleted(props.todo.id)}></input>}
        </div>
    )
}

export default TodoComp