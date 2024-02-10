import {Metadata} from "next";
import {getMeta} from "@/utilities/meta";
import {MainLogout} from "@/layout/screens/mainLogout/mainLogout";
import {MainLogin} from "@/layout/screens/mainLogin/mainLogin";

export const metadata: Metadata = getMeta("Главная",
    "",
    ['Продать', 'скины', 'CS2', 'Dota 2', 'Rust', 'TF2', 'CSGO', 'КС', 'CS', 'дорого', 'выгодно', 'деньги', 'безопасно', 'быстро', 'мгновенно', 'Name.Market', 'нейм маркет'])


export default function Home() {
  return (
    <>
      <MainLogout/>
    </>
  )
}
