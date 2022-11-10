import { EventSchema } from '@honcho/generated/event'
import { prisma, Resolvers, Resource, ResourceColumns } from '@honcho/server'

export const schema = EventSchema
export const primaryKey = 'id' as const

const EventResource = new Resource('event', EventSchema).meta({ displayName: '' })

export const columns: ResourceColumns<typeof EventResource> = {
  end: {
    render({ getValue }) {
      const v = getValue()
      return <div>{v.toDateString()}</div>
    },
  },
}

export const resolvers: Resolvers<typeof EventResource> = {
  async list() {
    return prisma.event.findMany()
  },
  async show(id) {
    return prisma.event.findUniqueOrThrow({ where: { [EventResource.primaryKey]: id } })
  },
  async update(id, _data) {
    const data = schema.parse(_data)
    await prisma.event.update({ where: { [EventResource.primaryKey]: id }, data })
  },
}
// #endregion Resolvers
