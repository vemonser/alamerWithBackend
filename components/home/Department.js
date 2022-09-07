import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import data from "../../departments.json";
import dataEn from "../../departmentsEn.json";
// import { motion, useInView, useAnimation } from "framer-motion";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
        flex={{ base: "1 1 1", md: "4 1 39%", xl: "4 1 39%" }}
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
        flex={{ base: "1 1 1", md: "4 1 34%", xl: "2 1 34%" }}
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

export default function Department({ currentDir }) {
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

  const [content, setContent] = useState();
  useEffect(() => {
    const getData = async () => {
      const language = currentDir === "rtl" ? "ar" : "en";
      const response = await axios.get(
        `http://futureapp-001-site21.dtempurl.com/public_html/index.php/api/Categoryies`,
        {
          headers: {
            API_PASSWORD: `aYI5202kldXcLAxanvdwkfwsklLZcgfjkLSMDKh6tk`,
            Lang: language,
          },
        }
      );
      setContent(response.data);
    };
    getData();
  }, [currentDir]);

  const underlineRight = currentDir === "rtl" ? "0%" : "";
  const underlineLeft = currentDir === "ltr" ? "0%" : "";

  const { t } = useTranslation("home");

  const rows = [];

  // {
  //   content ? (
  //     content.data.map((item) => {
  //       return (
  //         <Box>
  //           <Text
  //             py={1}
  //             fontSize={["md", "md"]}
  //             fontFamily={"bukralight"}
  //             mx={4}
  //             lineHeight={"1.6"}
  //             key={item.id}
  //             as={motion.p}
  //             initial={{ opacity: 0, y: 50 }}
  //             whileInView={{
  //               opacity: 1,
  //               y: 0,
  //               transition: { duration: 0.75, ease: "easeInOut" },
  //             }}
  //           >
  //             {item.desc}
  //           </Text>
  //         </Box>
  //       );
  //     })
  //   ) : (
  //     <LoadingScreen />
  //   );
  // }

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
          linkSrc="/departments/7"
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
          linkSrc={"/departments/11"}
        ></FlexBig>
        // </Link>
      );
    } else if (i === 2) {
      rows.push(
        // <Link href={`departments/${currentI.id}`}>
        <FlexBig
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={"/departments/8"}
        />
        // </Link>
      );
    } else if (i === 3) {
      rows.push(
        // <Link href={`departments/${currentI.id}`}>
        <FlexSmall
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={"/departments/1"}
        />
        // </Link>
      );
    } else if (i === 4) {
      rows.push(
        // <Link href={`departments/${currentI.id}`}>
        <FlexSmall
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={"/departments/9"}
        />
        // </Link>
      );
    } else if (i === 5) {
      rows.push(
        // <Link href={`departments/${currentI.id}`}>
        <FlexBig
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={"/departments/18"}
        />
        // </Link>
      );
    } else if (i === 5) {
      rows.push(
        // <Link href={`departments/${currentI.id}`}>
        <FlexBig
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={"/departments/8"}
        />
        // </Link>
      );
    } else if (i === 6) {
      rows.push(
        // <Link href={`departments/${currentI.id}`}>
        <FlexSmall
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={"/departments/5"}
        />
        // </Link>
      );
    } else if (i === 7) {
      rows.push(
        // <Link href={`departments/${currentI.id}`}>
        <FlexSmall
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={"/departments/2"}
        />
        // </Link>
      );
    } else if (i === 8) {
      rows.push(
        // <Link href={`departments/${currentI.id}`}>
        <FlexBig
          key={i}
          src={currentI.img}
          heading={currentI.name}
          text={currentI.desc}
          linkSrc={"/departments/2"}
        />
        // </Link>
      );
    }
  }

  return (
    <>
      <Box maxW={["80vw", "80vw", "85vw"]} mx={"auto"} dir={currentDir}>
        <Heading
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={showText}
          fontFamily={"bukrabold"}
          color={"#3c2133"}
          pt={14}
          pos={"relative"}
          _after={{
            position: "absolute",
            width: ["20%", "10%"],
            height: "8px",
            content: `""`,
            backgroundColor: "#fa6800",
            borderRadius: "20px",
            right: underlineRight,
            left: underlineLeft,
            bottom: "-20px",
          }}
        >
          {t("departments")}
        </Heading>
        <Text
          fontFamily={"bukralight"}
          color={"#3c2133"}
          py={10}
          as={motion.p}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={showText}
        >
          {t("departmentsDescription")}
        </Text>
      </Box>
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
      <Box
        bg="#f37f25"
        cursor={"pointer"}
        borderRadius={"full"}
        py={2}
        px={6}
        maxW="max-content"
        mx="auto"
        zIndex={"10"}
        _hover={{ bgColor: "#3c2133" }}
        transition={"all 250ms ease"}
        color="#fff"
      >
        <Link href="/departments">
          <Text fontFamily={"bukrabold"} pos="relative">
            {t("btnMore")}
          </Text>
        </Link>
      </Box>
    </>
  );
}

//    { base: "1 1", md: "6 1 64%", xl: "6 1 64%" }  whileHover={{ flex: , transition: ".8 ease" }}
//    { base: "1 1", md: "4 1 60%", xl: "4 1 59%" }  whileHover={{ flex: , transition: ".8 ease" }}
