import React from "react";

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
    Lorem,
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
          </Box>
        </Box>
      </Box>
    </Flex>
    </>
  );
};

function Botao2(props)
{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Button
            onClick={onOpen}
            background="#7928CA" borderRadius="25"  size="sm" color= "black" 
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
            {props.texto}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>Titulo</ModalHeader>
                        <ModalCloseButton />
                            <ModalBody>
                                oiii
                            </ModalBody>
            
                            <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Fechar
                            </Button>
                        
                        <Button variant="ghost">Login</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        
        </>
  );
}




export default BodyCard;