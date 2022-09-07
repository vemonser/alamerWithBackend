import {
  Box,
  Button,
  Heading,
  Textarea,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
// import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";
// import pattern from "../../public/images/aboutus/centerpattern.png"
export default function ContactUsForm({ currentDir }) {
  let [value, setValue] = useState("");
  const { t } = useTranslation("home");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <Box
      w="100%"
      h={"550px"}
      pos={["unset", "unset", "relative"]}
      top={["0", "0", "-120px"]}
      mb={"-120px"}
      style={{
        background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100%",
        height: "max-content",
      }}
    >


      <Box maxW={"70vw"} dir={currentDir} mx="auto" mb={"-120px"} py={"10%"}>
        <Heading
          as={motion.h2}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: "easeInOut" },
          }}
          color="#3c2133"
          fontSize={"2xl"}
          fontFamily={"bukrabold"}
          py={6}
        >
          {t("leaveMessage")}
        </Heading>
        <Formik
          initialValues={{
            name: "",
            title: "",
            email: "",
            message: "",
          }}
          onSubmit={async (values) => {
        //  await axios.get(
        //       `http://futureapp-001-site21.dtempurl.com/public_html/index.php/api/Contact_us`,
        //       {
        //         headers: {
        //           method: "POST",
        //           API_PASSWORD: `aYI5202kldXcLAxanvdwkfwsklLZcgfjkLSMDKh6tk`,
        //           Lang: language,
        //         },
        //       }
        //     );

            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Box pb={10}>
            <Form>
              <Flex gap={3} flexDir={["column", "column", "row"]}>
                <Flex flex="1">
                  <Text htmlFor="name"> </Text>
                  <Input
                    border={"1px solid #cecece"}
                    id="name"
                    size="sm"
                    borderRadius="md"
                    name="name"
                    placeholder={t("name")}
                  />
                </Flex>
                <Flex flex="1">
                  <Text htmlFor="email"></Text>
                  <Input
                    border={"1px solid #cecece"}
                    borderRadius="md"
                    id="email"
                    name="email"
                    placeholder={t("email")}
                    type="email"
                    size="sm"
                  />
                </Flex>
                <Flex flex="1">
                  <Text htmlFor="title"> </Text>
                  <Input
                    border={"1px solid #cecece"}
                    borderRadius="md"
                    id="title"
                    name="title"
                    placeholder={t("subject")}
                    size="sm"
                  />
                </Flex>
              </Flex>
              <Box py={3}>
                <Textarea
                  borderRadius="md"
                  value={value}
                  onChange={handleInputChange}
                  placeholder={t("message")}
                  rows="8"
                  size="sm"
                />
              </Box>
              <Flex justify={"flex-end"} pb={[14,null,0]}>
                <Button
                  borderRadius="md"
                  bgColor="#fa6800"
                  color="#fff"
                  type="submit"
                  _hover={{ background: "#fa4800" }}
                >
                  {t("sendMessage")}
                </Button>
              </Flex>
            </Form>
          </Box>
        </Formik>
      </Box>
    </Box>
  );
}
