import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Card from "./Card";

const AboutMe = () => {

    return (
        <FullScreenSection
            // backgroundColor="#FFEBCD"
            isDarkBackground={false}
            p={8}
            alignItems="flex-start"
            spacing={8}
            proj={true}
            color='red'
        >
            <Heading as="h1" id="aboutme-section">
                About Me
            </Heading>
            <VStack>

            </VStack>
        </FullScreenSection>
    );
}

export default AboutMe;