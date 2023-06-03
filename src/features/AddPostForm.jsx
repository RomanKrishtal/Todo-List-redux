import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { darkThemeToggle } from "./toDoListSlice.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Stack } from 'react-bootstrap';

import { listAdded } from "./toDoListSlice.jsx";

const AddPostForm = () => {
    const [toDoName, setToDoName] = useState('');
    const [toDoContent, setToDoContent] = useState('');
    const [darkTheme, setDarkTheme] = useState('white');

    function darkThemeHandler() {
        if (darkTheme === 'white') {
            setDarkTheme('black');
        } else {
        setDarkTheme('white');
        }
    }

    const dispatch = useDispatch();

    const onToDOChange = e => setToDoName(e.target.value)
    const onContentChange = e => setToDoContent(e.target.value)

    const onSaveClick = () => {
    if (toDoName && toDoContent) {
        dispatch(
            listAdded({
                id: nanoid(),
                name: toDoName,
                content: toDoContent,
                completed: false,
                date: new Date().toLocaleDateString('de-DE')
            })
        )
    }
    setToDoName('')
    setToDoContent('')
}

    return (
        <Container fluid className="border" style={{padding: "10px", borderRadius: "10px", backgroundColor: darkTheme, 
        color: darkTheme ? 'black' : 'white'}}>
        <div>
        <section>
            <Stack gap={3}>
                <div>
            <Row>
                <h3>Add new thing</h3>
                <button onClick={darkThemeHandler}>Dark theme</button>
            </Row>
                <div style={{display: "flex", justifyContent: "center"}}>
            <Row>
                <Col lg={true}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
            <label>To do:</label>
            <input value={toDoName} onChange={onToDOChange} style={{border: "1px solid"}}/>
            </div>
            </Col>
            <Col lg={true}>
            <div style={{display: "flex", alignItems: "center"}}>
            <label>Content:</label>
            <input value={toDoContent} onChange={onContentChange} />
            </div>
            </Col>
            </Row>
            </div>
            
            </div>
            <Row className="text-center from-indigo-100">
                <Col>
            <Button onClick={onSaveClick}>Add New Action</Button>
            </Col>
            </Row>
            </Stack>
        </section>
        </div>
        </Container>
    )
}

export default AddPostForm