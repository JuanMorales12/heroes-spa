import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';

export const PublicRouter = ({children}) => {
    const { logged } = useContext(AuthContext);

  return (
    <>
        {logged ? <Navigate to="/" /> : children}
    </>
  )
}
