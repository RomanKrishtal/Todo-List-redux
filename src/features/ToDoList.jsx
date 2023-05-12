import { useSelector } from "react-redux"
import { listAdded } from "./toDoListSlice.jsx"

const ToDoList = () => {
    const lists = useSelector(state => state.lists)

    const renderedLists = lists.map(list => (
        <article key={list.id} style={{border: "1px solid"}}>
            <h3>{list.name}</h3>
            <p>{list.content}</p>
            <input type="radio" value="Done" name={list.id} checked={list.done ? true : false}/>
            <label>Done</label>
            <input type="radio" value="Not done" name={list.id} />
            <label>Not Done</label>
        </article>
    ))
    return(
        <div>
        <h2>Things to do</h2>
        {renderedLists}
        </div>
    )
}

export default ToDoList