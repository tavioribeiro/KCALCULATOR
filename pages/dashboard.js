import React from "react";
import ReactDOM from "react-dom";
import Head from 'next/head'


import { ChakraProvider } from "@chakra-ui/react";
import Swibc from '../public/styles/dash';

function Dashboard()
{
  return (
    <>
        <Head>
          <title>Kcalculator - Dashboard</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="./logo.png" />
        </Head>
      
        <ChakraProvider>
            <Swibc/>
        </ChakraProvider>
    </>
  )
}




export default Dashboard;