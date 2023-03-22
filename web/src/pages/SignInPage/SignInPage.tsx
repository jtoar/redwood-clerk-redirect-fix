import { SignIn } from '@clerk/clerk-react'

import { Link, routes } from '@redwoodjs/router'

const SignInPage = () => {
  return (
    <>
      <SignIn signUpUrl="/sign-up" redirectUrl={routes.reauthenticate()} />
      <p>
        Don't have an account? <Link to={routes.signUp()}>Sign up</Link>
      </p>
    </>
  )
}

export default SignInPage
