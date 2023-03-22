import { routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const SignUpPage = () => {
  const { signUp } = useAuth()

  return (
    <button
      onClick={() =>
        signUp({
          redirectUrl: routes.reauthenticate(),
        })
      }
    >
      sign up
    </button>
  )
}

export default SignUpPage
