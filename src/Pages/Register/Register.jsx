import { Container } from 'react-bootstrap'
import RegisterForm from '../../Components/Forms/Register/Register'

import { api, endpoints } from '../../lib/api'
import NoteAlert from '../../Components/NoteAlert'
import { useState } from 'react'

import styles from './Register.module.scss';
import { NavLink } from 'react-router-dom'

const Register = () => {
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('danger')

  const submitRegister = async (data) => {
    setVariant('danger')
    const config = {
      data,
    }
    const result = await api.call(endpoints.register, config)
    if (!result.success) {
      setMessage([result.data])
      return
    }
    setVariant('success')
    setMessage('Please verify your account')
  }

  return (
    <div className={styles.registerVerifyComponent}>
      <div className={styles.register}>
        <div className={styles.registerComponent}>
          <h1>Register</h1>
          <NoteAlert variant={variant}>{message}</NoteAlert>
          {variant !== 'success' && <RegisterForm setMessage={setMessage} submit={submitRegister} />}
        </div>
      </div>
    </div>
  )
}

export default Register
