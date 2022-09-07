import ContactUsForm from "../../components/contact/ContactUsForm";
import ImgOverLay from "../../components/contact/ImgOverLay";
import Map from "../../components/contact/Map";
import { useRouter } from "next/router";
import IconBoxes from "../../components/contact/IconBoxes";
import Head from "next/head";
export default function Contact() {
  const { locale } = useRouter();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <>
      <Head>
        <title>{currentDir === "rtl" ? "تواصل معنا" : "Contact us"}</title>
      </Head>
      <ImgOverLay />
      <Map />
      <IconBoxes currentDir={currentDir} />
      <ContactUsForm currentDir={currentDir} />
    </>
  );
}
