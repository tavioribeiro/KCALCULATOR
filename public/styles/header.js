import React from "react";
import {
  Box,
  Stack,
  Flex,
  Button,
  useDisclosure,
  Text,
  //Link
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Link from 'next/link'

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={3}
      bg="black"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link href="/">
          <h1 className="title">KCALCULATOR</h1>
        </Link>
        
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex"}}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
        //flex="1"
        paddingRight="5%"
        mt={{ base: 4, md: 0 }}
      >

        <Text>
          <BotaoLink texto="Início" end="/"></BotaoLink>
        </Text>

        <Text>
          <BotaoLink texto="Sobre" end="/sobre"></BotaoLink>
        </Text>
        
        <Text>
          <BotaoLink texto="Contribua" end="/"></BotaoLink>
        </Text>
        

{/*
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Botao2 texto="Começar"></Botao2>
        </Link>

        <Link href="/sobre" style={{ textDecoration: 'none' }}>
          <Botao2 texto="Sobre"></Botao2>
        </Link>
          
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Botao2 texto="Comtribua"></Botao2>
        </Link>
*/}
        
      </Stack>
{/*}
      <Box
       alignItems="center"

        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Botao2 texto="Início"></Botao2>
      </Box>
*/}
    </Flex>
  );
};

function BotaoLink(props) //   link:/
{
  return(
    <Link href={props.end} >
      <Button
          background="transparent" borderRadius="25"  size="sm"
          _hover={{
            background: "white",
            color: "black",
          }}
          _active={{
            background: "#b0ff29",
            color: "black",
            border: "0px solid"
          }}
          _focus={{
            background: "#b0ff29",
            color: "black",
            border: "0px solid"
          }}
          _focusWithin={{
            background: "#b0ff29",
            color: "black",
            border: "0px solid"
          }}
        >
          {props.texto}
      </Button>
    </Link> 
  );
}

export default Header;
