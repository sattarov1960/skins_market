"use client"
import styles from "@/layout/screens/profile/styles/profile.module.css"
import Image from "next/image";
import {AsideCabinet} from "@/layout/components/asideCabinet/asideCabinet";
import Link from "next/link";
import {useUserStore} from "@/storage/client/user";
import axios from "axios";
import {useEffect, useState} from "react";
import {validateEmail} from "@/utilities/validate/email";
import {validateTradeLink} from "@/utilities/validate/tradeLink";
import {toast} from "react-toastify";
import {useTranslations} from "next-intl";

export function Profile() {
    const t = useTranslations()
    const userStore = useUserStore();
    const [telegramUserName, setTelegramUserName] = useState(userStore.telegramUserName);
    const [tradeLink, setTradeLink] = useState(userStore.tradeLink);
    const [email, setEmail] = useState(userStore.email);
    const loadUserData = async () => {
        try{
            const resp = await axios.get(`${process.env.current}/user_profile`, {withCredentials: true});
            const data = resp.data
            if (data.status){
                userStore.setTelegramUserName(data.telegramUserName)
                userStore.setTradeLink(data.tradeLink)
            }
            else{
                toast.error(t("Ошибка при загрузке данных"), {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    isLoading: false,
                })
                console.log(`Не удалось загрузить данные пользователя data = ${data}`)
            }
        }
        catch (e){
            console.log(`Не удалось загрузить данные пользователя error = ${e}`)
        }
    }
    useEffect(() => {
        loadUserData()
    }, []);
    const saveData = async (key: string, value: string) => {
        let status = false
        let text: "Неверный формат E-mail" | "Неверный формат Telegram" | "Неверный формат трейд ссылки" | "" = ""
        if (key === "email"){
            status = validateEmail(value)
            text = "Неверный формат E-mail"
        }
        else if (key === "telegramUserName"){
            console.log(value)
            status = value.length > 4 && (value.includes("@") || value.includes("t.me"))
            text = "Неверный формат Telegram"
        }
        else if (key === "tradeLink"){
            status = validateTradeLink(value)
            text = "Неверный формат трейд ссылки"
        }
        if (!status){
            toast.error(t(text), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                isLoading: false,
            })
            return
        }
        else{
            switch (key) {
                case "email":
                    userStore.setEmail(value)
                    break
                case "telegramUserName":
                    userStore.setTelegramUserName(value)
                    break
                case "tradeLink":
                    userStore.setTradeLink(value)
                    break
                default:
                    break
            }
        }
        const toastId = toast.loading(t("Сохраняем данные"), {
            position: "bottom-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            isLoading: true,
        })
        try {
            const response = await axios.post(`${process.env.current}/save_user_profile`, {
                telegramUserName: telegramUserName,
                tradeLink: tradeLink ,
                email: email,
            }, {withCredentials: true})
            const data = response.data
            if (data.status){
                toast.update(toastId, {
                    render: t("Данные успешно сохранены"),
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                })
            }
            else{
                toast.update(toastId, {
                    render: t("Ошибка при сохранении данных"),
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                })
            }
        }
        catch (e){
            toast.error(t("Ошибка при сохранении данных"), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                isLoading: false,
            })
            console.log(`Error save profile data error = ${e}`)
        }
    }
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.profile}>
                    <Image src="/smoke_profile.webp" width={128} height={627} alt="дым" className={styles.smoke_profile}/>
                    <AsideCabinet/>
                    <div className={styles.profile_rightPart}>
                        <h2 className={styles.profile_rightPart_mainText}>
                            {t("Профиль")}
                        </h2>
                        <div className={styles.profile_rightPart_mainForm}>
                            <div className={styles.profile_rightPart_mainForm_headerBlock}>
                                <Image src="/exchange_icon.svg" width={18} height={18} alt="exch" className={styles.exchange_icon}/>
                                <p className={styles.profile_rightPart_mainForm_headerBlock_text}>
                                    {t("ссылка на трейд")}
                                </p>
                                <Link href={"https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url"}>
                                    <div className={styles.profile_rightPart_mainForm_headerBlock_subItem}>
                                        <p className={styles.profile_rightPart_mainForm_headerBlock_subItem_text}>
                                            {t("Где взять")}?
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.profile_rightPart_mainForm_inputBlock}>
                                <input className={styles.profile_rightPart_mainForm_input}
                                       placeholder="Введите ссылку на трейд" type="text" value={tradeLink} onChange={(e) => setTradeLink(e.target.value)}/>
                                <button className={styles.profile_rightPart_mainForm_inputBlock_btn} onClick={() => saveData("tradeLink", tradeLink)}>
                                    {t("Сохранить")}
                                </button>
                            </div>
                            <hr className={styles.profile_rightPart_line}/>
                            <div className={styles.profile_rightPart_socialNetworks}>
                                <div>
                                    <p className={styles.profile_rightPart_socialNetworks_mainText}>
                                        Telegram
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>{t("Пожалуйста укажите ваш Telegram для связи")}</span>
                                    <div className={styles.profile_rightPart_socialNetworks_inputBlock}>
                                        <input className={styles.profile_rightPart_socialNetworks_input}
                                               placeholder="Ваш Telegram" type="text" value={telegramUserName} onChange={(e) => setTelegramUserName(e.target.value)}/>
                                        {(telegramUserName !== userStore.telegramUserName) || telegramUserName === "" ?
                                            <Image src="/addCircle_icon.svg" width={24} height={24} alt="Circle"
                                                   className={styles.addCircle_icon} onClick={() => saveData("telegramUserName", telegramUserName)}/> :
                                            <Image src="/tickСircle_icon.svg" width={24} height={24} alt="Circle"
                                                   className={styles.tickCircle_icon}/>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <p className={styles.profile_rightPart_socialNetworks_mainText}>
                                        E-Mail
                                    </p>
                                    <span className={styles.profile_rightPart_socialNetworks_subText}>{t("Тут можно изменить ваш e-mail адрес")}</span>
                                    <div className={styles.profile_rightPart_socialNetworks_inputBlock}>
                                        <input className={styles.profile_rightPart_socialNetworks_input} placeholder="Somemail@gmail.com"
                                               value={email} type="text" onChange={(e) => setEmail(e.target.value)}/>
                                        {(email !== userStore.email) || email === "" ?
                                            <Image src="/addCircle_icon.svg" width={24} height={24} alt="Circle"
                                                   className={styles.addCircle_icon} onClick={() => saveData("email", email)}/> :
                                            <Image src="/tickСircle_icon.svg" width={24} height={24} alt="Circle"
                                                   className={styles.tickCircle_icon}/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}