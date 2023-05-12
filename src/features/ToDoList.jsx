import { useSelector, useDispatch } from "react-redux"
import { listDeleted } from "./toDoListSlice.jsx"

const ToDoList = () => {
    const lists = useSelector(state => state.lists)

    const dispatch = useDispatch();

    // const listDeleted = (id) => {
    //     lists.filter(list => id !== list.id)
    //     console.log(lists)
    // }



    const renderedLists = lists.map(list => (
        <article key={list.id} style={{border: "1px solid"}}>
            <h3>{list.name}</h3>
            <p>{list.content}</p>
            <button onClick={() => dispatch(listDeleted(list.id))}>Done</button>
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