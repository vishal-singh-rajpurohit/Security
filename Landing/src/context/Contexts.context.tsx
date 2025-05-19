'use client'
import { createContext, ReactNode, useState } from 'react';

export interface MenuContextType {
  isSidebarOpen?: boolean;
  openMenu?: boolean;
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  status?: string;
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
}

// 👇 Create context with a default value (optional if using null)
export const MenuContext = createContext<MenuContextType | null>(null);

