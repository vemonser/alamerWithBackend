import Footerlogo from "../../public/images/home/Footerlogo";
import Instagram from "../../public/images/home/Instagram";
import Twitter from "../../public/images/home/Twitter";
import Snapchat from "../../public/images/home/Snapchat";
import Facebook from "../../public/images/home/Facebook";
import TiktokImg from "../../public/images/home/tiktok.svg";
import data from "../../locales/ar/home.json";
import dataEn from "../../locales/en/home.json";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {useState , useEffect} from "react"
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ currentDir }) {
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

  const { t } = useTranslation("home");
  return (
    <Box
      dir={currentDir}
      bgColor={"#422639"}
      minH="max-content"
      pt="70px"
      justifyContent={"space-between"}
      pb={10}
    >
      <Flex
        maxW={"82vw"}
        mx="auto"
        justify={"space-between"}
        pos={"relative"}
        flexWrap={{ base: "wrap" }}
        h={"max-content"}
        gap={["3%"]}
      >
        <Flex
          // justify={"space-between"}
          display={{ base: "flex", md: "flex", lg: "flex", xl: "Flex" }}
          flex="1"
        >
          <VStack
            as={motion.footer}
            color={"#fff"}
            alignItems={"flex-start"}
            width={"max-content"}
          >
            {currentLangFile.navbarLinksFooterColOne.map((item, i) => (
              <Link key={i} href={item.route}>
                <Text
                  cursor={"pointer"}
                  fontSize="md"
                  lineHeight={1.9}
                  as={motion.p}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={showText}
                  // pl={currentDir === "rtl" ? "80px" : "0"}
                  // pr={currentDir === "ltr" ? "50px" : "0"}
                  _hover={{
                    transition: "all 450ms ease-in-out",
                    fontFamily: "bukrabold",
                  }}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </VStack>
        </Flex>
        <Flex
          flex="1"
          display={{ base: "flex", md: "flex", lg: "flex", xl: "Flex" }}
        >
          <VStack
            as={motion.footer}
            color={"#fff"}
            flexWrap="wrap"
            alignItems={"flex-start"}
            width={"max-content"}
          >
            {currentLangFile.navbarLinksFooterColTwo.map((item, i) => (
              <Link key={i} href={item.route}>
                <Text
                  as={motion.p}
                   initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={showText}
                  lineHeight={1.2}
                  fontSize="md"
                  cursor={"pointer"}
                  bgColor={"transparent"}
                  pos={"relative"}
                  // pl={currentDir === "rtl" ? "20px" : "0"}
                  // pr={currentDir === "ltr" ? "30px" : "0"}
                  _hover={{
                    transition: "all 450ms ease-in-out",
                    fontFamily: "bukrabold",
                  }}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </VStack>
        </Flex>
        <Flex
          flex="1"
          display={{ base: "flex", md: "flex", lg: "flex", xl: "Flex" }}
        >
          <VStack
            as={motion.footer}
            color={"#fff"}
            alignItems={"flex-start"}
            flexWrap="wrap"
          >
            {currentLangFile.navbarLinksFooterColThree.map((item, i) => (
              <Link key={i} href={item.route}>
                <Text
                  as={motion.p}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={showText}
                  fontSize="md"
                  bgColor={"transparent"}
                  pos={"relative"}
                  cursor="pointer"
                  _hover={{
                    transition: "all 450ms ease-in-out",
                    fontFamily: "bukrabold",
                  }}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </VStack>
        </Flex>
        <Flex
          h={"max-content"}
          mx="auto"
          align={"center"}
          flexDir={"column"}
          as={motion.div}
          pt={["30px", "30px", "10px", "10px"]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={showText}
        >
          <Flex w={"150px"}>
            <Footerlogo />
          </Flex>
          <Flex pt={10}>
            <Box
              width={"40px"}
              as={motion.div}
              cursor={"pointer"}
              filter="grayscale(100%)"
              opacity={0.5}
              _hover={{ filter: "grayscale(0%)", opacity: "1" }}
            >
              <Image
                src={TiktokImg}
                alt="tiktok logo"
                width={"218"}
                height={"218"}
                layout={"responsive"}
              />
            </Box>
            <Box
              w="40px"
              h="40px"
              border="1px solid #cecece"
              borderRadius={"lg"}
              as={motion.div}
              opacity="0.5"
              filter="grayscale(100%)"
              cursor={"pointer"}
              transition="all 500ms ease"
              _hover={{ filter: "grayscale(0%)", opacity: "1" }}
            >
              <Facebook width="40px" height="40px" />
            </Box>
            <Box
              w="40px"
              h="40px"
              border="1px solid #cecece"
              borderRadius={"lg"}
              as={motion.div}
              opacity="0.5"
              cursor={"pointer"}
              filter="grayscale(100%)"
              transition="all 500ms ease"
              _hover={{ filter: "grayscale(0%)", opacity: "1" }}
            >
              <Instagram width="40px" height="40px" />
            </Box>
            <Box
              w="40px"
              h="40px"
              border="1px solid #cecece"
              as={motion.div}
              cursor={"pointer"}
              filter="grayscale(100%)"
              opacity={0.5}
              transition="all 500ms ease"
              _hover={{ filter: "grayscale(0%)", opacity: "1" }}
              borderRadius={"lg"}
            >
              <Twitter width="40px" height="40px" />
            </Box>
            <Flex
              w="40px"
              h="40px"
              as={motion.div}
              cursor={"pointer"}
              filter="grayscale(100%)"
              opacity={0.5}
              transition="all 500ms ease"
              _hover={{ filter: "grayscale(0%)", opacity: "1" }}
              border="1px solid #cecece"
              borderRadius={"lg"}
              align={"center"}
              justify="center"
            >
              <Snapchat width={"20px"} height={"20px"} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
