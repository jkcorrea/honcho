import type { ResourceColumns } from 'honchojs'

import { columns as baseColumns, TEventGuest } from '~/generated/resources/event_guest'

export const columns: ResourceColumns<TEventGuest> = {
  ...(baseColumns as any),
  id: {
    render({ getValue }) {
      const value = getValue()
      return <div>{value}</div>
    },
  },
  avatarUrl: {
    title: 'Avatar',
  },
}
