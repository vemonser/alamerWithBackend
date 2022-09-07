import ImgOverLay from "../../components/events/ImgOverLay";

 
import Head from "next/head";
import Event from "../../components/events/event";

export default function Contact({currentDir}) {
  
  return (
    <>
      <Head>
        <title>{currentDir === "rtl" ? "رزنامة الفعليات" : "Events"}</title>
      </Head>
      <ImgOverLay currentDir={currentDir} />
      <Event currentDir={currentDir}/>
    </>
  );
}
