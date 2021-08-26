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
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    HStack,
    Radio,
    Center,
    Divider,
    Square,
    Text,
  } from "@chakra-ui/react";

  import { Line } from 'react-chartjs-2';

  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react"
  import { AiFillCloseCircle } from "react-icons/ai";
  import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
  import { AiFillGift } from "react-icons/ai";
  import { BsGearFill } from "react-icons/bs";
  import { FiMenu, FiSearch } from "react-icons/fi";
  import { HiCode, HiCollection } from "react-icons/hi";
  import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
  import { BsFillPersonLinesFill } from "react-icons/bs";
  import React from "react";



  import { useEffect } from 'react';
  import { useState } from 'react';


  import axios from 'axios';
import { ChatIcon } from "@chakra-ui/icons";

  var server = "https://nodetest15.herokuapp.com";
  //var server = "http://localhost:3001";

  var podePegarDados = 0;

  var respostaPerfil;
  var respostaDados;

  var condicional = 0; 

  
  export default function Swibc()
  {
    console.log("versão alpha: 0.1 ");
    var [nomeUsuario, setnomeUsuario] = useState("");
    var [mensagem1, setnomeMensagem1] = useState("");
    var [idUsuario, setIdUsuario] = useState("");
    var [pagina, setPagina] = useState(0);


    var [imc, setImc] = useState(0);

    /*

    //----------------------- Perfil -----------------------
    var nome_perfil_g;
    var massa_perfil_g;
    var altura_perfil_g;
    var idade_perfil_g;
    var abdomem_perfil_g;
    var pescoco_perfil_g;
    var quadril_perfil_g;
    var sexo_perfil_g; // M = 1 / F = 2

    var dropButton_atividade_perfil_g = 'one';
    var dropButton_objetivo_perfil_g = 'one';

    var imc_perfil_g = 0;
    var tmb_perfil_g = 0;
    var lbm_perfil_g = 0;
    var gc_perfil_g = 0;
    var tdee_perfil_g = 0;
      var tdee_perfil_mensage_g = 'Não informado ainda';
    var pmm_perfil_g = 0;
      var pmm_perfil_10_g = 0;
      var pmm_perfil_15_g = 0;
    
    var min_pi_perfil_g = 0;
    var max_pi_perfil_g = 0;
    

    //imc chart-----------------------------
      var min_imc_chart_perfil_g = 0;
      var max_imc_chart_perfil_g = 0;
      var dif_imc_char_perfil_g = 0;
    //

    //gc chart-----------------------------
      var min_gc_chart_perfil_g = 0;
      var max_gc_chart_perfil_g = 0;
      var dif_gc_char_perfil_g = 0;
    //

    //macros -----------------------------
      var resultado_macro_LP_perfil_g = 0;
      var resultado_macro_LF_perfil_g = 0;
      var resultado_macro_LC_perfil_g = 0;

      var resultado_macro_MP_perfil_g = 0;
      var resultado_macro_MF_perfil_g = 0;
      var resultado_macro_MC_perfil_g = 0;

      var resultado_macro_HP_perfil_g = 0;
      var resultado_macro_HF_perfil_g = 0;
      var resultado_macro_HC_perfil_g = 0;

      var resultado_goal_perfil_g = "Sem medição ainda";
    //
*/
    var tmb_perfil_mensage_g;
    var imc_perfil_mensage_g;



    var [label, setLabel] = useState(new Array());
    var [data, setData] = useState(new Array());
    
    
    useEffect(() =>
    {
      setnomeUsuario(sessionStorage.getItem('nome'));

      setIdUsuario(sessionStorage.getItem('idUsuario'));

      getData();


      if(sessionStorage.getItem('origem') === "2") //Entrar
      {
        setPagina(1);//Inicio direto 
      }

    }, []);



    function postuserdata() //Posta os dados gerais (altura, peso...) 
    {
      if(sessionStorage.getItem('origem') === "1") //Posta
      {
        condicional = 0;
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
              setnomeMensagem1("Não foi possível atualizar os dados!");
            }
            else
            {
              peso = document.getElementById('peso').value;
              altura = document.getElementById('altura').value;

              respostaPerfil = response.data;
              console.log(respostaPerfil);
              podePegarDados = 0;
              sessionStorage.setItem('origem', 2);
              setnomeMensagem1("Atualizado com sucesso!");
              postData();
              setPagina(1);
              console.log("dddd22");
            } 
          }
          else
          {
            setnomeMensagem1("Não foi possível atualizar os dados!");
          }
        })
      }
      if(sessionStorage.getItem('origem') === "2") //Atualiza
      {
        condicional = 0;
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
            peso = document.getElementById('peso').value;
            altura = document.getElementById('altura').value;

            if(response.data === 1)
            {
              setnomeMensagem1("Não foi possível atualizar os dados!");
            }
            else
            {
              respostaPerfil = response.data;
              console.log(respostaPerfil);
              podePegarDados = 0;
              setnomeMensagem1("Atualizado com sucesso!");
              setPagina(1);
              postData();
              console.log("dddd11");
            } 
          }
          else
          {
            setnomeMensagem1("Não foi possível atualizar os dados!");
          }
        })
      }
    }



    function getUserData() //Pega os dados gerais (altura, peso...) 
    {
      axios.post
      (
        server + "/api/getuserdata", 
        {
          a: sessionStorage.getItem('idUsuario'),
        }
      ).then((response)=>{
        if(response.data != 0)
        {
          if(response.data === 1)
          {
            setnomeMensagem1("Não foi possível atualizar os dados!");
          }
          else
          {
            respostaPerfil = response.data;
          } 
        }
        else
        {
          setnomeMensagem1("Não foi possível atualizar os dados!");
        }
      })
    }




    function postData() //ENVIA os dados FORTES (IMC, TDEE...) 
    {
      console.log("dddd00");
      axios.post
      (
        server + "/api/postvalues", 
        {
          a: sessionStorage.getItem('idUsuario'),
          //b: Math.floor(Math.random() * 40),
          b: calcularImc(),
          c: new Date()
        }
      ).then((response)=>{

        getData();

        if(response.data != 0)
        {
          console.log("tr: " + response.data);
          if(response.data === 1)
          {
            //setnomeMensagem1("Não foi possível atualizar os dados!");
          }
          else
          {
            console.log("tr");
          } 
        }
        else
        {
          //setnomeMensagem1("Não foi possível atualizar os dados!");
        }
      })
    }


 

    async function getData() //Pega os dados FORTES (IMC, TDEE...) 
    {

      console.log("dddd33");
      axios.post
      (
        server + "/api/getvalues", 
        {
          a: sessionStorage.getItem('idUsuario'),
        },
      ).then((response)=>{
        if(response.data != 0)
        {
          console.log(response.data);

          if(response.data === 1)
          {
            setnomeMensagem1("Não foi possível atualizar os dados!");
          }
          else
          {
            respostaDados = response.data; 
            generateCharts();
          } 
        }
        else
        {
          setnomeMensagem1("Não foi possível atualizar os dados!");
        }
      })
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
          <NavItem onClick={()=>setPagina(1)} icon={MdHome}>Início</NavItem>
          <NavItem onClick={()=>setPagina(0)} icon={BsFillPersonLinesFill}>Perfil</NavItem>
          

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

        <RetornoCondicional></RetornoCondicional>
              
            
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


    function calcularImc()
    {
      var result = (peso / (altura * altura)) * 10000;
      console.log(result);
      return result;
    }


    function gcPerfil()
    { 
      if(sexo_perfil_g == 1)
      {
        gc_perfil_g = (495 / ( 1.0324 - 0.19077 * (log(abdomem_perfil_g - pescoco_perfil_g) / log(10)) + 0.15456 * (log(altura_perfil_g) / log(10))) - 450);
      }

      if(sexo_perfil_g == 2)
      { 
        gc_perfil_g = (495 / ( 1.29579 - 0.35004 * (log(abdomem_perfil_g + quadril_perfil_g - pescoco_perfil_g) / log(10)) + 0.22100 * (log(altura_perfil_g) / log(10))) - 450);
      }
    }

    function generateCharts()
    {
      var tempLabel = [];
      var tempData = [];

      var currentdate = new Date("Wed Aug 11 2021 19:56:35 GMT-0300 (Horário Padrão de Brasília)"); 
    //console.log(currentdate);
    //console.log(currentdate.getSeconds());

      for(var i = 0; i<respostaDados.length;i++)
      {
        var currentdate = new Date(respostaDados[i].data); 
        tempLabel.push(currentdate.getHours() + ":" + currentdate.getMinutes());
        tempData.push(respostaDados[i].imc);

        if(i === respostaDados.length - 1)
        {
          setImc(respostaDados[i].imc);
        }
      }

      setLabel(tempLabel);
      setData(tempData);
    }


  

    function RetornoCondicional()
    {
    
      
      if(pagina === 0)
      {
        return[
          <Perfil></Perfil>
        ]
      }
      if(pagina === 1)
      {
        getUserData();
        //getData();
          



        const dataChart = {
          labels: label,
          datasets: [
            {
              label: 'Índice',
              data: data,
              fill: false,
              backgroundColor: 'rgb(255, 255, 255)',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              color: 'rgba(255, 255, 255, 0.5)',
              
            },
            
          ],
          
        };

        const optionsChart = {
          plugins:
          {
            legend:
            {
              display: false,
              labels:
              {
                color: 'white',
              }
            },

            title:
            {
              fullSize:true,
              display: true,
              text: 'IMC',
            
              color: 'white',
            },

            subtitle:
            {
              display: true,
              text: 'Seu histórico de resultados',
            },
          },

          scales: {
            y: {  // not 'yAxes: [{' anymore (not an array anymore)
              ticks: {
                color: "white", // not 'fontColor:' anymore
                // fontSize: 18,
                
              
                beginAtZero: true
              }
            },
            X: {  // not 'yAxes: [{' anymore (not an array anymore)
              ticks: {
                color: "white", // not 'fontColor:' anymore
                // fontSize: 18,
                
               
                beginAtZero: true
              }
            },
          },

      
        };
        

        
        /*
        const optionsChart = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            
          },
        };
        */
       

        return [
          <Box min-height="100vh" backgroundColor="#7928CA">
            <div className="container4">
              <div className="box14">
                <Box>
                  
                  <Stack align={'center'}>
                    <Box marginTop="25px" marginBottom="25px">
                      <Stack align={'center'}>
                          <Heading textAlign="center" color="white" fontSize={'4xl'}>Estatísticas</Heading>
                            <Text fontSize="16px" color={'white'} textAlign="center">
                              Esses dados foram calculados a partir dos valores da aba Perfil
                            </Text>
                        </Stack>
                    </Box>
                    
                    <Box
                      marginTop="205px"
                      width="95%"
                        rounded="25px"
                        bg={useColorModeValue('white', 'gray.700')}
                        rounded="25px"
                        border="2px solid #b0ff29"
                        color="white"
                        p={8}>

                          <Flex justify="center">
                            <Table size="sm" color="black">
                              <Thead>
                                <Tr>
                                  <Th color="#7928CA" textAlign="center">Índices</Th>
                                  <Th color="#7928CA" textAlign="center">Valores</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                <Tr>
                                  <Td textAlign="center">IMC</Td>
                                  <Td textAlign="center">{imc}</Td>
                                </Tr>
                                
                              </Tbody>
                              
                            </Table>
                          </Flex>
                      </Box>
                    </Stack>
                </Box>        
              </div>



              <div className="box24">
                <div className="parent3">
                  <div className="div1-3">
                    <Flex justify="center">
                      <Box width="80%" borderRadius="25px" border="2px solid #b0ff29" backgroundColor="black" margin="20px" padding="5px">
                        <Line data={dataChart} options={optionsChart} />
                      </Box>
                    </Flex>
                    
                  </div>
                  <div className="div2-3">
                  </div>
                  <div className="div3-3"></div>
                  <div className="div4-3"></div>
                </div>
               </div>
              </div>
          </Box>
        ]
      }
    }

    


    function Perfil()
    {
      return [
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

                            <Center>
                              <Text fontSize="15px" color="#b0ff29">{mensagem1}</Text>
                            </Center>
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
      ]
    }
  }


  