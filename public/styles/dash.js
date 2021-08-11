import {
    Avatar,
    Box,
    Button,
    Collapse,
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import { AiFillCloseCircle } from "react-icons/ai";
  import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
  import { AiFillGift } from "react-icons/ai";
  import { BsGearFill } from "react-icons/bs";
  import { FiMenu, FiSearch } from "react-icons/fi";
  import { HiCode, HiCollection } from "react-icons/hi";
  import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
  import React from "react";


  import { useEffect } from 'react';
  import { useState } from 'react';
  
  
  export default function Swibc()
  {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();


    var [nome, setNome] = useState("");

    useEffect(() =>
    {
        setNome(sessionStorage.getItem('login'));
    }, []);
  
    const NavItem = (props) => {
      const { icon, children, ...rest } = props;
      return (
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color={useColorModeValue("white", "white")}
          _hover={{
            bg: useColorModeValue("#7928CA", "white"),
            color: useColorModeValue("white", "white"),
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Icon
              mr="2"
              boxSize="4"
              _groupHover={{
                color: useColorModeValue("white", "gray.300"),
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      );
    };
  
    const SidebarContent = (props) => (
      <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg={useColorModeValue("black", "gray.800")}
        borderColor={useColorModeValue("inherit", "gray.700")}
        borderRightWidth="1px"
        w="60"
        {...props}
      >
        <Flex px="4" py="5" align="center">
          <h1 className="titleFooter">KCALCULATOR</h1>
        </Flex>
        <Flex px="4" py="5" align="center">
          <h6 color="white">Bem vindo {nome}</h6>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="white"
          aria-label="Main Navigation"
        >
          <NavItem icon={MdHome}>Home</NavItem>
          <NavItem icon={FaRss}>Articles</NavItem>
          <NavItem icon={HiCollection}>Collections</NavItem>
          <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
          <NavItem icon={HiCode} onClick={integrations.onToggle}>
            Integrations
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={integrations.isOpen && "rotate(90deg)"}
            />
          </NavItem>
          <Collapse in={integrations.isOpen}>
            <NavItem pl="12" py="2">
              Shopify
            </NavItem>
            <NavItem pl="12" py="2">
              Slack
            </NavItem>
            <NavItem pl="12" py="2">
              Zapier
            </NavItem>
          </Collapse>
          <NavItem icon={AiFillGift}>Changelog</NavItem>
          <NavItem icon={BsGearFill}>Settings</NavItem>
        </Flex>
      </Box>
    );

    return (
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"

        >
          {/*<DrawerOverlay />*/}
          
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>

          
        </Drawer>
        
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
          
          </Flex>
  
          <Box as="main" p="4">
            {/* Add content here, remove div below  */}
            
          </Box>
        </Box>
      </Box>
    );
  }