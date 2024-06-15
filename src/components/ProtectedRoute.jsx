import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const { loggedIn } = useSelector((store) => store.auth);

  return (
    <>
    {
        loggedIn ? children : <Navigate to="/login" replace={true} />
    }
    </>
  )
}

export default ProtectedRoute