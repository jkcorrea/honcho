import React, { useRef } from 'react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useKeyboardEvent } from '@react-hookz/web'
import Link from 'next/link'

type NavItem = {
  href: string
  label: string
}

const navItems: NavItem[] = [
  // { href: '/', label: 'Item 1' },
  // { href: '/', label: 'Item 2' },
  // { href: '/', label: 'Item 3' },
]

const Navbar = () => {
  const searchRef = useRef<HTMLInputElement | null>(null)
  useKeyboardEvent('/', (ev) => {
    if (searchRef.current) {
      searchRef.current.focus()
      ev.preventDefault()
    }
  })

  return (
    <div className="bg-base-100 flex items-center p-2 w-full h-12 shadow relative z-20">
      {/* Start */}
      <div className="justify-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <Bars3Icon className="h-5 w-5" />
          </label>

          <ul tabIndex={0} className="menu menu-compact dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow w-52">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Honcho.js
        </Link>

        <ul className="menu menu-horizontal p-0">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle */}
      <div className="grow justify-center hidden md:flex">
        <label className="relative max-w-md mx-5 w-full flex items-center">
          <MagnifyingGlassIcon className="text-base-content pointer-events-none absolute z-10 my-3 ml-2 stroke-current opacity-60 w-4 h-4" />

          <input
            ref={searchRef}
            type="text"
            placeholder="Search…"
            className="input input-sm input-bordered w-full pl-8"
          />
          <div className="pointer-events-none absolute justify-center flex flex-col right-3 gap-1 opacity-60">
            <kbd className="kbd kbd-sm">/</kbd>
          </div>
        </label>
      </div>

      {/* End */}
      <div className="justify-end space-x-2">
        <button className="btn btn-sm">Sign Up</button>
        <button className="btn btn-sm btn-ghost">Eject</button>
      </div>
    </div>
  )
}

export default Navbar
