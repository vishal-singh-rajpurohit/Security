'use client'
import { createContext } from 'react';

export interface MenuContextType {
  isSidebarOpen?: boolean;
  openMenu?: boolean;
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  status?: string;
  setStatusfunc?:() =>void;
  setOpenMenufunc?: ()=> void;
}

// 👇 Create context with a default value (optional if using null)
export const MenuContext = createContext<MenuContextType | null>(null);

