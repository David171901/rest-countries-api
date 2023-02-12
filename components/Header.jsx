import React from 'react'
import { useState, useEffect } from 'react';

// Libraries
import Link from 'next/link';
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])
  

  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if(currentTheme === 'dark') {
      return (
        <li className='flex justify-center items-center space-x-2 cursor-pointer' onClick={()=>setTheme('light')}>
          <FontAwesomeIcon className='w-4' icon={faMoon} /><span>Dark Mode</span>
        </li> 
      )
    } else {
      return (
        <li className='flex justify-center items-center space-x-2 cursor-pointer' onClick={()=>setTheme('dark')}>
          <FontAwesomeIcon className='w-4' icon={faMoon} /><span>Dark Mode</span>
        </li> 
      )
    }

  }

  return (
    <nav className='w-full h-16 border-b-2 pb-2 shadow-sm bg-white dark:bg-gray-700'>
        <ul className='container h-full px-4 md:px-0 md:mx-auto flex justify-between items-center font-bold'>
            <li className='md:text-2xl cursor-pointer'>
              <Link href='/'>Where in the world?</Link>
            </li>
            {renderThemeChanger()}
        </ul>
    </nav>
  )
}

export default Header