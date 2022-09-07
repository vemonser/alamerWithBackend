import AboutusHeroImg from "../../components/aboutus/AboutusHeroImg";
import AboutusBrief from "../../components/aboutus/AboutusBrief";
import AlamerGoals from "../../components/aboutus/AlamerGoals";
import Founder from "../../components/aboutus/Founder";
import Head from "next/head";

export default function About({ currentDir }) {
  return (
    <>
      <Head>
        <title>{currentDir === "rtl" ? "من نحن" : "About us"}</title>
      </Head>

      <AboutusHeroImg currentDir={currentDir} />
      <AboutusBrief currentDir={currentDir} />
      <AlamerGoals currentDir={currentDir} />
      <Founder currentDir={currentDir} />
    </>
  );
}
