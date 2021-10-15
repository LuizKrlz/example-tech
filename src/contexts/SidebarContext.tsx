import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import React, { createContext, ReactNode, useContext } from "react";

type SidebarContextData = UseDisclosureReturn;

const SidebarContext = createContext({} as SidebarContextData);

interface SidebarProviderProps {
  children: ReactNode;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const disclosure = useDisclosure();

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
