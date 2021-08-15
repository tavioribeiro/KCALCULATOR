import {
    Box,
    Collapse,
    Drawer,
    Heading,
    DrawerContent,
    Flex,
    Icon,
    IconButton,
    useColorModeValue,
    useDisclosure,
    Stack,
    Link,
    FormControl,
    FormLabel,
    Select,
    VisuallyHidden,
    Input,
    Button,
    HStack,
    Radio,
    Center,
    Square,
    Text,
  } from "@chakra-ui/react";
  import { AiFillCloseCircle } from "react-icons/ai";
  import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
  import { AiFillGift } from "react-icons/ai";
  import { BsGearFill } from "react-icons/bs";
  import { FiMenu, FiSearch } from "react-icons/fi";
  import { HiCode, HiCollection } from "react-icons/hi";
  import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
  import React from "react";

  import LineChart from './chart';

  import { useEffect } from 'react';
  import { useState } from 'react';

  import SmallWithSocial from "./footer";
  import axios from 'axios';
  var server = "http://localhost:3001";
  
  export default function Swibc()
  {
    var [nomeUsuario, setnomeUsuario] = useState("");
    var origem = "";
    
    useEffect(() =>
    {
      setnomeUsuario(sessionStorage.getItem('nome'));
      origem = sessionStorage.getItem('origem');
      
      console.log(origem);
      console.log(sessionStorage.getItem('nome'));
      console.log(sessionStorage.getItem('idUsuario'));
      
    }, []);

    async function postuserdata() 
    {
      origem = sessionStorage.getItem('origem').toString();
      console.log("CLICK");
      if(origem === "1")
      {
        console.log("AAAAA");
        axios.post
        (
          server + "/api/postuserdata", 
          {
            a: sessionStorage.getItem('idUsuario'),
            b: sessionStorage.getItem('nome'),
            c: document.getElementById('idade').value,
            d: document.getElementById('sexo').value,
            e: document.getElementById('peso').value,
            f: document.getElementById('altura').value,
            g: document.getElementById('abdomem').value,
            h: document.getElementById('pescoco').value,
            i: document.getElementById('quadril').value,
            j: document.getElementById('nivelatividade').value,
            k: document.getElementById('objetivo').value,
          }
        ).then((response)=>{
          if(response.data != 0)
          {
            if(response.data === 1)
            {
              console.log("erro 1");
            }
            else
            {
              origem = "2";
              sessionStorage.setItem('origem', 2);
              console.log("sucesso");
            } 
          }
          else
          {
            console.log("erro 2");
          }
          console.log(response.data);
        })
      }
      if(origem === "2")
      {
        console.log("BBBBB");
        axios.post
        (
          server + "/api/updateuserdata", 
          {
            a: sessionStorage.getItem('idUsuario'),
            b: sessionStorage.getItem('nome'),
            c: document.getElementById('idade').value,
            d: document.getElementById('sexo').value,
            e: document.getElementById('peso').value,
            f: document.getElementById('altura').value,
            g: document.getElementById('abdomem').value,
            h: document.getElementById('pescoco').value,
            i: document.getElementById('quadril').value,
            j: document.getElementById('nivelatividade').value,
            k: document.getElementById('objetivo').value,
          }
        ).then((response)=>{
          if(response.data != 0)
          {
            if(response.data === 1)
            {
              console.log("erro 1");
            }
            else
            {
              console.log("sucesso");
            } 
          }
          else
          {
            console.log("erro 2");
          }
          console.log(response.data);
        })
      }
    }

    //================================================================
    const sidebar = useDisclosure();
    const integrations = useDisclosure();


    const Botao5 = ({onClick, color, texto}) =>
    {
      return(
          <>
            <Button
              onClick = {onClick}
                background="#7928CA" borderRadius="25" marginTop="20px"  size="sm" color= {color} border="2px solid #b0ff29" width="100%"
                _hover={{
                    background: "white",
                    color: "black",
                }}
                _active={{
                    background: "#7928CA",
                    color: "white",
                    border: "0px solid"
                }}
                _focus={{
                    background: "#7928CA",
                    color: "white",
                    border: "0px solid"
                }}
                _focusWithin={{
                    background: "#7928CA",
                    color: "white",
                    border: "0px solid"
                }}
            >
              {texto}
            </Button>
          
      </>
    );
    }


    const Botao6 = ({color, texto}) =>
    {
      async function sair()
      {
        sessionStorage.clear();          
        window.open("/");
        window.close();
      }
      return(
          <>
            <Button
              onClick = {() => {sair()}}
                background="#7928CA"  borderRadius="25" marginTop="20px"  size="sm" color= {color} border="2px solid #b0ff29" width="80%"
                _hover={{
                    background: "white",
                    color: "black",
                }}
                _active={{
                    background: "#7928CA",
                    color: "white",
                    border: "0px solid"
                }}
                _focus={{
                    background: "#7928CA",
                    color: "white",
                    border: "0px solid"
                }}
                _focusWithin={{
                    background: "#7928CA",
                    color: "white",
                    border: "0px solid"
                }}
            >
              {texto}
            </Button>
          
      </>
    );
    }
    
  
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
        borderColor={useColorModeValue("#b0ff29", "gray.700")}
        borderRightWidth="0px"
        w="60"
        {...props}
      >
        <Flex px="4" py="5" align="center">
          <h1 className="titleFooter">KCALCULATOR</h1>
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

          <Center>
            <Botao6 texto="Sair"></Botao6>
          </Center>
          
        </Flex>
      </Box>
    );

    return (
      
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
        background="black"
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

          <Stack>
              <Box backgroundColor="black" height="50px">
                <Flex height="100%" direction="row">
                  <Flex align="center" height="100%" flex="1" justify="center" >
                    <Text color="white" margin="5px" className="typoG2">{nomeUsuario}</Text>
                  </Flex>

                  <Flex height="100%" justify="center" align="center">
                    <IconButton
                      margin="5px"
                      aria-label="Menu"
                      display={{ base: "inline-flex", md: "none" }}
                      onClick={sidebar.onOpen}
                      icon={<FiMenu />}
                      size="sm"
                    />
                  </Flex>
                </Flex>
              </Box>
              

{/* ----------------------------------------------------------------*/}


              <Box backgroundColor="#7928CA">
                <Flex justify="center">
                  <Flex direction="column"  width="500px">
                              <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                      <Stack align={'center'}>
                        <Heading textAlign="center" color="white" fontSize={'4xl'}>Completar perfil</Heading>
                        <Text fontSize="16px" color={'white'} textAlign="center">
                          Esses dados serão utilizados para calcular os índices
                        </Text>
                      </Stack>
                      <Box
                        rounded={'lg'}
                        bg={useColorModeValue('rgba( 0, 0, 0, 1 )', 'gray.700')}
                        boxShadow="0 0 5px black"
                        rounded="25px"
                        color="white"
                        p={8}>
                        <Stack spacing={4}>
                          
                        <FormControl id="idade">
                            <FormLabel>Idade</FormLabel>
                            <Input 
                              height="30px"
                              fontSize="16px"
                              rounded="25px" 
                              border="0px" 
                              background="white" 
                              color="black"
                              border="2px solid white" 
                              type="email" 
                              _focus={{
                                background: "white",
                                color: "black",
                                border:"2px solid #b0ff29" 
                              }}
                          />
                          </FormControl>

                          <FormControl id="sexo">
                            <FormLabel>Sexo</FormLabel>
                            <Select
                              height="30px"
                              fontSize="16px"
                              rounded="25px" 
                              border="0px" 
                              background="white" 
                              color="black"
                              border="2px solid white" 
                              type="email" 
                              _focus={{
                                background: "white",
                                color: "black",
                                border:"2px solid #b0ff29" 
                              }}
                              placeholder="Selecionar">
                              <option backgroundColor="blue" >Masculino</option>
                              <option>Feminino</option>
                            </Select>
                          </FormControl>
                          
                          <FormControl id="peso">
                            <FormLabel>Peso</FormLabel>
                            <Input 
                              height="30px"
                              fontSize="16px"
                              rounded="25px" 
                              border="0px" 
                              background="white" 
                              color="black"
                              border="2px solid white" 
                              type="email" 
                              _focus={{
                                background: "white",
                                color: "black",
                                border:"2px solid #b0ff29" 
                              }}
                          />
                          </FormControl>

                          <FormControl id="altura">
                            <FormLabel>Altura</FormLabel>
                            <Input 
                              height="30px"
                              fontSize="16px"
                              rounded="25px" 
                              border="0px" 
                              background="white" 
                              color="black"
                              border="2px solid white" 
                              type="email" 
                              _focus={{
                                background: "white",
                                color: "black",
                                border:"2px solid #b0ff29" 
                              }}
                          />
                          </FormControl>

                          <FormControl id="abdomem">
                            <FormLabel>Abdomem</FormLabel>
                            <Input 
                              height="30px"
                              fontSize="16px"
                              rounded="25px" 
                              border="0px" 
                              background="white" 
                              color="black"
                              border="2px solid white" 
                              type="email" 
                              _focus={{
                                background: "white",
                                color: "black",
                                border:"2px solid #b0ff29" 
                              }}
                          />
                          </FormControl>

                          <FormControl id="pescoco">
                            <FormLabel>Pescoço</FormLabel>
                            <Input 
                              height="30px"
                              fontSize="16px"
                              rounded="25px" 
                              border="0px" 
                              background="white" 
                              color="black"
                              border="2px solid white" 
                              type="email" 
                              _focus={{
                                background: "white",
                                color: "black",
                                border:"2px solid #b0ff29" 
                              }}
                          />
                          </FormControl>

                          <FormControl id="quadril">
                            <FormLabel>Quadril</FormLabel>
                            <Input 
                              height="30px"
                              fontSize="16px"
                              rounded="25px" 
                              border="0px" 
                              background="white" 
                              color="black"
                              border="2px solid white" 
                              type="email" 
                              _focus={{
                                background: "white",
                                color: "black",
                                border:"2px solid #b0ff29" 
                              }}
                          />
                          </FormControl>
                          
                          <FormControl id="nivelatividade">
                            <FormLabel>Nivel de Atividade</FormLabel>
                            <Select
                              height="30px"
                              fontSize="16px"
                              rounded="25px" 
                              border="0px" 
                              background="white" 
                              color="black"
                              border="2px solid white" 
                              type="email" 
                              _focus={{
                                background: "white",
                                color: "black",
                                border:"2px solid #b0ff29" 
                              }}
                              placeholder="Selecionar">
                              <option>Sedentário</option>
                              <option>Baixo</option>
                              <option>Moderado</option>
                              <option>Alto</option>
                              <option>Atleta</option>
                            </Select>
                          </FormControl>

                          <FormControl id="objetivo">
                            <FormLabel>Objetivo</FormLabel>
                            <Select
                              height="30px"
                              fontSize="16px"
                              rounded="25px" 
                              border="0px" 
                              background="white" 
                              color="black"
                              border="2px solid white" 
                              type="email" 
                              _focus={{
                                background: "white",
                                color: "black",
                                border:"2px solid #b0ff29" 
                              }}
                              placeholder="Selecionar">
                              <option>Perder peso</option>
                              <option>Manter peso</option>
                              <option>Ganhar peso</option>
                            </Select>
                          </FormControl>
                          
                          <Stack spacing={10}>

                            
                            <Botao5
                              color="#b0ff29" 
                              texto="Finalizar"
                              //end="/dashboard"
                              onClick={() => postuserdata()}
                            ></Botao5>
                          </Stack>
                        </Stack>
                      </Box>
                    </Stack>
                  </Flex>
                </Flex>
              </Box>
            
          </Stack>

          {/* 
          <div class="container3">
            <div class="header3">
              <div className="content-hearder31">
                <p className="typoG2">Bem vindo {nome}</p>
              </div>
              
              <div className="content-hearder32">
                <IconButton
                  margin="5px"
                  aria-label="Menu"
                  display={{ base: "inline-flex", md: "none" }}
                  onClick={sidebar.onOpen}
                  icon={<FiMenu />}
                  size="sm"
                />
              </div>
              
            </div>
            <div class="main3">

            </div>
            <div class="footer3">

            </div>
          </div>

          */}          
          
        </Box>
      </Box>

      
    );
  }


  