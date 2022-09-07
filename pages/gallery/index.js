import { Box, Flex, Modal, ModalContent, ModalOverlay, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import GalleryHero from "../../components/gallery/GalleryHero";

const IMAGES = [
  {
    src: "https://github.com/vemonser/photos/blob/main/00000001.jpg?raw=true",
    id: 1
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/00000002.jpg?raw=true",
    id: 2
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/00000003.jpg?raw=true",
    id: 3
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/00000004.jpg?raw=true",
    id: 4
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/014.jpg?raw=true",
    id: 5
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/022.jpg?raw=true",
    id: 6
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/023.jpg?raw=true",
    id: 7
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/20200324_082718.jpg?raw=true",
    id: 8
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/Garage2.jpg?raw=true",
    id: 9
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/MAIN%20LOBBY%201.jpg?raw=true",
    id: 10
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/TENT%202.jpg?raw=true",
    id: 11
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/028.jpg?raw=true",
    id: 12
  },

];

export default function LeasingForm({ currentDir }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <>
      <Head>
        <title>{currentDir === "rtl" ? "معرض الصور" : "Photo Gallery"}</title>
      </Head>
      <GalleryHero />
      <Box
        style={{
          background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
        }}
      >
        <Box maxW={"80vw"} mx="auto" py={"5vw"}>
          <Box height={"max-content"}>



            <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={6}>
              {IMAGES.map((img) => {
                return (
                  <>
                    <Box h="max-content" cursor={"pointer"} onClick={() => {
                      onOpen();
                      selectedImage === img.id ? setSelectedImage(img.id) : setSelectedImage(img.id);
                    }} >
                      <Image src={img.src} layout="responsive" height={4457} width={8224} />
                    </Box>
                    {selectedImage === img.id ? (
                      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} >
                        <ModalOverlay />
                        <ModalContent maxW="90vw" overflow={"hidden"}>
                          <Box
                            borderRadius={"full"}

                          >
                            <Flex
                              overflow={"hidden"}
                              display={"block"}
                              position={"relative"}
                              justifyContent="center"
                              alignItems="center"
                              right="50%"
                              mx="auto"
                              w="90vw"
                              h="85vh"
                              transform={"translateX(50%)"}
                            >
                              <Image src={img.src} layout="fill" height={4457} width={8224} objectFit="cover" />

                            </Flex>
                          </Box>
                        </ModalContent>

                      </Modal>
                    ) : ""}
                  </>
                )
              })}
            </SimpleGrid>
          </Box>
        </Box>
      </Box >
    </>
  );
}
