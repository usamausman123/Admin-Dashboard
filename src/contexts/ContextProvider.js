import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    // setColor, setMode, currentMode, currentColor, setThemeSettings
    const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode')|| '#03C9D7');
    const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode')|| 'Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }
    return (
        <StateContext.Provider value={{ 
            activeMenu: activeMenu, 
            setActiveMenu: setActiveMenu, 
            isClicked: isClicked, 
            initialState: initialState,
            setIsClicked: setIsClicked,
            screenSize: screenSize, 
            setScreenSize: setScreenSize,
            handleClick: handleClick,
            currentColor: currentColor,
            setColor: setColor,
            currentMode: currentMode,
            setMode: setMode,
            themeSettings: themeSettings, 
            setThemeSettings: setThemeSettings
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);