import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Stack } from 'react-bootstrap';

import { listAdded } from "./toDoListSlice.jsx";

const AddPostForm = () => {
    const [toDoName, setToDoName] = useState('');
    const [toDoContent, setToDoContent] = useState('');

    const dispatch = useDispatch({});

    const onToDOChange = e => setToDoName(e.target.value)
    const onContentChange = e => setToDoContent(e.target.value)

    const onSaveClick = () => {
    if (toDoName && toDoContent) {
        dispatch(
            listAdded({
                id: nanoid(),
                name: toDoName,
                content: toDoContent,
                status: false
            })
        )
    }
    setToDoName('')
    setToDoContent('')
}

    return (
        <Container fluid>

        <div>
        <section>
            <Stack gap={3}>
            <div>
            <Row>
            <h3>Add new thing</h3>
            </Row>
            <div style={{display: "flex", justifyContent: "center"}}>
            <Row>
                <Col lg={true}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
            <label>To do</label>
            <textarea value={toDoName} onChange={onToDOChange} style={{border: "1px solid"}}/>
            </div>
            </Col>
            <Col lg={true}>
            <div style={{display: "flex", alignItems: "center"}}>
            <label>Content</label>
            <textarea value={toDoContent} onChange={onContentChange} />
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