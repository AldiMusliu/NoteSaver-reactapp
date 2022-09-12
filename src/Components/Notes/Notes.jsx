import styles from './Notes.module.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { Link} from 'react-router-dom';

const Notes = ({ getNotes, notes }) => {
  
  const token= JSON.parse(window.localStorage.getItem('note_token'));
  let decoded = jwt_decode(token.token);

  const handleSubmit = () => {
    const data = {
      user_id:`${decoded._id}`
    }
    getNotes(data)
  }

  useEffect(()=>{
    handleSubmit()
  },[])
  
  return (
      <ListGroup className={styles.notesList}>
      {
        notes?.map((item, index)=>{
          return(
           <Link to={`/notes/${item._id}`} style={{textDecoration: 'none'}}><ListGroup.Item className={styles.listItem}>{item.title}</ListGroup.Item></Link>
          )
        })
      }
     </ListGroup>
  )
}

export default Notes
