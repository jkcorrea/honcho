import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { HonchoConfig } from './routers/_app'

dayjs.extend(relativeTime)

const honchoConfig: HonchoConfig = {
  event: {
    createdAt: {
      header: 'My Component',
      cell: ({ getValue }) => {
        const d = getValue()
        const label = dayjs(d).fromNow()
        return <span className="badge">{label}</span>
      },
    },
  },
}

export default honchoConfig
