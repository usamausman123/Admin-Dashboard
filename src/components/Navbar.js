import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' onClick={customFunc} style={{'color': color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
        <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'></span>
        {icon}
      </button>
    </TooltipComponent>
  )
}

const Navbar = () => {
  const { setActiveMenu, isClicked, initialState, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize); // in React, whenever we use ".addEventListener", then we also need to remove this listner as we are doing in the below return function
    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  useEffect(() => {
    if(screenSize <= 1023) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }

  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton title='Menu' customFunc={() => {setActiveMenu(prevActiveMenu => !prevActiveMenu); setIsClicked(initialState);}} color={currentColor} icon={<AiOutlineMenu />} />
        <div className='flex'>
          <NavButton title='Cart' customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
          <NavButton title='Chat' dotColor='#03C9D7' customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
          <NavButton title='Notifications' dotColor='#03C9D7' customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
          <TooltipComponent content='Profile' position='BottomCenter'>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
              <img src={avatar} alt='Avatar' className='rounded-full w-8 h-8' />
              <p>
                <span className='text-gray-400 text-14'>Hi, </span>{' '}
                <span className='text-gray-400 text-14 font-bold ml-1'>Michael</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14' />
            </div>
          </TooltipComponent>
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}
        </div>
    </div>
  )
}

export default Navbar;