import {
  IconButton,
  Spacer,
  Box,
  VStack,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { FaCreativeCommonsNd } from "react-icons/fa";
import { useSidebar } from "./contexts/SidebarContext";
import React from "react";
import Sidebar from "./components/Sidebar";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const App = () => {
  const { onOpen } = useSidebar();
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Box textAlign="center" fontSize="xl">
      <HStack minH="100vh" alignItems="flex-start">
        <Sidebar />
        <VStack alignItems="flex-start">
          <HStack>
            {isMobileVersion && (
              <IconButton
                size="md"
                ml={4}
                fontSize="lg"
                icon={<FaCreativeCommonsNd />}
                aria-label="Open menu"
                onClick={onOpen}
              />
            )}
            <Spacer />
            <ColorModeSwitcher />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default App;
