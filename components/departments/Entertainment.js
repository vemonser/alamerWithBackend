import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import HypermarketImg from "../../public/images/departments/hypermarket.jpg";
import useTranslation from "next-translate/useTranslation";
import data from "./Entertainment.json";
import dataEn from "./EntertainmentEn.json";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

export default function Entertainment({ currentDir }) {
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

  const underlineRight = currentDir === "rtl" ? "0%" : "";
  const underlineLeft = currentDir === "ltr" ? "0%" : "";

  const [currentLangFile, setCurrentLangFile] = useState(data);

  const langFile = () => {
    setCurrentLangFile(currentDir === "rtl" ? data : dataEn);
  };

  useEffect(() => {
    langFile();
  }),
    [currentDir];

  const { t } = useTranslation("home");
  const rows = [];
  for (let i = 0; i < currentLangFile.data.length; i++) {
    let currentI = currentLangFile.data[i];
    if (i === 0) {
      rows.push(
        // <Link href={`departments/${currentI.id}`} key={i}>
        <FlexSmall
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={`/departments/${currentI.id}`}
        />
        // </Link>
      );
    } else if (i === 1) {
      rows.push(
        // <Link href={`departments/${currentI.id}`} key={i}>
        <FlexBig
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={`/departments/${currentI.id}`}
        ></FlexBig>
        // </Link>
      );
    }
  }

  return (
    <Box maxW={"95vw"} mx="auto" dir={currentDir} pb={6}>
      <Heading
        fontFamily={"bukrabold"}
        py={10}
        maxW="85vw"
        mx={"auto"}
        color="#3c2133"
        as={motion.h2}
        pos={"relative"}
        _after={{
          position: "absolute",
          width: "100px",
          height: "5px",
          content: `""`,
          backgroundColor: "#fa6800",
          borderRadius: "20px",
          right: underlineRight,
          left: underlineLeft,
          bottom: "20px",
        }}
      >
        {t("entertainmentTitle")}
      </Heading>
      <Text
        fontFamily={"bukralight"}
        color={"#3c2133"}
        pb={8}
        mx="auto"
        maxW="85vw"
        as={motion.p}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={showText}
      >
        {t("entertainmentDesc")}
      </Text>

      <Flex
        flexDir={["column", "row", "row"]}
        pb={10}
        gap={"15px"}
        w={"96vw"}
        h={["max-content", "max-content", "max-content"]}
        mx={"auto"}
        overflow={"hidden"}
        dir={currentDir}
        flexWrap={"wrap"}
      >
        {rows}
      </Flex>
    </Box>
  );
}

export function FlexBig({ linkSrc, src, heading, text }) {
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
    <Link href={linkSrc}>
      <Flex
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={showText}
        h={["200px", "250px", "250px"]}
        w={{ base: "100%", md: "auto", xl: "auto" }}
        pos={"relative"}
        transition="all 750ms ease"
        cursor="pointer"
        flex={{ md: "4 1 39%", xl: "4 1 39%" }}
        _hover={{
          flex: ["1 1 1", "6 1 63%", "6 1 63%", "6 1 63%"],
          opacity: 1,
          transition: "all 750ms ease 150ms",
        }}
      >
        <Image
          src={src}
          alt="department image"
          layout={"fill"}
          objectFit={"cover"}
          priority
        />
        <Flex
          as={motion.div}
          pos={"absolute"}
          zIndex={5}
          justify={"center"}
          align={"center"}
          opacity={{ base: "1", md: 0, xl: 0 }}
          bottom={0}
          left={0}
          w={"100%"}
          h={{ base: "25%", md: "100%", xl: "100%" }}
          bgColor={{ base: "#fa6800dd", md: "#f8b932af", xl: "#f8b932af" }}
          transition={"all 100ms ease 100ms"}
          _hover={{ opacity: 1, transition: "all 450ms ease  300ms" }}
          transitionDelay=".2s "
          flexDir={"column"}
        >
          <Heading
            fontFamily={"bukrabold"}
            color={"#fff"}
            fontSize={["md", "large", "2xl"]}
            align="center"
          >
            {heading}
          </Heading>
          <Text
            fontFamily={"bukraregular"}
            display={{ base: "none", md: "block", xl: "block" }}
            pt={5}
            lineHeight="1.6"
            color={"#fff"}
            w={"70%"}
            fontSize={["sm", "sm", "md"]}
            align="center"
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
export function FlexSmall({ linkSrc, src, heading, text }) {
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
    <Link href={linkSrc}>
      <Flex
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={showText}
        h={["200px", "250px", "250px"]}
        w={{ base: "100%", md: "auto", xl: "auto" }}
        pos={"relative"}
        transition="all 750ms ease"
        flex={{ md: "4 1 34%", xl: "2 1 34%" }}
        cursor="pointer"
        _hover={{
          flex: ["1 1 1", "4 1 58%", "4 1 58%", "4 1 58%"],
          opacity: 1,
          transition: "all 750ms ease 150ms",
        }}
      >
        <Image
          src={src}
          layout={"fill"}
          alt="department image"
          objectFit={"cover"}
          priority
        />
        <Flex
          as={motion.div}
          pos={"absolute"}
          zIndex={5}
          justify={"center"}
          align={"center"}
          opacity={{ base: "1", md: 0, xl: 0 }}
          bottom={0}
          left={0}
          w={"100%"}
          h={{ base: "25%", md: "100%", xl: "100%" }}
          bgColor={{ base: "#fa6800dd", md: "#f8b932af", xl: "#f8b932af" }}
          transition={"all 100ms ease 200ms"}
          _hover={{ opacity: 1, transition: "all 450ms ease-in-out 350ms" }}
          flexDir={"column"}
        >
          <Heading
            fontFamily={"bukrabold"}
            color={"#fff"}
            fontSize={["md", "large", "2xl"]}
            align="center"
          >
            {heading}
          </Heading>
          <Text
            fontFamily={"bukraregular"}
            display={{ base: "none", md: "block", xl: "block" }}
            pt={5}
            lineHeight="1.6"
            color={"#fff"}
            fontSize={["sm", "sm", "md"]}
            w={"70%"}
            align="center"
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
