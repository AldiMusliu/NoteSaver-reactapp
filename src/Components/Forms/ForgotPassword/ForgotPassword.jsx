import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { emailRegex } from '../../../lib/constants'
import styles from './ForgotPassword.module.scss'

const ForgotPassword = ({ submit, setMessage }) => {
  const [email, setEmail] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!emailRegex.test(email)) {
      setMessage('Email is not valid')
      return
    }

    const data = {
      email,
    }
    submit(data)
  }

  return (
    <div className={styles.forgotPassword}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className={styles.forgotPasswordInput}>
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                required
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="Email"
              />
            </Form.Group>
            <div className={styles.submit}>
              <Button type="submit" className={styles.btnSubmit}>Submit</Button>
            </div>
          </Form>
      </div>
  )
}

export default ForgotPassword
