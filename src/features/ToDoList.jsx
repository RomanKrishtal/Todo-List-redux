import { useSelector, useDispatch } from "react-redux"
import { listChecked, listDeleted, listSorted, readyCheck, alphabetCheck, timeSort, markCompleted } from "./toDoListSlice.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button, ButtonGroup, Card, Container } from "react-bootstrap";
import '../App.css'

const ToDoList = () => {
    const lists = useSelector(state => state.lists)

    const dispatch = useDispatch();


    const renderedLists = lists.map(list => (
        <Card key={list.id} style={{ width: '100%' }} className="shadow-sm p-3 mb-5 bg-white rounded">
        <article>
        <Card.Body>
            <Card.Title>{list.name}</Card.Title>
            <Card.Text>
            {list.content}
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

        <ButtonGroup aria-label="Basic example" style={{display: "flex", margin: "5vh auto"}}>
            <Button variant="primary" onClick={() => dispatch(readyCheck())}>Clear completed</Button>
            <Button variant="primary" onClick={() => dispatch(alphabetCheck())}>Sort by Alphabet</Button>
            <Button variant="primary" onClick={() => dispatch(timeSort())}>Sort by by Time</Button>
            <Button variant="primary" onClick={() => dispatch(markCompleted())}>Mark all completed</Button>
    </ButtonGroup>
    
        <div className="renderedList">
        {renderedLists}
        </div>
        </div>
    )
}

export default ToDoList