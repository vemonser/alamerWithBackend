import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { Flex, Heading, Box, Text, Button } from "@chakra-ui/react";
import data from "../../locales/ar/home.json";
import dataEn from "../../locales/en/home.json";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export default function AboutAlamer({ currentDir }) {
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
    <>
      <Box
        fontFamily={"bukrabold"}
        my={6}
        py={"5vw"}
        pos={"relative"}
        top={"0"}
        left={0}
      >
        <Image
          priority
          src={data.patternBg}
          alt="background pattern"
          objectFit="cover"
          layout="fill"
        />
        <Flex
          maxW={["98vw", "95vw", "85vw"]}
          justify={"space-between"}
          align={"center"}
          mx={"auto"}
          dir={currentLangFile === data ? "ltr" : "rtl"}
          flexDir={["column", "column", "row"]}
        >
          <Flex
            w={["80%", "80%", "50%"]}
            order={["0", "0", "1"]}
            // as={motion.div}
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{
            //   opacity: 1,
            //   y: 0,
            //   transition: { duration: 0.75, ease: "easeInOut" },
            // }}
          >
            <Box dir={currentDir} zIndex="5">
              <Heading
                fontFamily={"bukrabold"}
                color="#3c2133"
                as={motion.h2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={showText}
              >
                {currentLangFile.aboutMalltitle}
              </Heading>
              {currentLangFile.aboutAlAmer.map((desc) => {
                return (
                  <Text
                    pt={[4, 6, 4]}
                    pb={3}
                    fontFamily={"bukrabold"}
                    fontSize={"sm"}
                    lineHeight="1.6"
                    color="#3c2133"
                    key={desc.aboutMallDescription}
                    as={motion.p}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={showText}
                  >
                    {desc.aboutMallDescription}
                  </Text>
                );
              })}
            </Box>
          </Flex>
          <Flex
            w={["100%", "50%", "50%"]}
            top={"0"}
            left={"-2vw"}
            h={"100%"}
            pos={"relative"}
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
          >
            <Box dispaly="block" w="100%" h="100%">
              <Image
                priority
                src={data.alAmerCircle}
                alt="alamer mall image "
                width={926}
                height={502}
                layout="responsive"
              />
            </Box>

            <Button
              pos={"absolute"}
              left={"40%"}
              bottom={"0"}
              borderRadius={"full"}
              bgColor={"#f37625"}
              color={"#fff"}
              px={5}
              _hover={{ bgColor: "#3c2133" }}
              as={motion.button}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={showText}
            >
              {currentLangFile.btnReadMore}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>

    // <div className={styles.Background} >
    //     <div className={styles.grayBg}>
    //         <Image src={grayBackground} width={"2000px"} height={"700"} objectFit={"cover"}/>
    //     </div>
    //     <div className={styles.MaxWidth} dir={props.currentDir}>
    //         <div className={styles.dflexTxt}>
    //             <h1>{t("AboutMalltitle")}</h1>
    //             <p>{t("AboutMallDescriptionPartOne")}</p>
    //             <p>{t("AboutMallDescriptionPartTwo")}</p>
    //         </div>
    //         <div className={styles.dflexImg}>
    //             <Image src={AboutAlamerImg} width={"400"} height={"360"} objectFit="cover" />
    //             <Link href={"/"}><span className={styles.Btn}>{t("AboutMallButton")}</span></Link>
    //         </div>
    //     </div>
    // </div>
  );
}
