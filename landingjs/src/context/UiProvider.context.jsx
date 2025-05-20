'use client'

import { useState } from 'react';
import { MenuContext } from './Contexts.context';

const MenuProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [status, setStatus] = useState('');



  const data = {
    openMenu,
    setOpenMenu,
    setStatus,
    status
  };

  return (
    <MenuContext.Provider value={data}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
