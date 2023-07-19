import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  // const activeMenu = true;
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      console.log('collapsed')
      setActiveMenu(false);
    }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && 
        <Fragment>
          <div className='flex justify-between items-center'>
            <Link to='/' className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900' onClick={handleCloseSideBar}>
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button type='button' onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 mr-3 block lg:hidden'>
                <MdOutlineCancel color={currentColor} />
              </button>
            </TooltipComponent>
          </div>

          <div className='mt-10'>
            {
              links.map(item => (
                <div key={item.title}>
                  <p className='text-gray-400 m-3 mt-4 uppercase'>
                    {item.title}
                  </p>
                  {
                    item.links.map(link => (
                      <NavLink 
                        to={`/${link.name}`} 
                        key={link.name} 
                        onClick={handleCloseSideBar} 
                        className={({ isActive }) => isActive ? activeLink : normalLink }
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : ''
                        })}
                      >
                        {link.icon}
                        <span className='capitalize'>
                          {link.name}
                        </span>
                      </NavLink>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </Fragment>
      }
    </div>
  )
}

export default Sidebar;