import { Link, Outlet } from '@tanstack/react-router'
import { capitalCase } from 'change-case'
import __honcho_resources from 'virtual:honcho'

import { rootRoute } from '../__root'

const allResources = Object.keys(__honcho_resources)
const navLinks = allResources.map((name) => {
  return (
    <li key={name} className="blah1">
      <Link
        to="/t/$resourceId"
        params={{ resourceId: name }}
        activeOptions={{ exact: false }}
        activeProps={{ className: 'active' }}
        className="test"
      >
        {capitalCase(name)}
      </Link>
    </li>
  )
})

export const tableLayoutRoute = rootRoute.createRoute({
  id: `table-layout`,
  component: TableLayout,
})

function TableLayout() {
  return (
    <div className="drawer drawer-mobile !h-auto flex-1">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Drawer Content */}
      <div className="drawer-content">
        <Outlet />
      </div>

      {/* Sidebar */}
      <nav className="drawer-side relative border-r border-gray-300">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <div className="bg-base-100 text-base-content w-80">
          <div className="px-3 py-4">
            <h2 className="text-lg font-bold">Tables</h2>
          </div>
          <ul className="menu overflow-y">{navLinks}</ul>
        </div>
      </nav>
    </div>
  )
}
