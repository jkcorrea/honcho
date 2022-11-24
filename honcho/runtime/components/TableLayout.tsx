import { ReactNode } from 'react'
import { capitalCase } from 'change-case'
import clsx from 'clsx'

export type TableLayoutProps = {
  resources: string[]
  currentResource?: string
  children: ReactNode
}

export const TableLayout = ({ resources, currentResource, children }: TableLayoutProps) => {
  return (
    <div className="drawer drawer-mobile flex-1 !h-auto">
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
            {resources.map((name) => {
              const href = `/t/${name}`

              return (
                <li key={name}>
                  <a href={href} className={clsx(currentResource === name && 'active')}>
                    {capitalCase(name)}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
