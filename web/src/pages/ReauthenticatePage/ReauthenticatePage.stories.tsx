import type { ComponentMeta } from '@storybook/react'

import ReauthenticatePage from './ReauthenticatePage'

export const generated = () => {
  return <ReauthenticatePage />
}

export default {
  title: 'Pages/ReauthenticatePage',
  component: ReauthenticatePage,
} as ComponentMeta<typeof ReauthenticatePage>
