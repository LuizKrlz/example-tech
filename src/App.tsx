import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { SidebarProvider } from "./contexts/SidebarContext";
import Layout from "./components/Layout";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <Layout />
      </SidebarProvider>
    </ChakraProvider>
  );
};
