import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, screenSize } =  useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      {/* <BrowserRouter> */}
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='Top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: currentColor, borderRadius: '50%' }} onClick={() => {setThemeSettings(true)}}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? 
            ( 
              screenSize > 1023 ?
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div> :
              <div className="bg-half-transparent w-full fixed nav-item top-0 left-0 right-0 bottom-0 sidebar-backdrop">
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                  <Sidebar />
                </div>
              </div> 
            ) :
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          }
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'lg:ml-72 w-full-72' : 'flex-2'} `}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

            <div>
              { themeSettings && <ThemeSettings /> }
              <Routes> 
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />
                
                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />
                
                {/* Apps */}
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />

              </Routes>
            </div>
            <Footer />
          </div>

        </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
