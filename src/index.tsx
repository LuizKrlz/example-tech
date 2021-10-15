import "@fontsource/assistant";
import "@fontsource/nunito-sans";

import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme";
import { SidebarProvider } from "./contexts/SidebarContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <ColorModeScript />
        <App />
      </SidebarProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
