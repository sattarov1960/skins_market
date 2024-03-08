import {MainLogin} from "@/layout/screens/mainLogin/mainLogin";
import {MainLogout} from "@/layout/screens/mainLogout/mainLogout";
import Cookies from "js-cookie";

export const MainPage = async ({isAuth}: {isAuth: boolean}) => {
    return isAuth ? <MainLogin/> : <MainLogout/>
}