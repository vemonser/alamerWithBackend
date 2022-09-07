import ImgOverLay from "../../components/map/ImgOverLay";

import { useRouter } from "next/router";
import Map from "../../components/map/Map";
// import SliderTry from "../../components/slider/sliderTry";


export default function InternalMaps() {
    const { locale } = useRouter()
    const currentDir = locale === 'ar' ? 'rtl' : 'ltr'

    return (
        <>
            <ImgOverLay />
            <Map currentDir={currentDir} />
        </>
    )
}