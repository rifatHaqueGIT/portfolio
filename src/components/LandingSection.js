import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import pic from "../images/picO'me.jpg";

const greeting = "Hey, I'm Rifat";
const bio1 = "A Software Engineer/Developer";
const bio2 = "Specialised in React";
const url = pic;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#3D0C02"
    proj={false}

  >
    <VStack>
      <Avatar size='xl' src={url} />
      <Heading as='h1' size='sm'> {greeting}</Heading>
      <Heading size='lg'>{bio1}</Heading>
      <Heading size='lg' >{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
