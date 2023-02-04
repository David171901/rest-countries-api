import React from 'react'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import Link from 'next/link';

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
        <li className='space-x-2 cursor-pointer' onClick={()=>setTheme('light')}>
          <span>🌙</span><span>Dark Mode</span>
        </li> 
      )
    } else {
      return (
        <li className='space-x-2 cursor-pointer' onClick={()=>setTheme('dark')}>
          <span>🌙</span><span>Dark Mode</span>
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