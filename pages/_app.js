import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Newslatter from "../components/home/Newslatter";
import Footer from "../components/home/Footer";

import { useState, useEffect } from "react";

import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/home/Navbar";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const { locale } = useRouter();

  const currentDir = locale === "ar" ? "rtl" : "ltr";
   return (
    <ChakraProvider>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar currentDir={currentDir}  />
          <Component  currentDir={currentDir}  {...pageProps} />
          <Newslatter  currentDir={currentDir}  />
          <Footer  currentDir={currentDir}  />
        </>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
