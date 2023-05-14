import { useSelector, useDispatch } from "react-redux"
import { listChecked, listDeleted, listSorted } from "./toDoListSlice.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button, ButtonGroup } from "react-bootstrap";

const ToDoList = () => {
    const lists = useSelector(state => state.lists)
    const completed = useSelector(state => state.completed)

    const dispatch = useDispatch();

    const renderedLists = lists.map(list => (
        <article key={list.id} style={{border: "1px solid"}}>
            <h3>{list.name}</h3>
            <p>{list.content}</p>
            <Stack direction="horizontal">
            <div>
            <label htmlFor={list.id}>Complete</label>
            <input type="checkbox" id={list.id} onClick={() => dispatch(listChecked(list.id))}/>
            </div>
            <Button className="ms-auto" onClick={() => dispatch(listDeleted(list.id))}>Delete</Button>
            </Stack>
        </article>
    ))
    return(
        <div>
        <h2>Things to do</h2>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">By readiness</Button>
            <Button variant="secondary">By Alphabet</Button>
            <Button variant="secondary">by Time</Button>
    </ButtonGroup>
        <div className="d-flex">
            <Stack gap={3}>
        {renderedLists}
        </Stack>
        </div>
        <span>Number of things: {lists.length}</span>
        </div>
    )
}

export default ToDoList