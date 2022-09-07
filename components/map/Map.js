import Image from "next/image";

import mapFloor0 from "../../public/images/maps/Al Amer Mall - SITE MAP2-01.jpg";
import mapFloor1 from "../../public/images/maps/Al Amer Mall - SITE MAP2-02.jpg";
import mapFloor2 from "../../public/images/maps/Al Amer Mall - SITE MAP2-03.jpg";
import mapFloor3 from "../../public/images/maps/Al Amer Mall - SITE MAP2-04.jpg";
import mapFloor4 from "../../public/images/maps/Al Amer Mall - SITE MAP2-05.jpg";
import mapFloor5 from "../../public/images/maps/Al Amer Mall - SITE MAP2-06.jpg";

import useTranslation from "next-translate/useTranslation";
import {
  Box,
  Button,
  Flex,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";

import { useState } from "react";
import data from "../../locales/ar/home.json";

export default function Map({ currentDir }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentMap, setCurrentMap] = useState(mapFloor2);
  const { t } = useTranslation("home");

  return (
    <>
      <Box w={"90vw"} mx="auto" p={8} pos="relative">
        <Flex
          flexDir={"column"}
          borderRadius="30px"
          overflow={"hidden"}
          zIndex="20"
          boxShadow="lg"
        >
          <Box
            w={"60%"}
            display="block"
            h="88vh"
            cursor={"pointer"}
            transition={"all 500ms ease"}
            // _hover={{
            //   transform: "scale(1.5)   translateY(130px) translateX(50px)",
            // }}
          >
            <Image
              src={currentMap}
              alt="current floor"
              layout="responsive"
              priority
              onClick={onOpen}
            />
          </Box>

          <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />
            <ModalContent maxW="90vw" overflowX={"hidden"}>
              <Box>
                <Flex
                  display={"block"}
                  position={"relative"}
                  justifyContent="center"
                  alignItems="center"
                  right="50%"
                  mx="auto"
                  w="90vw"
                  transform={"translateX(50%)"}
                >
                  <Image
                    src={currentMap}
                    alt="current floor"
                    layout="responsive"
                    priority
                  />
                </Flex>
              </Box>
            </ModalContent>
          </Modal>

          {/* ----------------------------------------------------------------- */}
        </Flex>
        <Box pos="absolute" right={"10%"} top={10}>
          <Heading as={"h3"} dir="rtl" color="#fa6800" pb={2} fontSize="lg">
            {data.mapkeyTitle}
          </Heading>
          <Flex
            flexDir={"column"}
            bg="#fa6800"
            p={"5px 5px 20px 5px"}
            borderRadius="5px"
            fontSize="smaller"
          >
            {data.colorsKey.map((item) => {
              return (
                <Flex
                  align={"center"}
                  justify={"center"}
                  dir={currentDir}
                  py="0px"
                  key={item.id}
                >
                  <Box
                    as="p"
                    borderRadius="full"
                    w="50px"
                    pr={2}
                    color="#fff"
                    py="0px"
                    fontFamily={"bukrabold"}
                  >
                    {item.floor}
                  </Box>
                  <Box as="p" bg={"#fff"} px={6} py="0px">
                    {item.storeName}
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Box>
        <Box pos="absolute" right={"10%"} bottom={10}>
          <Heading as={"h3"} dir="rtl" color="#fa6800" pb={2} fontSize="lg">
            {data.colorskeyTitle}
          </Heading>
          <Flex
            flexDir={"column"}
            bg="#fa6800"
            p={"5px 5px 20px 5px"}
            borderRadius="5px"
            fontSize="smaller"
          >
            {data.mapKeyDesc.map((item) => {
              return (
                <Flex align={"center"} dir={currentDir} key={item.id}>
                  <Box
                    as="p"
                    bg={item.color}
                    w={4}
                    h={4}
                    borderRadius="full"
                    mx={4}
                  ></Box>
                  <Box as="p" bg={"#fff"} py={1} px={6}>
                    {item.colorDesc}
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Box>

      <Flex w={"80vw"} mx="auto" gap={"10px"} pb={40} dir={currentDir}>
        <Button
          flex="1"
          boxShadow="lg"
          bg={"#fff"}
          onClick={() => setCurrentMap(mapFloor0)}
        >
          {t("f0")}
        </Button>
        <Button
          flex="1"
          boxShadow="lg"
          bg={"#fff"}
          onClick={() => setCurrentMap(mapFloor1)}
        >
          {t("f1")}
        </Button>
        <Button
          flex="1"
          boxShadow="lg"
          bg={"#fff"}
          onClick={() => setCurrentMap(mapFloor2)}
        >
          {t("f2")}
        </Button>
        <Button
          flex="1"
          boxShadow="lg"
          bg={"#fff"}
          onClick={() => setCurrentMap(mapFloor3)}
        >
          {t("f3")}
        </Button>
        <Button
          flex="1"
          boxShadow="lg"
          bg={"#fff"}
          onClick={() => setCurrentMap(mapFloor4)}
        >
          {t("f4")}
        </Button>
        <Button
          flex="1"
          boxShadow="lg"
          bg={"#fff"}
          onClick={() => setCurrentMap(mapFloor5)}
        >
          {t("f5")}
        </Button>
      </Flex>
    </>
  );
}
