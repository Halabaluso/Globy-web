import { HeaderDefault } from "./components/commons/header"
import { HeroComponent } from "./components/Hero/HeroComponent"
import { BestRestaurant } from "./components/sections/bestrestaurant"
import { QualitiesDiv } from "./components/sections/qualitiesdiv"
import { PrincipalCitys } from "./components/sections/PrincipalCitys"
import { PrincipalSections } from "./components/sections/PrincipalSections"
import { PopularBrands } from "./components/sections/PopularBrands"
import { DowloadApp } from "./components/sections/DownloadApp"
import { FooterComponent } from "./components/commons/footer"
export default function Home() {
  return (
    <div data-theme="bumblebee">
      <HeaderDefault/>
      <HeroComponent/>
      <BestRestaurant/>
      <QualitiesDiv/>
      <PrincipalCitys/>
      <PrincipalSections/>
      <PopularBrands/>
      <DowloadApp/>
      <FooterComponent/>
    </div>
  )
}
