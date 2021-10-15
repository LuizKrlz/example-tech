import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import LogoMini from "./logo-mini.svg";
import LogoExtense from "./logo.svg";

const Logo = () => {
  return (
    <Flex alignItems="center">
      <Image src={LogoMini} mr="4" />
      <Image src={LogoExtense} />
    </Flex>
  );
};

export default Logo;
