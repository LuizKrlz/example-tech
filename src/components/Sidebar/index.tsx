import React from "react";

import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
  DrawerFooter,
  VStack,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { useSidebar } from "../../contexts/SidebarContext";
import Logo from "../Logo";
import SideNav from "./SideNav";
import SideFooter from "./SideFooter";

const Sidebar = () => {
  const { isOpen, onClose } = useSidebar();
  const { colorMode } = useColorMode();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (!isWideVersion) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay bg="transparent">
          <DrawerContent
            bgGradient="linear(to-r, gray.500, gray.300)"
            borderTopEndRadius="2xl"
            borderBottomEndRadius="2xl"
          >
            <DrawerCloseButton mt="6" />
            <DrawerHeader pl="8">
              <Logo />
            </DrawerHeader>

            <DrawerBody>
              <SideNav />
            </DrawerBody>
            <DrawerFooter justifyContent="flex-start">
              <SideFooter />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box
      maxW="xs"
      bgGradient="linear(to-r, gray.500, gray.300)"
      h="100vh"
      position="relative"
      pr={4}
    >
      <Box
        bg={colorMode === "light" ? "background" : "gray.500"}
        w={4}
        h="100%"
        position="absolute"
        right="0"
        borderTopLeftRadius={10}
        borderBottomLeftRadius={10}
      ></Box>
      <VStack h="100%" py={4}>
        <Box px={4}>
          <Logo />
        </Box>
        <SideNav />
        <Spacer />
        <SideFooter />
      </VStack>
    </Box>
  );
};

export default Sidebar;
