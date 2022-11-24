import { columns as baseColumns, TEventGuest } from '@honcho/generated/resources/event_guest'
import type { ResourceColumns } from '@honcho/types'

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
