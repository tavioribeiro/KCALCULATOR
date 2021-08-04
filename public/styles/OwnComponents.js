import { Button, Input } from "@chakra-ui/react"


function Botao(props)
{
  return(
    <Button background="green" borderRadius="25" colorScheme="teal" size="sm" 
        _hover={{
          background: "white",
          color: "black",
          
        }}
        _active={{
          background: "white",
          color: "black",
          border: "2px solid black"
        }}
        _focus={{
          background: "white",
          color: "black",
          border: "2px solid black"
        }}
    >
        {props.texto}
    </Button>
  );
}

function Botao2(props)
{
  return(
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
  );
}



export { Botao, Botao2 };