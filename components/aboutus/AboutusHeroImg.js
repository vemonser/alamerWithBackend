import { Box, Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import heroImg from "../../public/images/about/Asset 1.png";
import { motion } from "framer-motion";
export default function AboutusHeroImg({ currentDir }) {
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
      <Flex
        pos={"relative"}
        width={"97%"}
        height={"50vh"}
        mx={"auto"}
        borderRadius="0px 0px 15px 15px "
        overflow={"hidden"}
        mb={10}
        dir={currentDir}
      >
        <Image
          src={heroImg}
          priority
          layout="fill"
          alt={"about hero image "}
          objectFit="cover"
          objectPosition={" bottom"}
        />
        <Box
          pos={"absolute"}
          bg="#fa6800"
          bottom={0}
          right={0}
          pr={"5vw"}
          pl={["10vw", "10vw", "12vw"]}
          py={[6, 6, 8]}
          borderRadius={"20px 0 0 0"}
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={showText}
        >
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color={"#fff"}
            fontFamily={"bukrabold"}
            as={motion.h2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={showText}
          >
            {t("bgTitle")}
          </Heading>
        </Box>
      </Flex>
    </>
  );
}
