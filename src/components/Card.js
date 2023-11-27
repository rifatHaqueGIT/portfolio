import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Card = ({ title, description, imageSrc, link, color }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack
        bg={color ? color : 'white'}
        align='left'
        sx={{ borderRadius: "5%" }}
      >
        {color ? null : <Image src={imageSrc} />}
        <Heading as='h3' size='sm' color='black' padding='2' mb='-3'>
          {title}
        </Heading>
        <Text color={color ? 'black' : 'grey'} padding='2' mb='-1' align='start'>
          {description}
        </Text>
        {link ? <a href={link} target="_blank">
          <Text color='black' padding='2' as='b' >
            See More{' '}
            <FontAwesomeIcon color='black' icon={faGithub} size="1x" />
          </Text>
        </a> : null}
        <Text mt="5">{" "}</Text>

      </VStack>
    </HStack>);
};

export default Card;
