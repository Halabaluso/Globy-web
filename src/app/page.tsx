import { HeaderDefault } from "./components/commons/header"
import { HeroComponent } from "./components/Hero/HeroComponent"
import { BestRestaurant } from "./components/sections/bestrestaurant"
import { QualitiesDiv } from "./components/sections/qualitiesdiv"
import { PrincipalCitys } from "./components/sections/PrincipalCitys"
export default function Home() {
  return (
    <div data-theme="bumblebee">
      <HeaderDefault/>
      <HeroComponent/>
      <BestRestaurant/>
      <QualitiesDiv/>
      <PrincipalCitys/>
    </div>
  )
}
