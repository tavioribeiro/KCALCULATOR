import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  

  import Link from 'next/link'

  var a = "";
  var b = "";

  const SocialButton = ({
    children,
    label,
    href,
  }, {
    children: ReactNode,
    label: a,
    href: b,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithSocial() {
    return (
      <Box
        bg={useColorModeValue('#0a0a0a', 'gray.900')}
        color={useColorModeValue('white', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={3}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Link href="/">
            <h1 className="titleFooter">KCALCULATOR</h1>
          </Link>
            
            <Text className="typoG1" textAlign="center">
              Copyright© 2021, KCALCULATOR. Todos os direitos reservados.
            </Text>
          
            <Stack direction={'row'} spacing={2}>
                <SocialButton label={'Twitter'} href={'#'}>
                    <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                    <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                    <FaInstagram />
                </SocialButton>
            </Stack>
        </Container>
      </Box>
    );
  }