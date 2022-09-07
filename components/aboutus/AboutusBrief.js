import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "../LoadingScreen";

export default function AboutusBrief({ currentDir }) {
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

  const [content, setContent] = useState();
  useEffect(() => {
    const getData = async () => {
      const language = currentDir === "rtl" ? "ar" : "en";
      const response = await axios.get(
        `http://futureapp-001-site21.dtempurl.com/public_html/index.php/api/About_us`,
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

  return (
    <>
      <Box
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={showText}
        pos={"relative"}
        height={"max-content"}
        top="0"
        right={"0"}
        mb={10}
        style={{
          background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
          height: "max-content",
        }}
      >
        <Box
          dir={currentDir}
          color="#3c2133"
          maxW={["300px", "500px", "800px"]}
          mx="auto"
          py={"50px"}
        >
          <Heading
            as={motion.h2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
            fontFamily={"bukrabold"}
            mx={4}
            pos={"relative"}
            _after={{
              position: "absolute",
              width: ["40%", "10%"],
              height: "10px",
              content: `""`,
              backgroundColor: "#fa6800",
              borderRadius: "20px",
              right: underlineRight,
              left: underlineLeft,
              bottom: "-30px",
            }}
          >
            {t("BriefTitle")}
          </Heading>
          <Heading
            as={motion.h2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
            fontSize={["2xl", "2xl", "2xl", "x-large"]}
            mx={4}
            fontFamily={"bukrabold"}
            pt="70px"
            pb={2}
          >
            {t("Brief")}
          </Heading>
          {content ? (
            content.data.map((item) => {
              return (
                <Box>
                  <Text
                    py={1}
                    fontSize={["md", "md"]}
                    fontFamily={"bukralight"}
                    mx={4}
                    lineHeight={"1.6"}
                    key={item.id}
                    as={motion.p}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.75, ease: "easeInOut" },
                    }}
                  >
                    {item.desc}
                  </Text>
                </Box>
              );
            })
          ) : (
            <LoadingScreen />
          )}
        </Box>
      </Box>
    </>
  );
}
