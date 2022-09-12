import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRoutes = ({ role, children }) => {
  const auth = useSelector((state) => state.auth.data)

  if (!auth) {
    return <Navigate to="/login" />
  }

  return (
    <div className={role} style={{backgroundColor: '#e7e6f9'}}>
      {children}
    </div>
  )
}

export default PrivateRoutes