import React from "react";
import { VStack } from "@chakra-ui/react";
import { RiDashboardFill } from "react-icons/ri";
import { MdSchool, MdAccessTime, MdPeople } from "react-icons/md";
import SideLink from "./SideLink";

const SideNav = () => {
  return (
    <VStack w="full" alignItems="flex-start" mt={10} spacing={6}>
      <SideLink icon={RiDashboardFill} title="Painéis" />
      <SideLink active icon={MdSchool} title="Conteúdos" />
      <SideLink icon={MdAccessTime} title="Histórico" />
      <SideLink icon={MdPeople} title="Pessoas" />
    </VStack>
  );
};

export default SideNav;
