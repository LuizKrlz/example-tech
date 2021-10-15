import React from "react";
import { VStack, Divider, Image, Spacer, Text } from "@chakra-ui/react";
import SantanderLogo from "./santander.svg";

const SideFooter = () => {
  return (
    <VStack alignItems="flex-start" w="full" px={4}>
      <Divider h={1} bg="white" opacity="0.2" borderRadius="sm" />
      <Spacer />
      <Text color="gray.50" fontSize="md">
        Sair
      </Text>
      <Text color="gray.50" fontSize="md">
        Ajuda
      </Text>
      <Spacer />
      <Image src={SantanderLogo} />
      <Text color="gray.100" fontSize="xs">
        Termos e condições de uso
      </Text>
      <Text color="gray.100" fontSize="xs">
        Versão
      </Text>
    </VStack>
  );
};

export default SideFooter;
