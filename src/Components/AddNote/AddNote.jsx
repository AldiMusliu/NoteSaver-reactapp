import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import jwt_decode from "jwt-decode";
import styles from './AddNote.module.scss';

const AddNote = ({ submit, setMessage }) => {

  const token= JSON.parse(window.localStorage.getItem('note_token'));
  let decoded = jwt_decode(token.token);

  const [title, setTitle] = useState();
  const [content, setContent]= useState();


  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      title,
      content,
      user_id:`${decoded._id}`
    }
    submit(data)
  }

  return (
    <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className={styles.newNoteInput}>
              <Form.Label>Title</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                placeholder="Title"
              />
            </Form.Group>

            <Form.Group className={styles.newNoteInput}>
              <Form.Label>Content</Form.Label>
              <textarea
                type="text"
                required
                className="form-control"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value)
                }}
                placeholder="Write your new note..."
                rows={5}
              />
            </Form.Group>

            <div className={styles.submit}>
              <Button type="submit" className={styles.btnSubmit} variant='success'>Save</Button>
            </div>
          </Form>
    </div>
  )
}

export default AddNote
