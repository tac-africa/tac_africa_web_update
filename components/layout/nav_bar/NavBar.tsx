/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { data } from '../../../pages/api/navLinks';
import { useState, useCallback } from 'react';
import DropDownButton from '../../DropDownButton';

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleButton = useCallback(() => {
    setMenuState((menuState) => !menuState);
  }, []);

  return (
    <nav
    
      className={`bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 ${
        menuState && 'h-screen'
      } lg:h-full`}
    >
      <div
        key={data[0].label}
        className="xl:px-4 flex flex-wrap justify-between items-center mx-auto"
      >
        <Link key={data[0].label} href={'/'}>
            <img
              src="/TAC_LOGO.webp"
              className="mr-3 h-16 "
              alt="tac Logo"
              key={data[0].label}
            />
        </Link>
        <button
          onClick={toggleButton}
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          key={data[0].label}
        >
          <span
            className="visible lg:hidden"
            style={{ zIndex: '100' }}
            onClick={toggleButton}
            key={data[0].label}
          >
            <div
              className={[
                'hamburger hamburger--collapse ',
                menuState && 'is-active',
              ].join(' ')}
              onClick={toggleButton}
              key={data[0].label}
            >
              <span key={data[0].label} className="hamburger-box">
                <span
                  key={data[0].label}
                  className="hamburger-inner"
                ></span>
              </span>
            </div>
          </span>
        </button>

        <div
          className={`${
            menuState == true ? '' : 'hidden'
          }  w-full lg:block lg:w-auto`} //md:w-auto
          id="mobile-menu"
          key={data[0].label}
        >
          <ul
            className="flex flex-col mt-4 lg:flex-row md:space-x-6 lg:space-x-2 md:mt-0 md:text-sm md:font-medium"
            key={data[0].label}
          >
            {data?.map(({ label, content, type, details }, i) => (
              <>
                {content.length > 1 ? (
                  <div key={label}>
                    <DropDownButton
                      label={label}
                      key={label}
                      content={content}
                      type={type}
                      setMenuState={setMenuState}
                      menuState={menuState} 
                      isFooter 
                      i={''}                    />
                  </div > //dropdown
                ) : label == 'blog' ? (
                  <Link href="/blog">
                      <button
                        type="button"
                        className="capitalize text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm 2xl:text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        key={data[0].label}
                      >
                        {label}
                      </button>
                  </Link>
                ) : label == 'News & Events' ? (
                  <Link href='/tac_events'>
                    <button            
                      type="button"
                      className="capitalize mt-80 lg:mt-0 py-2.5 px-4 mr-2 mb-2 text-sm 2xl:text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      key={data[0].label}
                    >
                      {label}
                    </button>
                  </Link>
                ) : 
                (
                  <li>
                    <Link
                      key={i}
                      href={label == 'Home' ? '/' : '/contact'}
                      className="capitalize block py-2 pr-4 pl-3 text-gray-700 border-b 2xl:text-lg border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {label}
                    </Link>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;