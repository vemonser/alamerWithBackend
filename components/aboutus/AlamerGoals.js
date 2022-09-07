import { Box, Heading, Container, keyframes } from "@chakra-ui/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import AlamerGoalImg from "../../public/images/about/alamerGoals.png";
import logo from "../../public/images/about/logoColoredCenterWithText.svg";

import { motion } from "framer-motion";

export default function AlamerGoals({ currentDir }) {
  const underlineRight = currentDir === "rtl" ? "0%" : "";
  const underlineLeft = currentDir === "ltr" ? "0%" : "";

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

  const { t } = useTranslation("aboutus");
  return (
    <>
      <Box
        pos={"relative"}
        w="100%"
        // height={["30vw", "35vw", "48vw"]}
        top="0"
        right="0"
        mx={"auto"}
      >
        <Box maxW={"800px"} mx="auto" dir={currentDir}>
          <Heading
            as={motion.h2}
            initial="hidden"
            fontSize={["md", "lg", "2xl", "3xl"]}
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
            top={[0,8]}
            fontFamily={"bukrabold"}
            mx={4}
            pos={"relative"}
            color="#fff"
            zIndex="10"
            _after={{
              position: "absolute",
              width: ["20%", "10%"],
              height: "7px",
              content: `""`,
              backgroundColor: "#fa6800",
              borderRadius: "20px",
              right: underlineRight,
              left: underlineLeft,
              bottom: "-25px",
            }}
          >
            {t("AlamerGoals")}
          </Heading>
        </Box>
        <Box
          w={"100%"}
          pos="relative"
          display={"block"}
          right="0"
          top={-30}
          // h={["40vh", "60vh", "80vh", "100vh"]}
          
        >
          <Image
            src={AlamerGoalImg}
            alt="our goals image"
            layout="responsive"
            objectFit="contain"
          />
        </Box>
        <Box
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={showText}
          pos={"absolute"}
          w="20%"
          height={"20%"}
          bottom={["20%", " 20%", "20%", "15%"]}
          right={["39%"]}
          whileHover={{ opacity: [1, 0, 1], transition: " all 500ms ease  " }}
        >
          <Image src={logo} alt="logo image" layout="responsive" />
        </Box>
      </Box>
    </>
  );
}
