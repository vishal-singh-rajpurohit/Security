'use client'
import { createContext } from 'react';

export interface MenuContextType {
  isSidebarOpen?: boolean;
  openMenu?: boolean;
  status?: string;
  setOpenMenu?:(val: boolean) =>void;
  setStatus?: (val: string)=> void;
}

// 👇 Create context with a default value (optional if using null)
export const MenuContext = createContext<MenuContextType | null>(null);

