import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { Button } from 'react-bootstrap';

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
        <div style={{border: "1px solid"}}>
        <section  className="d-inline-flex">

            <h3 style={{border: "1px solid"}}>Add new thing</h3>
            <div className="flex-column">
            <label style={{border: "1px solid", display: "inline-block"}}>To do</label>
            <textarea value={toDoName} onChange={onToDOChange} style={{border: "1px solid"}}/>
            </div>
            <div className="flex-column">
            <label>Content</label>
            <textarea value={toDoContent} onChange={onContentChange} />
            </div>
            <Button onClick={onSaveClick}>Add New Action</Button>
        </section>
        </div>
    )
}

export default AddPostForm