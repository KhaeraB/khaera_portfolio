'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { Link } from 'react-scroll';
import { MENU_LIST } from '@/utilities/roots_navlink';

type Props = {
  navbar: boolean;
  setNavbar: (active: boolean) => void;
};

const Menu = ({ navbar, setNavbar }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navbar ? 'block' : 'hidden'
        }`}
      >
        <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
          {MENU_LIST.map((item, id) => {
            return (
              <Link
                key={id}
                to={item.page}
                className={
                  'block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100'
                }
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
              >
                {item.label}
              </Link>
            );
          })}

          {currentTheme === 'dark' ? (
            <button
              onClick={() => setTheme('light')}
              className='bg-slate-100 p-2 rounded-xl'
            >
              <RiSunLine size={15} color='black' />
            </button>
          ) : (
            <button
              onClick={() => setTheme('dark')}
              className='bg-slate-100 p-2 rounded-xl'
            >
              <RiMoonFill size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
