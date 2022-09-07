import { Box, Text, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

import useTranslation from "next-translate/useTranslation";
import dataAr from "../../news.json";
import dataEn from "../../newsEn.json";

export default function Event({ currentDir }) {
  const { t } = useTranslation("events");
  const [currentLangFile, setCurrentLangFile] = useState(dataAr);


  const langFile = () => {
    setCurrentLangFile(currentDir === "rtl" ? dataAr : dataEn);
  };

  useEffect(() => {
    langFile();
  }),
    [currentDir];

  return (
    <Box
      py={20}
      style={{
        background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100%",
      }}
    >
      <SimpleGrid
        columns={[1,1,2, 2, 3]}
        spacing="5%"
        maxW={"75vw"}
        mx="auto"
        column="3"
        dir={currentDir}
      >
        {currentLangFile.data.map((news) => {
          return (
            <Flex
              pos={"relative"}
              flexDir="column"
              key={news.id}
              minH="max-content"

            //   as={motion.div}
            //   initial={{ opacity: 0, y: 50 }}
            //   whileInView={{
            //     opacity: 1,
            //     y: 0,
            //     transition: {
            //       duration: 0.75,
            //       ease: "easeInOut",
            //       delay: 0.25,
            //     },
            //   }}
            >
              <Box pt={"20px"} minH="max-content"
              >
                <Box
                  display={"block"}
                  width={"100%"}
                  borderRadius="15px"
                  overflow={"hidden"}

                >
                  <Image
                    priority
                    alt="our new image"
                    src={news.img}
                    width={"4031"}
                    height={"3024"}
                    layout={"responsive"}
                    objectFit={"cover"}
                  />
                </Box>
                <Box color={"#422639"} pos="relative">
                  <Heading
                    fontSize={"larger"}
                    py={6}
                    fontFamily="bukrabold"
                    _selection={{ color: "orange" }}
                  >
                    {news.title}
                  </Heading>
                  <Text
                    _selection={{ color: "orange" }}
                    _hover={{ color: "orange" }}
                    fontSize={"small"}
                    textAlign="justify"
                    fontFamily={"bukraregular"}
                  >
                    {news.desc}
                  </Text>
                </Box>
                <Text
                  pos={"absolute"}
                  align={"left"}
                  top={"-0px"}
                  borderRadius={"full"}
                  zIndex={"5"}
                  bgColor={"#f59329"}
                  py={3}
                  px={5}
                  left={"20px"}
                  color={"#fff"}
                  fontSize={"sm"}
                  w={"120px"}
                  lineHeight={1}
                  _selection={{ color: "#422639" }}
                >
                  {news.date}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}