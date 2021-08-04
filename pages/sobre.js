import React from "react";
import ReactDOM from "react-dom";

import Head from 'next/head'


import { ChakraProvider } from "@chakra-ui/react";



import Header from "../public/styles/header";
import SmallWithSocial from "../public/styles/footer";
import ArticleList from "../public/styles/card1";
import {Botao} from '../public/styles/OwnComponents'

import Link from 'next/link';
function Sobre()
{
  return (
    <>
      <Head>
        <title>Kcalculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./logo.png" />
      </Head>
      

      <div class="container">

        <div class="header">
          <ChakraProvider>
                <Header />
          </ChakraProvider>
        </div>

        <div class="main">
            <ChakraProvider>
                <ArticleList/>
            </ChakraProvider>
        </div>

        <div class="footer">
            <ChakraProvider>
                <SmallWithSocial/>
            </ChakraProvider>
        </div>
      </div>
    </>
  )
}




export default Sobre;