import React from 'react'
import AddNote from '../../Components/AddNote'
import styles from './Profile.module.scss'
import { useState } from 'react'
import { api, endpoints } from '../../lib/api'
import { getHeaderStructure } from '../../lib/helpers'
import Notes from '../../Components/Notes'
import { useEffect } from 'react'


const Profile = () => {
  const [message, setMessage] = useState('')
  const [notes, setNotes]=useState()
  const [a, setA]=useState(0);

  const token= JSON.parse(window.localStorage.getItem('note_token'));
  console.log(token.token);

  console.table(notes)
  const submitNewNote = async (data) => {
    const config = {
      data,
      headers: getHeaderStructure(token.token)
    }
    const result = await api.call(endpoints.addNewNote, config)
    if (!result.success) {
      setMessage([result.data])
      return
    }
    setA(prev=>prev+1);
  }

  const getNotes = async (data) => {
      const config = {
        headers: getHeaderStructure(token.token)
      }
      const result = await api.call(endpoints.getUserNotes, config)
      setNotes(result.data)
      if (!result.success) {
        setMessage([result.data])
        return
    }
  }
  
  useEffect(()=>{
    getNotes()
  },[a])

  return (
    <div className={styles.profile}>
      <div className={styles.profileSection1}>
        <AddNote setMessage={setMessage} submit={submitNewNote}/>
      </div>
      <div className={styles.profileSection2}>
        <Notes getNotes={getNotes} notes={notes}/>
      </div>
    </div>
  )
}

export default Profile