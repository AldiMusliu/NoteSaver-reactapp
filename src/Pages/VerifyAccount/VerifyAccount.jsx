import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { api, endpoints } from '../../lib/api'
import NoteAlert from '../../Components/NoteAlert/'
import styles from './VerifyAccount.module.scss'

const VerifyAccount = () => {
  const [success, setSuccess] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const location = useLocation()

  useEffect(() => {
    const verifyAccount = async () => {
      if (location.search) {
        const params = new URLSearchParams(location.search)
        const token = params.get('token')

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

        const result = await api.call(endpoints.verify, config)
        setSuccess(result.success)
        if (!result.success) {
          setErrorMessage(result.data)
        }
      }
    }

    verifyAccount()
  }, [location.search])

  return (
    <div className={styles.verifyAccount}>
        {success !== undefined ? (
          success === true ? (
            <NoteAlert variant={'success'} >
              <div className={styles.alert}>
                Account is verified! <br/> <Link to="/login">Please go to login</Link>
              </div>
            </NoteAlert>
          ) : (
            <NoteAlert variant={'danger'}>{errorMessage}</NoteAlert>
          )
        ) : null}
     </div>
  )
}

export default VerifyAccount
