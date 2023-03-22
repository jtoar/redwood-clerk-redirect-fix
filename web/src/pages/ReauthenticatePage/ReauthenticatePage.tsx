import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const ReauthenticatePage = () => {
  const { reauthenticate } = useAuth()

  useEffect(() => {
    reauthenticate().then(() => navigate(routes.home()))
  }, [])

  return <p>Reauthenticating...</p>
}

export default ReauthenticatePage
