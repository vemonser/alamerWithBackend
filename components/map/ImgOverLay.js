import { Flex, Box, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import contactHero from "../../public/images/maps/Vector Smart Object1 copy.jpg"
import useTranslation from "next-translate/useTranslation";


export default function ImgOverLay() {
    const { t } = useTranslation("home");
    return (

        <Flex h={"50vh"} w={"100%"} pos="relative">
            <Image src={contactHero} alt="hero image overlay" layout="fill" objectFit="cover" objectPosition={" top top "} />
            <Box >
                <Flex pos={"absolute"} dir="rtl"
                    top="0" left="0" right="0" bottom="0" direction={"column"} mx="auto"
                    zIndex={10} fontFamily={"29"}
                    alignItems={"center"} justifyContent={"center"} color={"#fff"}   >
                    <Heading fontFamily={"bukrabold"}>
                        {t("mapTitle")}
                    </Heading>
                </Flex>
            </Box>
        </Flex >
    )
}