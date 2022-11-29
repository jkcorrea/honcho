import { useMemo } from 'react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { capitalCase } from 'change-case'
// @ts-expect-error TS not resolving package.json exports field
import { useData } from 'telefunc/react-streaming'
import __honcho_resources from 'virtual:honcho'

import type { AnyResourceColumns, ResourceColDef } from '../../../types'
import ResourceTable from '../../components/ResourceTable'
import { TableLayout } from '../../components/TableLayout'
import { usePageContext } from '../../lib/usePageContext'
import { onList } from './resource.page.telefunc'

const colHelper = createColumnHelper<any>()
const defaultCell: ColumnDef<any>['cell'] = ({ getValue }) => {
  const v = getValue()
  return typeof v === 'object' ? JSON.stringify(v) : v
}

function transformColumns(cols: AnyResourceColumns): ColumnDef<any>[] {
  return Object.entries(cols)
    .sort(
      ([_1, col1]: [string, ResourceColDef<any> | undefined], [_2, col2]: [string, ResourceColDef<any> | undefined]) =>
        (col1?.order ?? Infinity) - (col2?.order ?? Infinity),
    )
    .map(
      ([id, col]: [string, ResourceColDef<any> | undefined]): ColumnDef<any> =>
        colHelper.accessor(id, {
          id,
          cell: col?.render ?? defaultCell,
          header: col?.title ?? capitalCase(id),
        }),
    )
}

export const Page = () => {
  const { routeParams = {} } = usePageContext()
  const resourceId = routeParams.id
  const data = useData(onList, resourceId)

  const columns = useMemo(() => {
    return transformColumns(__honcho_resources[resourceId].columns ?? {})
  }, [resourceId])

  return (
    <TableLayout resources={Object.keys(__honcho_resources)}>
      <ResourceTable data={data} columns={columns} />
    </TableLayout>
  )
}
