import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";
 
import partener from "../../ourPartners.json";

import { motion } from "framer-motion";

export default function Partners({ currentDir }) {
  const underlineRight = currentDir === "rtl" ? "0%" : "";
  const underlineLeft = currentDir === "ltr" ? "0%" : "";
  const { t } = useTranslation("home");

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


  
  return (
    <Flex
      maxW={["80vw", "80vw", "85vw"]}
      pt={"4%"}
      pb="8%"
      dir={currentDir}
      mx="auto"
      align={["start", "center", "center"]}
      justifyContent={"space-between"}
      flexDir={["column", "row", "row"]}
    >
      <Heading
        as={motion.h2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={showText}
        fontFamily={"bukrabold"}
        w={["100%", "max-content", "max-content"]}
        pos={"relative"}
        color={" #3c2133"}
        _after={{
          position: "absolute",
          width: "40%",
          height: "8px",
          content: `""`,
          backgroundColor: "#fa6800",
          borderRadius: "20px",
          right: underlineRight,
          left: underlineLeft,
          bottom: "-20px",
        }}
      >
        {t("ourPartners")}
      </Heading>
      <Flex
        w={["100%", "100%", "60%"]}
        h={"max-content"}
        py={[20, "0px", "0", "0"]}
        align={"center"}
      >
        <Flex
          w={"100%"}
          h={"max-content"}
          justify={currentDir  === "rtl"? "left": "right" }
          flexDir={["column", "row", "row"]}
          alignItems="center"
          gap={"50px"}
        >
          {partener.data.map((logo) => {
            return (
              <Box
                key={logo.id}
                w={["35vw", "20vw", "13vw"]}
                gap={10}
                as={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={showText}
              >
                <Box
                  display={"block"}
                  top={0}
                  as={motion.div}
                  opacity="0.5"
                  filter="grayscale(100%)"
                  transition="all 500ms ease"
                  cursor={"pointer"}
                  _hover={{ filter: "grayscale(0%)", opacity: "1" }}
                >
                  <a target="_blank" rel="noopener noreferrer" href={logo.link}>
                    <Image
                      priority
                      alt="partners image"
                      src={logo.img}
                      width={300}
                      height={160}
                      layout="responsive"
                    />
                  </a>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
