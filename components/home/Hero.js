import Image from "next/image";
import { Box } from "@chakra-ui/react";
import heroImg from "../../public/images/home/heroImg.webp";
export default function Hero() {
  return (
    <Box w={["100%"]} h={"100vh"} pos={["relative"]} top={"0px"}>
      <Image
        priority
        src={heroImg}
        objectFit={"cover"}
        alt="alamer hero image "
        quality={100}
        objectPosition={"80% 80%"}
        layout="fill"
      />
    </Box>
  );
}
