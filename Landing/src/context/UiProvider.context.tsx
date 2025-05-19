'use client'
import { ReactNode, useState } from 'react';
import { MenuContext,  MenuContextType} from './Contexts.context';


interface UiProviderProps {
    children: ReactNode;
  }
  
  
  
  const MenuProvider = ({ children }: UiProviderProps) => {
    
    const [openMenu, setOpenMenu] = useState(false);
    const [status, setStatus] = useState('');
  
    const data: MenuContextType = {
        openMenu,
        setOpenMenu: setOpenMenu,
        status,
        setStatus,
    }
  
    return (
        <MenuContext.Provider value= {data}>{ children }</MenuContext.Provider>
    );
  }
  

export default MenuProvider;