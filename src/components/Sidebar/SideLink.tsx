import React, { FunctionComponent } from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";

const activeState = {
  bg: "gray.base",
  opacity: "0.7",
};

type TSideLink = {
  active?: boolean;
  icon: any;
  title: string;
};

const SideLink: FunctionComponent<TSideLink> = ({ active, icon, title }) => {
  return (
    <HStack
      alignItems="center"
      h={9}
      w="full"
      px={6}
      borderRadius="3xl"
      _hover={activeState}
      {...(active && activeState)}
    >
      <Icon as={icon} color="gray.100" w={6} h={6} />
      <Text color="gray.100" fontSize="lg">
        {title}
      </Text>
    </HStack>
  );
};

export default SideLink;
