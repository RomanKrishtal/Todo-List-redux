import { useSelector, useDispatch } from "react-redux"
import { listChecked, listDeleted, listSorted, readyCheck, alphabetCheck, timeSort, markCompleted } from "./toDoListSlice.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button, ButtonGroup, Card, Container } from "react-bootstrap";
import '../App.css'

const ToDoList = () => {
    const lists = useSelector(state => state.lists)

    const dispatch = useDispatch();


    const renderedLists = lists.map(list => (
        <Card style={{ width: '100%' }} className="shadow-sm p-3 mb-5 bg-white rounded">
        <article key={list.id}>
        <Card.Body>
            <Card.Title>{list.name}</Card.Title>
            <Card.Text>
            <p>{list.content}</p>
            </Card.Text>
            <Stack direction="horizontal">
            <div>
            <label htmlFor={list.id}>Complete</label>
            <input type="checkbox" 
            id={list.id} 
            onClick={() => dispatch(listChecked(list.id))} 
            onChange={e => e.target.checked}
            value={list.completed} 
            checked={list.completed ? 'checked': ''}/>
            <span>{list.date}</span>
            </div>
            
            <Button className="ms-auto" onClick={() => dispatch(listDeleted(list.id))}>Delete</Button>
            </Stack>
            </Card.Body>
        </article>
        </Card>
    ))
    return(
        <div>
        <h2>Things to do: {lists.length}</h2>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => dispatch(readyCheck())}>Clear completed</Button>
            <Button variant="secondary" onClick={() => dispatch(alphabetCheck())}>Sort by Alphabet</Button>
            <Button variant="secondary" onClick={() => dispatch(timeSort())}>Sort by by Time</Button>
            <Button variant="secondary" onClick={() => dispatch(markCompleted())}>Mark all completed</Button>
    </ButtonGroup>
        <div className="renderedList">
        {renderedLists}
        </div>
        </div>
    )
}

export default ToDoList