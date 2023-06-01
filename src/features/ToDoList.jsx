import { useSelector, useDispatch } from "react-redux"
import { listChecked, listDeleted, readyCheck, alphabetCheck, timeSort, markCompleted } from "./toDoListSlice.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button, ButtonGroup, Card } from "react-bootstrap";
import '../App.css'

const ToDoList = () => {
    const lists = useSelector(state => state.lists)
    const completed = useSelector(state => state.lists.completed)

    const dispatch = useDispatch()

    const marginButtons = "12px";


    const renderedLists = lists.map(list => (
        <Card key={list.id} className={ list.completed ? "completed rounded shadow-sm p-3 mb-5" :  "shadow-sm p-3 mb-5 bg-white rounded"}>
        <Card.Body>
            <Card.Title>{list.name}</Card.Title>
            <Card.Text>
            {list.content}
            </Card.Text>
            <Stack direction="horizontal">
            <div>
            <label htmlFor={list.id} style={{marginRight: "5px"}}>Complete</label>
            <input type="checkbox" 
            id={list.id} 
            onClick={() => dispatch(listChecked(list.id))} 
            onChange={e => e.target.checked}
            value={list.completed} 
            checked={list.completed ? 'checked': ''}
            style={{marginRight: "10px"}}/>
            <span>{list.date}</span>
            </div>
            
            <Button className="ms-auto" onClick={() => dispatch(listDeleted(list.id))}>Delete</Button>
            </Stack>
            </Card.Body>
        </Card>
    ))

    return(
        <Card style={{padding: "10px", marginTop: "10px"}}>
        <div>
        <h3>Things to do: {lists.length}</h3>

        <ButtonGroup aria-label="Basic example" style={{display: "flex", justifyContent: "center"}}>
            <div style={{padding: "10px", display: "flex", justifyContent: "center", width: "100%"}}>
            <Button style={{marginRight: marginButtons}} variant="primary" onClick={() => dispatch(readyCheck())}>Clear completed</Button>
            <Button style={{marginRight: marginButtons}} variant="primary" onClick={() => dispatch(alphabetCheck())}>Sort by Alphabet</Button>
            <Button style={{marginRight: marginButtons}} variant="primary" onClick={() => dispatch(timeSort())}>Sort by by Time</Button>
            <Button style={{marginRight: "0"}} variant="primary" onClick={() => dispatch(markCompleted(lists))}>Mark all completed</Button>
            </div>
    </ButtonGroup>
        <div className="renderedList">
        {renderedLists}
        </div>
        </div>
        </Card>
    )
}

export default ToDoList