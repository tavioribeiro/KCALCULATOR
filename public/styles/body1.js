import React from "react";
import ReactDOM from "react-dom";

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
  
  } from "@chakra-ui/react"

  

const BodyCard = () => {

    
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
            {/*<Botao2 onClick={()=>console.log("sim")} texto="Começar"></Botao2>*/}
          </Box>
        </Box>
      </Box>
    </Flex>
    </>
  );
};

const Botao2 = ({ onClick, texto, color}) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Button
            //onClick={onOpen}
            //onClick={()=>console.log("sim")}
            onClick={onOpen}
            background="#7928CA" borderRadius="25"  size="sm" color= {color}
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

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent
                background = "tranparent"
                border="25px"
                >
                  <Card></Card>
                </ModalContent>
            </Modal>    
    </>
  );
}




const Botao3 = ({end, color, texto}) => {
  return(
      <>
      <Link href={end} style={{ textDecoration: 'none' }}>
        <Button
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
      </Link>
      
  </>
);
}



const Card = () => {
{
  return (
    <Flex
      minH={'50vh'}
      maxH={'80vh'}
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
              <FormLabel>Email</FormLabel>
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
              
              <Botao3
                color="#b0ff29" 
                texto="Entrar"
                end="/dashboard"
              ></Botao3>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
}



export default BodyCard;