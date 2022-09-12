import { useState } from 'react'
import styles from './Note.module.scss';
import { useEffect } from 'react'
import {Form, Button} from 'react-bootstrap';
import { useParams, Link  } from 'react-router-dom';
import { api} from '../../lib/api'
import jwt_decode from "jwt-decode";
import { getHeaderStructure } from '../../lib/helpers'

const Note = ({ getNotes, notes }) => {

  const { noteId } = useParams();

  const [note, setNote]=useState();
  const [title, setTitle] = useState();
  const [content, setContent]= useState();

  const token= JSON.parse(window.localStorage.getItem('note_token'))
  let decoded = jwt_decode(token.token)

  

  const getNote = async () => {
    const config = {
      headers: getHeaderStructure(token.token)
    }
    const result = await api.call({url: `/note/${noteId}`, method: "GET"}, config)
    setNote(result.data)
  }

  const deleteNote = async () => {
    const config = {
      headers: getHeaderStructure(token.token)
    }
    await api.call({url: `/note/${noteId}`, method: "DELETE"}, config)
  }

  const editNote = async (data) => {
    const config = {
      data,
      headers: getHeaderStructure(token.token)
    }
    await api.call({url: `/note/${noteId}`, method: "POST"}, config)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title,
      content,
      user_id:`${decoded._id}`
    }
    editNote(data)
  }

  useEffect(()=>{
    getNote()
  },[])
  
  return (
    <div className={styles.note}>
     <Form onSubmit={handleSubmit} className={styles.noteContent}>
            <Form.Label>Title</Form.Label>
            <Form.Group className={styles.newNoteInput}>
              <input
                type="text"
                required
                className="form-control"
                defaultValue={note?.title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Group className={styles.newNoteInput}>
              <textarea
                type="text"
                required
                className="form-control"
                defaultValue={note?.content}
                onChange={(e) => {
                  setContent(e.target.value)
                }}
                rows={5}
              />
            </Form.Group>

            <div className={styles.submit}>
              <Button type="submit" ><Link to='/profile'>Update</Link></Button>
              <Button type="button" variant='danger' onClick={()=>deleteNote()}><Link to='/profile'>Delete</Link></Button>
            </div>
          </Form>
    </div>
  )
}

export default Note
