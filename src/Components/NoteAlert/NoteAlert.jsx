import React from 'react'
import { Alert } from 'react-bootstrap'

const NoteAlert = ({variant, children}) => {
  return (
    <>
      { children && <Alert variant={variant}>{children}</Alert>}
    </>
  )
}

export default NoteAlert