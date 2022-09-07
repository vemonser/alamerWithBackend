import { Box, Container, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import data from "../locales/ar/home.json";

const animationKeyframes = keyframes`
  0% { transform: scale(2) rotate(0) }
   100% { transform: scale(2) rotate(360deg)  }
`;

const animation = `${animationKeyframes} 1s ease-in-out infinite`;

export default function LoadingScreen() {
  return (
    <Container h="100vh" pos="absolute" left="30%" w="100vw" display="flex" alignItems={"center"} justifyContent="center">
      <Box mx="auto" >
        <Box
          as={motion.div}
          animation={animation}
          padding="2"
          width="12"
          pos={"relative"}
          height="12"
          display="flex"
        >
          <Image priority src={data.navbarImg} alt="logo " layout="fill" />
        </Box>
      </Box>
    </Container>
  );
}
