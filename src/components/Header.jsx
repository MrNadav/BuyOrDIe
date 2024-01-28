import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export const Header = () => {
    const location = useLocation().pathname
    return (
    <header>
       
        <nav className='pt-3 pr-5 text-lg'>
            <ul className='flex justify-start max-w-screen-xl p-5 ml-5 text-zinc-500 gap-x-8 font-bold'>
            <Link to='/'><img src="src/assets/images/logo.webp" className='h-6 max-w-screen-xl' />
            </Link>
                <li>
                    <Link to='/' className={location === '/' ? 'text-white bg-red-lite rounded-lg p-1' : null}>Home</Link>
                </li>
                <li>
                    <Link to='/expenses' className={location === '/expenses' ? 'text-white bg-red-lite rounded-lg p-1' : null}>Expenses</Link>
                </li>
                <li>
                    <Link to='/income' className={location === '/income' ? 'text-white bg-red-lite rounded-lg p-1' : null}>Income</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
