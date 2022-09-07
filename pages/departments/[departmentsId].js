import {
  Box,
  Accordion,
  Heading,
  AccordionItem,
  Flex,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import shoppingBg from "../../public/images/departments/departmentbg.jpg";
import useTranslation from "next-translate/useTranslation";
import LocationSvg from "../../public/images/departments/Location";
import Phone from "../../public/images/common/Phone";
import Rightarrow from "../../public/images/common/NewsArrows02";
import Leftarrow from "../../public/images/common/NewsArrows01";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export default function Department({ data, dataEn, currentDir }) {
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
  }, [currentDir]);

  const { t } = useTranslation("shopping");
  const router = useRouter();
  const { departmentsId } = router.query;
  const [currentDepartment, setCurrentDepartments] = useState(
    currentLangFile.data[Number(departmentsId) - 1]
  );

  // useEffect(() => {
  //   langFile();

  //   setCurrentDepartments(
  //     () => currentLangFile.data[Number(departmentsId) - 1]
  //   );
  // }, [router.query, currentDir]);
  const shoppingCount = Object.keys(currentLangFile.data).length;

  return (
    <>
      <Flex pos={"relative"} width={"100%"} height="50vh" dir={currentDir}>
        <Image
          priority
          alt="dapartment image"
          src={currentLangFile.data[Number(departmentsId) - 1].bgImg}
          layout="fill"
          objectFit="cover"
          objectPosition={" top top "}
        />
        <Box>
          <Flex
            pos={"absolute"}
            dir={currentDir}
            top="0"
            left="0"
            right="0"
            bottom="0"
            direction={"column"}
            mx="auto"
            zIndex={10}
            fontFamily={"29"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"#fff"}
          >
            <Heading>
              {currentLangFile.data[Number(departmentsId) - 1].bgTitle}
            </Heading>
            <Text>
              {currentLangFile.data[Number(departmentsId) - 1].bgDescription}
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Box maxW={"700px"} mx="auto" height="210px">
        <Flex
          dir={currentDir}
          direction={"column"}
          color={"#3c2133"}
          mx="auto"
          justifyContent={"center"}
          alignItems={"center"}
          pt={10}
        >
          <Heading
            pb={6}
            as={motion.h2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
          >
            {currentLangFile.data[Number(departmentsId) - 1].name}
          </Heading>
          <Text
            as={motion.p}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
            w={"100%"}
            justifyContent={"center"}
            pb={12}
            lineHeight="1.6"
            textAlign={"center"}
          >
            {currentLangFile.data[Number(departmentsId) - 1].desc}
          </Text>
        </Flex>
      </Box>

      <Box h="400px">
        <Flex
          maxW={"90vw"}
          justifyContent="center"
          alignItems={"center"}
          mx="auto"
        >
          <Box w={"90%"} height="400px" mx={"auto"} position="relative">
            <Image
              priority
              src={currentLangFile.data[Number(departmentsId) - 1].img}
              layout="fill"
              objectFit="cover"
              alt="dapartment image"
              objectPosition={"50% 50%"}
            />
          </Box>
        </Flex>
      </Box>

      <Box
        height={"70vh"}
        style={{
          background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
        }}
      >
        <Box maxW={"45vw"} mx="auto" pt={10}>
          <Heading
            py={4}
            px={4}
            bg="#f37f25"
            color="#fff"
            dir={currentDir}
            fontSize={"lg"}
            as={motion.h2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
          >
            {t("shopIndex")}
          </Heading>
          <Text
            py={4}
            px={4}
            color="#44263a"
            dir={currentDir}
            as={motion.p}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
          >
            {t("shopDescription")}
          </Text>
          <Accordion
            allowMultiple
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
          >
            {currentLangFile.data[Number(departmentsId) - 1].shops.map(
              (shop) => {
                const phoneNums = shop.phone;
                return (
                  <AccordionItem key={shop.id}>
                    <Heading
                      color="#44263a"
                      as={motion.h2}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={showText}
                    >
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {shop.name}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                      <Flex alignItems={"center"}>
                        <Text
                          as="span"
                          borderRadius={"full"}
                          bgColor={"#f59429"}
                          color="#fff"
                          py="5px"
                          px={"10px"}
                          mr={2}
                        >
                          {shop.floor}
                        </Text>
                        {/* <Text as="span" borderRadius={"full"} bgColor={"#f59429"} color="#fff" py="5px" px={"10px"} mr={2}> {shop.floor}</Text> */}
                        <Flex mt={"5px"} color="#44263a">
                          <a
                            href={shop.locationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Box display={"inline-flex"} pr={2}>
                              <LocationSvg width="30px" fill="#f59429" />
                            </Box>
                            <Box display={"inline-flex"}>
                              <Phone width="25px" />
                              <Text as={"span"} pl={2}>
                                {phoneNums}
                              </Text>
                            </Box>
                          </a>
                        </Flex>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                );
              }
            )}
          </Accordion>
        </Box>
      </Box>
    </>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://vemonser.github.io/AlamerBackend/shopping.json`
  );
  const resEn = await fetch(
    `https://vemonser.github.io/AlamerBackend/shoppingEn.json`
  );
  const data = await res.json();
  const dataEn = await resEn.json();
  return { props: { data, dataEn } };
}

{
  /*const MyComponent = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    )}
  </AnimatePresence>
) */
}
