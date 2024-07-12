import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className ="switching">
    <div className ="switching-wrap element flex flex-wrap items-center">
        <div className ="checkbox-wrap ">
          <input
            style={{ background: theme === 'light' ? '#e1e1e1' : '#333', color: theme === 'light' ? '#333' : '#e1e1e1' }}
            type="checkbox" 
            className ="toggle-switch"
            onChange={toggleTheme}
            checked={theme === 'dark'}
            />
        </div>
    </div>
  </div>
  );
};

export default ThemedComponent;