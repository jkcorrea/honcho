import __honcho_resources from 'virtual:honcho'

export async function onList(id: string) {
  if (!(id in __honcho_resources)) return []
  return __honcho_resources[id].resolvers.list()
}
