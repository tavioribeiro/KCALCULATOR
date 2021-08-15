import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';

import axios from 'axios';

var server = "http://localhost:3001";
//var server = "https://nodetest15.herokuapp.com";

import {
    chakra, 
    Box, 
    Flex, 
    useColorModeValue, 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,

  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,

  Heading,
  Text,
  Center,
  
  } from "@chakra-ui/react"

//----------------------------------------------------------------------------------------------------------------

/*
//FUNCIONANDOOOO===========================================================
async function search()  // POSSÍVEL TRATAMENTO
{

  var a = document.getElementById('email').value;
  
  var b = document.getElementById('password').value;
  

  axios.post
  (
    server + "/api/check", 
    {
      a: a,
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
//FUNCIONANDOOOO===========================================================
*/


//-----------------------------------------------------------------------------------------------------------------
  
var opcao = 0;

const BodyCard = () =>
{
  opcao = 0;
  return (
      <>
    <Flex
      bg={useColorModeValue("black", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
        
      <Box
        bg={useColorModeValue("#0a0a0a", "gray.800")}
        
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded="25px"
        border="2px solid white"
      >
        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w="100%">
          <chakra.h2

            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("white", "white")}
            fontWeight="bold"
          >
            Hora de se exercitar
            
          </chakra.h2>
          <chakra.p mt={4} color={useColorModeValue("white", "gray.400")}>
            Com o Kcalculator é possível realizar vários cálculos relacionados à área da saúde e fitness. TMB, TDEE, porcentagem de gordura...
          </chakra.p>

          <chakra.p mt={4} color={useColorModeValue("white", "gray.400")}>
            Acompanhe toda sua evolução com um método simples e exclusivo atravéz de uma conta.
            Não perca tempo, inicie sua conta de forma totalmente gratuita. 
          </chakra.p>

            <Box mt={8}>
              
              <Botao2 texto="Começar"></Botao2>
              <Botao3 texto="Entrar"></Botao3>

              {/*<Botao2 onClick={()=>console.log("sim")} texto="Começar"></Botao2>*/}
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

/*
function BotoesConta()
{
  console.log(sessionStorage.getItem('idUsuario'));
  if(sessionStorage.getItem('idUsuario')===null)
  {
    return[
      <>
        <Botao2 texto="Começar"></Botao2>
        <Botao3 texto="Entrar"></Botao3>
      </>
    ]
  }
  else{
    return[
      <>
        <Botao3 texto="Entrar"></Botao3>
      </>
    ]
  }
}
*/

const Botao2 = ({texto, color}) => 
{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Button
            onClick={onOpen}
            background="#7928CA" marginRight="5px" borderRadius="25"  size="sm" color= {color}
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
        >
            {texto}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent
                background = "tranparent"
                border="25px"
                >
                <CardCreate/>
                </ModalContent>
            </Modal>    
    </>
  );
}



const Botao3 = ({ texto, color}) => 
{
  function checkIfIsLogged()
  {
    console.log(sessionStorage.getItem('idUsuario'));
    
    if(sessionStorage.getItem('idUsuario') === null)
    {
      sessionStorage.clear();
      onOpen2();
    }
    else
    {
      window.open("/dashboard");
    }
  }
    const { isOpen:isOpen2, onOpen:onOpen2, onClose:onClose2 } = useDisclosure()
    return(
        <>
        <Button
            onClick={checkIfIsLogged}

            background="#7928CA" marginLeft="5px" borderRadius="25"  size="sm" color= {color}
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
        >
            {texto}
            </Button>

            <Modal isOpen={isOpen2} onClose={onClose2}>
                <ModalOverlay />

                <ModalContent
                background = "tranparent"
                border="25px"
                >
                <CardLogin/>
                </ModalContent>
            </Modal>    
    </>
  );
}






const Botao4 = ({onClick, color, texto}) => {
  return(
      <>
        <Button
          onClick = {onClick}
            background="#7928CA" borderRadius="25"  size="sm" color= {color} border="2px solid #b0ff29" width="100%"
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






function CardLogin ()
{
  var [mensagem, setMensagem] = useState("");

/*
  async function search()  // POSSÍVEL TRATAMENTO
  {
    var a = document.getElementById('email').value;
    var b = document.getElementById('password').value;
    
    axios.post
    (
      server + "/api/check", 
      {
        a: a,
        b: b,
      }
    ).then((response)=>{
      if(response.data != "iderteminado")
      {
        console.log(response.data);
        sessionStorage.setItem('login', response.data);            
        window.open("/dashboard");
      }
      else
      {
        setMensagem("Este usuário já está cadastrado!");
        console.log("Nao");
      }
    }).catch(function (error) {

      //console.error(error);
      setMensagem("Este usuário já está cadastrado!");
    })
  }
*/
/*
var currentdate = new Date(); 

var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
*/
var currentdate = new Date("Wed Aug 11 2021 19:56:35 GMT-0300 (Horário Padrão de Brasília)"); 
//console.log(currentdate);
//console.log(currentdate.getSeconds());

async function search()  // POSSÍVEL TRATAMENTO
{
  setMensagem("");

  var a = document.getElementById('email').value;
  var b = document.getElementById('password').value;
  
  axios.post
  (
    server + "/api/check", 
    {
      a: a,
      b: b,
    }
  ).then((response)=>{
    if(response.data != 0)
    {
      if(response.data === 1)
      {
        setMensagem("Senha incoreta!");
      }
      else
      {
        sessionStorage.clear();
        sessionStorage.setItem('origem', 2);
        sessionStorage.setItem('idUsuario', response.data.id);
        sessionStorage.setItem('nome', response.data.nome);             
        window.open("/dashboard");
        setMensagem("");
      } 
    }
    else
    {
      //console.log(response.data);
      setMensagem("Usuário não cadastrado!");
    }
    //console.log(response.data);
  })
}


  return (
    <Flex
      minH={'50vh'}
      //maxH={'80vh'}
      margin="5px"
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('radial-gradient(circle, rgba(255,0,128,1) 0%, rgba(121,40,202,1) 60%)', 'gray.800')}
      rounded="25px"
      //border="2px solid white"
    >
        
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color="white" fontSize={'4xl'}>Fazer Login</Heading>
          <Text fontSize={'lg'} color={'white'}>
            para aproveitar todos os <Link fontWeight="bold" color={'#b0ff29'}>recursos</Link> ✌️
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
            <FormControl id="email">
              <FormLabel>Login</FormLabel>
              <Input 
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
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input 
                rounded="25px" 
                border="0px" 
                background="white" 
                color="black"
                border="2px solid white" 
                type="password" 
                _focus={{
                  background: "white",
                  color: "black",
                  border:"2px solid #b0ff29" 
                }}
              />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox
                iconColor="#b0ff29"
                border="0px"
                colorScheme="white">
                  Lembrar
                </Checkbox>
                <Link color={'#b0ff29'}>Esqueceu a senha?</Link>
              </Stack>
              <Center>
                <Text fontSize="15px" color="#b0ff29">{mensagem}</Text>
              </Center>
              
              
              <Botao4
                color="#b0ff29" 
                texto="Entrar"
                //end="/dashboard"
                onClick={() => search()}
              ></Botao4>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}




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



const CardCreate = () => {

  var [mensagem, setMensagem] = useState("");

  async function create()  // POSSÍVEL TRATAMENTO
  {
    setMensagem("");

    var a = document.getElementById('email').value;
    var b = document.getElementById('password').value;
    var c = document.getElementById('nome').value;
    
    axios.post
    (
      server + "/api/create", 
      {
        a: a,
        b: b,
        c: c
      }
    ).then((response)=>{
      if(response.data != 0)
      {
        if(response.data === 1)
        {
          setMensagem("Senha incoreta!");
        }
        else
        {
          sessionStorage.clear();
          //console.log(response.data);
          sessionStorage.setItem('origem', 1);
          sessionStorage.setItem('idUsuario', response.data.b);  
          sessionStorage.setItem('nome', response.data.a);             
          window.open("/dashboard");
          setMensagem("");
        } 
      }
      else
      {
        //console.log(response.data);
        setMensagem("Usuário já cadastrado!");
      }
      console.log(response.data);
    })
  }


  
    return (
      <Flex
        minH={'50vh'}
        //maxH={'80vh'}
        margin="5px"
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('radial-gradient(circle, rgba(255,0,128,1) 0%, rgba(121,40,202,1) 60%)', 'gray.800')}
        rounded="25px"
        //border="2px solid white"
      >
          
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading color="white" fontSize={'4xl'}>Cadastrar</Heading>
            <Text fontSize={'lg'} color={'white'}>
              para aproveitar todos os <Link fontWeight="bold" color={'#b0ff29'}>recursos</Link> ✌️
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
              
            <FormControl id="nome">
                <FormLabel>Nome</FormLabel>
                <Input 
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

              <FormControl id="email">
                <FormLabel>Login</FormLabel>
                <Input 
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
                
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input 
                  rounded="25px" 
                  border="0px" 
                  background="white" 
                  color="black"
                  border="2px solid white" 
                  type="password" 
                  _focus={{
                    background: "white",
                    color: "black",
                    border:"2px solid #b0ff29" 
                  }}
                />
              </FormControl>
              <Stack spacing={10}>
                
                <Center>
                  <Text fontSize="15px" color="#b0ff29">{mensagem}</Text>
                </Center>
                
                
                <Botao5
                  color="#b0ff29" 
                  texto="Cadastrar"
                  //end="/dashboard"
                  onClick={() => create()}
                ></Botao5>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  
export default BodyCard;