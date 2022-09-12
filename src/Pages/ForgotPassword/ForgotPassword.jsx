import { useState } from 'react'
import SuperHeroAlert from '../../Components/NoteAlert'
import ForgotPasswordForm from '../../Components/Forms/ForgotPassword'
import { api, endpoints } from '../../lib/api'
import styles from './ForgotPassword.module.scss';

const ForgotPassword = () => {
  const [message, setMessage] = useState()
  const [variant, setVariant] = useState('danger')

  const submitForm = async (data) => {
    const config = {
      data,
    }
    const result = await api.call(endpoints.forgotPassword, config)
    if (!result.success) {
      setMessage([result.data])
      return
    }

    setVariant('success')
    setMessage('An email was sent to you with further instructions!')
  }

  return (
    <div className={styles.forgotPassword}>
      <div className={styles.forgotPasswordComponent}>
        <h1>Forgot Password</h1>
        <SuperHeroAlert variant={variant}>{message}</SuperHeroAlert>
      
      {variant !== 'success' && <ForgotPasswordForm setMessage={setMessage} submit={submitForm} />}
      </div>
    </div>
  )
}

export default ForgotPassword
