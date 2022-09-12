import { useState } from 'react'
import NoteAlert from '../../Components/NoteAlert'
import LoginForm from '../../Components/Forms/Login'
import { api, endpoints } from '../../lib/api'

import { login } from '../../lib/store/slices/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './Login.module.scss';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState()

  const submit = async (data) => {
    const config = {
      data,
    }
    const result = await api.call(endpoints.login, config)
    if (!result.success) {
      setErrorMessage([result.data])
      return
    }
    dispatch(login(result.data))
    navigate('/dashboard')
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginComponent}>
        <h1>Login</h1>
        <NoteAlert variant={'danger'}>{errorMessage}</NoteAlert>
        <LoginForm setMessage={setErrorMessage} submit={submit} /> 
      </div>
    </div>
  )
}
export default Login
