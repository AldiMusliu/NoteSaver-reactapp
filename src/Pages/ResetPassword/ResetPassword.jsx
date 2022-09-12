import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import NoteAlert from '../../Components/NoteAlert'
import ResetPasswordForm from '../../Components/Forms/ResetPassword'
import { api, endpoints } from '../../lib/api'
import { Link, useLocation } from 'react-router-dom'
import styles from './ResetPassword.module.scss';

const ResetPassword = () => {
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('danger')
  const [token, setToken] = useState()
  const location = useLocation()

  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search)
      setToken(params.get('token'))
    }
  }, [location.search])

  const submitRestPassword = async (data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    }
    const result = await api.call(endpoints.resetPassword, config)
    if (!result.success) {
      setMessage(result.data)
      return
    }
    setVariant('success')
    setMessage('Your password has been successfully changed!')
  }

  return (
    <div className={styles.resetPassword}>
      <div className={styles.resetPasswordComponent}>
        <h1>Reset Password</h1>
        <NoteAlert variant={variant}>{message}</NoteAlert>
        {variant !== 'success' ? <ResetPasswordForm setMessage={setMessage} submit={submitRestPassword} /> : <Container><Link to="/login">Go to login</Link></Container>}
      </div>
    </div>
  )
}

export default ResetPassword
