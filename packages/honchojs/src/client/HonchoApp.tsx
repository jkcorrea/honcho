import { RouterProvider } from '@tanstack/react-router'

import { router } from './router'

export const HonchoApp = () => {
  return <RouterProvider router={router} />
}
