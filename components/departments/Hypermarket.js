import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import HypermarketImg from "../../public/images/departments/hypermarket.jpg";
import useTranslation from "next-translate/useTranslation";

import { motion } from "framer-motion";

export default function Hypermarket({ currentDir }) {
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

  const { t } = useTranslation("home");
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
        {t("hyperMarketTitle")}
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
        {t("hyperMarketDesc")}
      </Text>
      <Link href="/departments/19">
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
          flex={"1 1 1"}
          _hover={{
            opacity: 1,
            transition: "all 750ms ease  ",
          }}
        >
          <Image
            src={HypermarketImg}
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
            transition={"all 100ms ease"}
            _hover={{ opacity: 1, transition: "all 450ms ease " }}
            transitionDelay=".2s "
            flexDir={"column"}
          >
            <Heading
              fontFamily={"bukrabold"}
              color={"#fff"}
              fontSize={["md", "large", "2xl"]}
              align="center"
            >
              {t("hyperMarketTitle")}
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
              {t("hyperMarketDesc")}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
}
