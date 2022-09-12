import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { emailRegex, passwordRegex} from '../../../lib/constants'
import { NavLink } from 'react-router-dom';

import styles from './Register.module.scss';

const RegisterForm = ({ submit, setMessage }) => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [password, setPassword] = useState()
  const [confPassword, setConfPassword] = useState()
  const [email, setEmail] = useState()


  const handleSubmit = (e) => {
    e.preventDefault()

    const localErrors = []
    setMessage('')

    if (!firstName) {
      localErrors.push('First name cannot be empty!')
    }
    if (!lastName) {
      localErrors.push('Last name cannot be empty!')
    }
    if (!emailRegex.test(email)) {
      localErrors.push('Email is not valid!')
    }
    if (!passwordRegex.test(password)) {
      localErrors.push('Password must contain a number and a character')
    }
    if (confPassword !== password) {
      localErrors.push('Passwords do not match')
    }

    if (localErrors.length) {
      setMessage(localErrors[0])
      return
    }
    const data = {
      firstName,
      lastName,
      email,
      password,
    }
    submit(data)
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className={styles.registerInput}>
              <Form.Label>First Name</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group className={styles.registerInput}>
              <Form.Label>Last Name</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                placeholder="Last Name"
              />
            </Form.Group>


            <Form.Group className={styles.registerInput}>
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


            <Form.Group className={styles.registerInput}>
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                required
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className={styles.registerInput}>
              <Form.Label>Confirm Password</Form.Label>
              <input
                type="password"
                required
                className="form-control"
                value={confPassword}
                onChange={(e) => {
                  setConfPassword(e.target.value)
                }}
                placeholder="Confirm Password"
              />
            </Form.Group>

            <div className={styles.submit}>
              <Button type="submit" className={styles.btnSubmit}>Submit</Button>
            </div>
          </Form>
          <div style={{textAlign: 'center', paddingTop: '10px'}}>
            <NavLink to='/login' >Have an Account! Go to Login...</NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterForm
