import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart} from 'lucide-react';
import CartImg from '/src/assets/Cart.png';


const NAV = [
    { label: 'Home', path: '/' },
    { label: 'myDNAge', path: '/myDNAge' },
    { label: 'myDogDNAge', path: '/myDogDNAge' },
    { label: 'Our Science', path: '/our-science'}
];



export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50'>
            {/* DESKTOP BAR -------------------------------------------------------- */}
            <nav
                className="
                    relative flex items-center justify-end
                    gap-[1.875rem]
                    w-[42rem] max-w-full mx-auto
                    px-[1.9375rem] pr-[1.375rem] py-5
                    bg-harmony-500 rounded-bl-[1.625rem]
                    shadow-[0_0_20px-rgba(21,136,131,0,20)]
                "
            >
                {/** LINKS */}
                <ul className='hidden md:flex items-center gap-[1.875rem] mr-6'>
                    {NAV.map(({ label, path }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                end
                                className={({ isActive }) => 
                                    [
                                        'relative font-medium text-neutral1-500 hover:text-fresh-500 transition-colors',
                                        isActive &&
                                        'after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-1.5 after:h-1.5 after:rounded-ful text-neutral1-500',
                                    ].filter(Boolean).join(' ')
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* cart icon (desktop) */}
                <button
                    aria-label="Cart"
                    className="
                        hidden md:flex h-10 w-10 items-center justify-center
                        rounded-full bg-harmony-500 border-2
                        hover:opacity-80
                    "
                    >
                    <img
                        src={CartImg}
                        alt="Cart"
                        className="h-5 w-5 object-contain select-none"
                        draggable={false}
                    />
                </button>


            </nav>
        </header>
    )
}