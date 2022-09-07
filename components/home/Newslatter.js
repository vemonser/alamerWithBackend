import useTranslation from "next-translate/useTranslation";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Spacer,
  background,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function App({ currentDir }) {
  const { t } = useTranslation("home");
  return (
    <Box bg="#422639" dir={currentDir}>
      <Flex
        mx={"auto"}
        align="center"
        pos={"relative"}
        _after={{
          position: "absolute",
          width: "95%",
          height: "1px",
          content: `""`,
          backgroundColor: "#cecece",
          borderRadius: "20px",
          right: "25px",
          bottom: "0px",
        }}
        maxW={"90vw"}
        p={6}
        h={{ base: "250px", md: "250px", xl: "150px" }}
        flexDir={["column","row","row","row","row"]}
        gap={5}
      >
        <Heading
          color={"#fff"}
          fontFamily={"bukrabold"}
          w={"340px"}
          fontSize={["2xl","lg","xl","2xl"]}
          as={motion.h2}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: "easeInOut" },
          }}
        >
          {t("newslatter")}
        </Heading>
        <Spacer />
        <Box
          pos={"relative"}
          top="0px"
          left="0px"
          w={"335px"}
          h={"100px"}
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: "easeInOut" },
          }}
        >
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {

              
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="email" pt={3}> </FormLabel>
                    <Field
                    
                      h={"60px"}
                      as={Input}
                      bgColor={"#fff"}
                      id="email"
                      name="email"
                      color="#cecece"
                      type="email"
                      variant="filled"
                      placeholder={t("placeHolderNewslatter")}
                      pr={currentDir === "rtl" ? "25ox" : "0"}
                      pl={currentDir === "ltr" ? "25ox" : "0"}
                      borderRadius="full"
                      _focus={{
                        background: "#fff",
                        outline: "none",
                        border: "none",
                      }}
                      _hover={{ background: "#fff" }}
                      _active={{
                        background: "#fff",
                        outline: "none",
                        border: "none",
                      }}
                      textindent={"50px"}
                    />
                    <Button
                      pos={"absolute"}
                      borderRadius={"full"}
                      left={currentDir === "rtl" ? "5px" : " "}
                      right={currentDir === "ltr" ? "5px" : " "}
                      bottom={"5px"}
                      h={"50px"}
                      width={"30%"}
                      type="submit"
                      bgColor={"#f37625"}
                      color={"#fff"}
                      _hover={{ background: "#3c2133" }}
                      _active={{ background: "#3c2133" }}
                    >
                      {t("newslatterButton")}
                    </Button>
                  </FormControl>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Box>
  );
}
