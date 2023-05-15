import { useSelector, useDispatch } from "react-redux"
import { listChecked, listDeleted, listSorted, readyCheck, alphabetCheck, timeSort, resetSort } from "./toDoListSlice.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button, ButtonGroup } from "react-bootstrap";

const ToDoList = () => {
    const lists = useSelector(state => state.lists)

    const dispatch = useDispatch();

    const renderedLists = lists.map(list => (
        <article key={list.id} style={{border: "1px solid"}}>
            <h3>{list.name}</h3>
            <p>{list.content}</p>
            <Stack direction="horizontal">
            <div>
            <label htmlFor={list.id}>Complete</label>
            <input type="checkbox" id={list.id} onClick={() => dispatch(listChecked(list.id))}/>
            <span>{list.date}</span>
            </div>
            <Button className="ms-auto" onClick={() => dispatch(listDeleted(list.id))}>Delete</Button>
            </Stack>
        </article>
    ))
    return(
        <div>
        <h2>Things to do</h2>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => dispatch(readyCheck())}>By readiness</Button>
            <Button variant="secondary" onClick={() => dispatch(alphabetCheck())}>By Alphabet</Button>
            <Button variant="secondary" onClick={() => dispatch(timeSort())}>by Time</Button>
            <Button variant="secondary">Reset All</Button>
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