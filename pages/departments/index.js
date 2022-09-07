import ContactUsForm from "../../components/contact/ContactUsForm";
import ImgOverLay from "../../components/contact/ImgOverLay";
import Map from "../../components/contact/Map";
import { useRouter } from "next/router";
import IconBoxes from "../../components/contact/IconBoxes";

import Head from "next/head";
import DepartmentsHeroImg from "../../components/departments/DepartmentsHeroImg";
import Hypermarket from "../../components/departments/Hypermarket";
import ShoppingDepartment from "../../components/departments/ShoppingDepartment";
import ResturantsDepartment from "../../components/departments/ResturantsDepartment";
import Entertainment from "../../components/departments/Entertainment";
export default function Contact() {
  const { locale } = useRouter();
  const currentDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <>
      <Head>
        <title>{currentDir === "rtl" ? "الأقسام" : "Departments"}</title>
      </Head>

      <DepartmentsHeroImg currentDir={currentDir} />
      <Hypermarket currentDir={currentDir} />
      <ShoppingDepartment currentDir={currentDir} />
      <ResturantsDepartment currentDir={currentDir} />
      <Entertainment currentDir={currentDir} />
    </>
  );
}
