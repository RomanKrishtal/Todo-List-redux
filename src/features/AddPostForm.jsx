import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { Button } from 'react-bootstrap';

import { listAdded } from "./toDoListSlice.jsx";

const AddPostForm = () => {
    const [toDoName, setToDoName] = useState('');
    const [toDoContent, setToDoContent] = useState('');

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
                done: false,
            })
        )
    }
    setToDoName('')
    setToDoContent('')
}

    return (
        <div className=".d-md-flex" style={{border: "1px solid"}}>
        <section>
            <h3>Add new thing</h3>
            <label>To do</label>
            <textarea value={toDoName} onChange={onToDOChange} />
            <label>Content</label>
            <textarea value={toDoContent} onChange={onContentChange} />
            <Button onClick={onSaveClick}>Add New Action</Button>
        </section>
        </div>
    )
}

export default AddPostForm