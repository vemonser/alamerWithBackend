 import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import data from "../../locales/ar/home.json";
import dataEn from "../../locales/en/home.json";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MallInNumbers({currentDir}) {
  const showText = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeInOut" },
    },
  };

  const [currentLangFile, setCurrentLangFile] = useState(data);

  const langFile = () => {
    setCurrentLangFile(currentDir === "rtl" ? data : dataEn);
  };

  useEffect(() => {
    langFile();
  }),
    [currentDir];

 
  return (
    <>
      <Box backgroundColor={"#F6F4F5"} my={6} py={10}>
        <Flex
          flexDirection={["column", "coulmn", "row"]}
          gap={"10vw"}
          mx={"auto"}
          maxW={"900px"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"#3c2133"}
          dir={currentLangFile === data ? "ltr" : "rtl"}
        >
          {currentLangFile.MallInNumbers.map((icon) => {
            return (
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                fontFamily={"bukrabold"}
                key={icon.icon}
                as={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={showText}
              >
                <Image
                  priority
                  src={icon.icon}
                  alt="alamer mall icon"
                  width={"50px"}
                  height={"50px"}
                />
                <Heading
                  fontFamily={"bukrabold"}
                  fontSize={"3xl"}
                  w={"max-content"}
                >
                  {icon.iconNumber}
                </Heading>
                <Text w={"max-content"}>{icon.iconDescription}</Text>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}
