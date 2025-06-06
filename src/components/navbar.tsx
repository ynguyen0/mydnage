import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartImg from '/src/assets/Cart.png'

const NAV = [
  { label: 'Home', path: '/' },
  { label: 'myDNAge', path: '/myDNAge' },
  { label: 'myDogDNAge', path: '/myDogDNAge' },
  { label: 'Our Science', path: '/our-science' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)   // you’ll use this later for mobile

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="
            flex items center justify-between gap-[1.875rem]
            w-full md:w-[47vw]
            md:ml-auto
            px-8 py-5
          bg-harmony-500 text-white rounded-bl-[1.625rem]
            shadow-[0_0_20px_rgba(21,136,131,0.20)]
        "
      >
        {/* --- LINKS --------------------------------------------------------- */}
        <ul className="flex items-center gap-[1.875rem]">
          {NAV.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end
                className={({ isActive }) =>
                  [
                    // base style
                    'relative font-semibold transition-colors',
                    'hover:text-fresh-500',
                    isActive
                      ? 'text-fresh-500'
                      : 'text-white',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* --- CART ICON ----------------------------------------------------- */}
        <button
          aria-label="Cart"
          // → delete `hidden md:flex` if you want it visible on mobile
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full hover:bg-fresh-500
           
          "
        >
          <img
            src={CartImg}
            alt="Cart"
            className="h-11 w-11 object-contain select-none "
            draggable={false}
          />
        </button>
      </nav>
    </header>
  )
}