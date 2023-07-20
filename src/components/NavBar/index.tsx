'use client';
import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { logoFont } from '../../fonts/KbFonts';
import Menu from '../Menu';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3'>
            <div className=' md:py-5 md:block'>
              <h2
                className={`${logoFont.className} font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% dark:bg-white`}
              >
                Khaera_blk
              </h2>
            </div>
            <div className='md:hidden'>
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <Menu navbar={navbar} setNavbar={setNavbar} />
      </div>
    </header>
  );
};

export default NavBar;
