import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'

export const Authcontext = createContext()

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState({ employees: [], admin: [] })

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    setUserdata({ employees, admin })
  }, [])

  return (
    <Authcontext.Provider value={userdata}>
      {children}
    </Authcontext.Provider>
  )
}

export default AuthProvider
