import { useState } from "react";
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ bookId }) => {

    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
    })



    const sendComment = async (event) => {
        event.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify({ ...comment, elementId: bookId }),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzU1NTgyZWExZDAwMTViYjA0YWEiLCJpYXQiOjE2NDQ1MDA0MjgsImV4cCI6MTY0NTcxMDAyOH0.a6Q2NpfxpUJtp61HabF-ThX6mDgsZoZBdiMZ0fLGKWo"'
                }
            })
            if (response.ok) {

                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <div>
            <Form onSubmit={(event) => { sendComment(event) }}>
                <Form.Group>
                    <Form.Label>Comment text</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add comment here"
                        value={comment.comment}
                        onChange={e => setComment({
                            ...comment,
                            comment: e.target.value
                        })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select" value={comment.rate}
                        onChange={e => setComment({
                            ...comment,
                            rate: e.target.value
                        })}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}


export default AddComment