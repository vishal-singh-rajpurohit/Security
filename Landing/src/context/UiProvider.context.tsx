'use client'
import { ReactNode, useState } from 'react';
import { MenuContext, MenuContextType } from './Contexts.context';


interface UiProviderProps {
  children: ReactNode;
}

const MenuProvider = ({ children }: UiProviderProps) => {

  const [openMenu, setOpenMenu] = useState(false);
  const [status, setStatus] = useState('');

  function setStatusfunc(stat: string) {
    setStatus(stat);
  }
  function setOpenMenufunc(stat: boolean) {
    setOpenMenu(stat);
  }

  const data: MenuContextType = {
    status,
    openMenu,
    setOpenMenu: setOpenMenufunc,
    setStatus: setStatusfunc,
  }

  return (
    <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
  );
}


export default MenuProvider;