/* eslint-disable react/jsx-key */
import Link from 'next/link';
import { useState } from 'react';
import FormModal from './formModal';
import { ConditionalLinks } from './ConditionalLinks';


type ContentType = {
  // map(arg0: ({ name, href }: ContentType) => JSX.Element): import("react").ReactNode;
  name: string;
  href: string;
};

type DropDownProps = {
  isFooter : boolean
  setMenuState  : React.Dispatch<React.SetStateAction<boolean>>;
  menuState  : boolean;
  label  : string;
  content  : ContentType[]
  i  : string;
  type : string;
}

const DropDownButton = ({
  isFooter,
  setMenuState,
  menuState,
  label,
  content,
  i,
  type
}: DropDownProps ) => {

  const [isShown, setIsShown] = useState(false);

  const [ modalShow, setModalShow] = useState(false)
  const [ PDF, setPDF ] = useState('')

  return (
  <>
      <FormModal 
          key={PDF}
          PDF={PDF}
          setPDF={setPDF}
          modalShow={modalShow}
          setModalShow={setModalShow}
        />
        
        <li
          key={i}
          onMouseOver={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >

      <button
        id="dropdownButton"
        className="capitalize hover:bg-blue-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm 2xl:text-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {label}{' '}
        { !isFooter && <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>}
      </button>
      {/* <!-- Dropdown menu --> */}
      {isShown && (
        <div
          id="dropdownMenu"
          className={` ${isFooter ? "inline-block " : "block "  }  bg-white z-10 absolute divide-gray-100 rounded shadow dark:bg-gray-700 `}
        >
          <ul className={` ${content[0].name ? "py-1 px-2" : undefined } text-sm divide-y text-gray-700 dark:text-gray-200`}>
            {content.map(({ name, href } : ContentType ) => (
              <li
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                {
                  type == 'download' ?  
                  (
                    
                        <a
                          onClick={() => {
                            setIsShown(!isShown);
                            setMenuState(!menuState);
                            setModalShow(!modalShow);
                            setPDF(href)
                          }}
                          className={`capitalize block ${content[0].name ? "px-4 py-2" : undefined } text-primary cursor-pointer 2xl:text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white `}
                        >
                          { name }
                        </a>
                  ) 
                  :
                  (

                    href.includes('http') ? //open website on new page
                    (
                    <Link href={href}
                        onClick={() => {
                          setIsShown(!isShown);
                          setMenuState(!menuState);
                        }}
                        target='_blank'
                        className={`capitalize block ${content[0].name ? "px-4 py-2" : undefined } 2xl:text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white `}
                      >
                        { name }
                    </Link>
                    ) : 
                    (
                      <Link href={href}
                        onClick={() => {
                          setIsShown(!isShown);
                          setMenuState(!menuState);
                        }}
                        target='_blank'
                        className={`capitalize block ${content[0].name ? "px-4 py-2" : undefined } 2xl:text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white `}
                      >
                        { name }
                    </Link> 
                    )
                  ) 
                }
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  </>

  );
};

export default DropDownButton;