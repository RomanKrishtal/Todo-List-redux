import { useSelector, useDispatch } from "react-redux"
import { listDeleted } from "./toDoListSlice.jsx"

const ToDoList = () => {
    const lists = useSelector(state => state.lists)

    const dispatch = useDispatch();

    const renderedLists = lists.map(list => (
        <article key={list.id} style={{border: "1px solid"}}>
            <h3>{list.name}</h3>
            <p>{list.content}</p>
            <label htmlFor={list.id}>Complete</label>
            <input type="checkbox" id={list.id} />
            <button onClick={() => dispatch(listDeleted(list.id))}>Delete</button>
        </article>
    ))
    return(
        <div>
        <h2>Things to do</h2>
        <div className="d-flex">
        {renderedLists}
        </div>
        <span>Number of things: {lists.length}</span>
        </div>
    )
}

export default ToDoList