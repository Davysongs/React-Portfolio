import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  const cardstyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    alignItems: 'center',
    width: '100%'
  }

  const imgstyle = {
    display: 'box',
    margine: 'auto',
    width: '100%'
  }

  const txtstyle = {
    width: '95%',
    marginBottom: '20px'
  }
  return (

    <div style={cardstyle}>
      <img src={imageSrc} style={imgstyle} />
      <div style={txtstyle}>
        <VStack alignItems='left'>
        <Heading color='black' >{title}</Heading>
        <Text color="grey" >{description}</Text>
        <Text color="black" >See more <FontAwesomeIcon icon={faArrowRight} size="1x" /> </Text>
        </VStack>
      </div>
    </div>
  );
};

export default Card;
