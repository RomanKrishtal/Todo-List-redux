import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Stack } from 'react-bootstrap';
import { toggleTheme } from './darkThemeSlice.jsx'
import { useSelector } from 'react-redux'
import FormSwitch from "./FormSwitch.jsx"


import { listAdded } from "./toDoListSlice.jsx";

const AddPostForm = () => {
    const [toDoName, setToDoName] = useState('');
    const [toDoContent, setToDoContent] = useState('');

    const dispatch = useDispatch();
    let dark = useSelector(state => state.mode.darkTheme)

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

    function toggleThemeHandler() {
        dispatch(toggleTheme())
    }

    return (
        <Container fluid className="border" style={{padding: "10px", 
        borderRadius: "10px", 
        backgroundColor: dark ? "black" : "white",
        color: !dark ? "black" : "white"}}>
        <div>
        <section>
            <Stack gap={3}>
                <div>
            <Row>
                <div style={{display: "flex", justifyContent: "center"}}>
                <h3 style={{display: "block", marginRight: "auto"}}>Add new thing</h3>
                <Button style={{marginLeft: "auto"}} onClick={toggleThemeHandler}>
                    <FormSwitch />
                </Button>
                </div>
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
            <Row className="text-center">
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