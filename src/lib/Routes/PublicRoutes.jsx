import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PublicRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth.data)

  if (auth) {
      return <Navigate to="/profile" />
  }
  return <>{ children }</>
}

export default PublicRoutes