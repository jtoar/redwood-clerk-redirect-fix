import { render } from '@redwoodjs/testing/web'

import ReauthenticatePage from './ReauthenticatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReauthenticatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReauthenticatePage />)
    }).not.toThrow()
  })
})
