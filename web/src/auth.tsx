import React, { useEffect } from 'react'

import { ClerkProvider, useUser } from '@clerk/clerk-react'

import { createAuth } from '@redwoodjs/auth-clerk-web'
import { navigate } from '@redwoodjs/router'

export const { AuthProvider: ClerkRwAuthProvider, useAuth } = createAuth()

interface Props {
  children: React.ReactNode
}

const ClerkStatusUpdater = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  const { reauthenticate } = useAuth()

  useEffect(() => {
    if (isLoaded) {
      reauthenticate()
    }
  }, [isSignedIn, user, reauthenticate, isLoaded])

  return null
}

const ExtraWrapper = ({ children, clerkOptions}) => {
  const { reauthenticate } = useAuth()

  return (
    <ClerkProvider {...clerkOptions} navigate={(to) => reauthenticate().then(() => navigate(to))}>
      {children}
      <ClerkStatusUpdater />
    </ClerkProvider>
  )
}

export const AuthProvider = ({ children }: Props) => {
  const publishableKey = process.env.CLERK_PUBLISHABLE_KEY
  const frontendApi =
    process.env.CLERK_FRONTEND_API_URL || process.env.CLERK_FRONTEND_API

  type ClerkOptions =
    | { publishableKey: string; frontendApi?: never }
    | { publishableKey?: never; frontendApi: string }

  const clerkOptions: ClerkOptions = publishableKey
    ? { publishableKey }
    : { frontendApi }

  return (
    <ClerkRwAuthProvider>
      <ExtraWrapper clerkOptions={clerkOptions}>{children}</ExtraWrapper>
    </ClerkRwAuthProvider>
  )
}
