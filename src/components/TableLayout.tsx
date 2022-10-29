import { ReactNode } from 'react'
import { capitalCase } from 'change-case'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { models } from '@honcho/generated'

import { TablePageQuerySchema } from '~/utils/helpers'

export type TableLayoutProps = { children: ReactNode }

export const TableLayout = ({ children }: TableLayoutProps) => {
  const router = useRouter()
  const pageQuery = TablePageQuerySchema.safeParse(router.query)
  const model = pageQuery.success ? pageQuery.data.model : null

  return (
    <div className="drawer drawer-mobile">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Drawer Content */}
      <div className="drawer-content">{children}</div>

      {/* Sidebar */}
      <nav className="drawer-side relative border-r border-gray-300">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <div className="bg-base-100 text-base-content w-80">
          <div className="px-3 py-4">
            <h2 className="text-lg font-bold">Tables</h2>
          </div>
          <ul className="menu overflow-y">
            {Object.keys(models).map((name) => {
              const href = `/t/${name}`

              return (
                <li key={name}>
                  <Link href={href} className={clsx(model === name && 'active')}>
                    {capitalCase(name)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
