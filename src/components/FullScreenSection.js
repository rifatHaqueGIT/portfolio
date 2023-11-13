import * as React from "react";
import { VStack } from "@chakra-ui/react";
import backgroundImage from "../images/Mountain.jpg"
/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundImage={boxProps.proj ? backgroundImage : null}
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      bgSize={boxProps.proj ? "cover" : null}
      bgPosition="center"
      bgRepeat={boxProps.proj ? "no-repeat" : null}
      style={boxProps.proj ? { filter: "grayscale(100%)" } : undefined}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
