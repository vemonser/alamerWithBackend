import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import imgFullWidth from "../../public/images/about/Asset 2.png";
import imgCircles from "../../public/images/about/Untitled-3-04.png";
import imgCirclesEn from "../../public/images/about/Untitled-3-04.png";
import AboutLogo from "../../public/images/about/Untitled-3-05.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import data from "../../locales/ar/aboutus.json";
import dataEn from "../../locales/en/aboutus.json";

export default function Founder({ currentDir }) {
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
  const [imageTimeLine, setImageTimeLine] = useState(imgCircles);
  const underlineRight = currentDir === "rtl" ? "0%" : "";
  const underlineLeft = currentDir === "ltr" ? "0%" : "";

  const langFile = () => {
    setCurrentLangFile(currentDir === "rtl" ? data : dataEn);
    setImageTimeLine(currentDir === "rtl" ? imgCircles : imgCirclesEn);
  };

  useEffect(() => {
    langFile();
  }),
    [currentDir];
  const { t } = useTranslation("aboutus");

  return (
    <>
      <Box
        pos={"relative"}
        w={"100%"}
        mb={"-7"}
        h={"max-content"}
        display={"block"}
        _after={{
          position: "absolute",
          width: "50%",
          height: "15px",
          content: `""`,
          backgroundColor: "#fa6800",
          borderRadius: "20px 0 0 20px",
          right: underlineRight,
          left: underlineLeft,
          bottom: "-15px",
        }}
      >
        <Image
          priority
          src={imgFullWidth}
          alt="alamer mall image"
          objectFit="contain"
          layout="responsive"
        />
      </Box>
      <Box overflow={"hidden"} w={"100%"} dir={currentDir}>
        <Heading
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={showText}
          maxW={"80vw"}
          mx={"auto"}
          fontFamily={"bukrabold"}
          pos={"relative"}
          top={"10vw"}
          color="#3c2133"
          zIndex="10"
          h={"max-content"}
          display={"block"}
          _after={{
            position: "absolute",
            width: ["20%", "8%"],
            height: "7px",
            content: `""`,
            backgroundColor: "#fa6800",
            borderRadius: "20px",
            right: underlineRight,
            left: underlineLeft,
            bottom: "-25px",
          }}
        >
          {t("ourjourney")}
        </Heading>
        <Image
          priority
          src={imageTimeLine}
          alt="our journy image"
          layout="responsive"
        />
      </Box>
      <Box
        mt={4}
        py={4}
        style={{
          background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
          height: "max-content",
        }}
      >
        <Box
          dir={currentDir}
          maxW={"80vw"}
          mx={"auto"}
          fontFamily={"bukrabold"}
          color="#3c2133"
        >
          <Heading
            as={motion.h2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
            maxW={"70%"}
            mx="auto"
            pos={"relative"}
            top={"2vw"}
            zIndex="10"
            _after={{
              position: "absolute",
              width: ["20%", "8%"],
              height: "7px",
              content: `""`,
              backgroundColor: "#fa6800",
              borderRadius: "20px",
              right: underlineRight,
              left: underlineLeft,
              bottom: "-25px",
            }}
          >
            {t("ourServices")}
          </Heading>
          <UnorderedList pt={"6vw"}>
            <ListItem
              py={3}
              maxW={"70%"}
              mx="auto"
              as={motion.li}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={showText}
            >
              {t("ourServicesCustomersTitle")}
            </ListItem>
            <ListItem
              maxW={"70%"}
              mx="auto"
              as={motion.li}
              listStyleType="none"
              fontFamily={"bukralight"}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={showText}
            >
              {t("ourServicesCustomersDesc")}
            </ListItem>
            <>
              {currentLangFile.ourServicesTitles.map((title) => {
                return (
                  <ListItem
                    key={title.id}
                    py={3}
                    lineHeight={"1.6"}
                    maxW={"70%"}
                    mx="auto"
                    as={motion.li}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={showText}
                  >
                    {title.title}
                  </ListItem>
                );
              })}
            </>
          </UnorderedList>
        </Box>
      </Box>

      <Box w={"100%"} dir={currentDir} display="block">
        <Heading
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={showText}
          maxW={"80vw"}
          mx={"auto"}
          fontFamily={"bukrabold"}
          pos={"relative"}
          top={"10vw"}
          color="#3c2133"
          zIndex="10"
          _after={{
            position: "absolute",
            width: ["20%", "8%"],
            height: "7px",
            content: `""`,
            backgroundColor: "#fa6800",
            borderRadius: "20px",
            right: underlineRight,
            left: underlineLeft,
            bottom: "-25px",
          }}
        >
          {t("logoTitle")}
        </Heading>
        <Image
          priority
          src={AboutLogo}
          objectFit="contain"
          alt="about identity image"
          layout="responsive"
        />
      </Box>
    </>
  );
}
