declare module 'virtual:honcho' {
  import type { AnyHonchoResource } from '@honcho/types'

  const __honcho_resources: Record<string, AnyHonchoResource>
  export default __honcho_resources
}
