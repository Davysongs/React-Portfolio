import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Godson David";
const bio1 = "A Backend developer & Database Engineer";
const bio2 = "specialised in Python  and PostgreSQL.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  > 
    <VStack  align="center" spacing="40px">
      <div>
        <VStack  align="center">
          <Avatar size="" src="../images/up1.jpeg" />
          <Heading size='md'>{greeting}</Heading>
        </VStack>
      </div>
      <div>
        <VStack  align="center">
          <Heading >{bio1}</Heading>
          <Heading>{bio2}</Heading>
        </VStack>
      </div>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
