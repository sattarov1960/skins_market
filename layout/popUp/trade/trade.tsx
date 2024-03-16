"use client"
import Image from "next/image";
import swap_active from "@/public/swap_active.svg";
import accept_steam from "@/public/accept_steam.svg";
import accept_web from "@/public/accept_web.svg";
import styles from "./trade.module.css"
import Link from "next/link";
import {useTranslations} from "next-intl";
import {createTrade} from "@/utilities/trade/createTrade";
import {StatusTradeI} from "@/interface/components/statusTrade";
import {getStatusTrade} from "@/utilities/trade/getStatusTrade";
import {useEffect} from "react";
import {sleep} from "@/utilities/sleep";
import {useTradeStore} from "@/storage/client/trade";
import {useUserStore} from "@/storage/client/user";
import {useInventoryStore} from "@/storage/client/inventory";

function Trade({isOpen, setOpen}: {isOpen: boolean, setOpen: (isOpen: boolean) => void}) {
    const tradeStore = useTradeStore()
    const userStore = useUserStore()
    const inventoryStore = useInventoryStore()
    const t = useTranslations()
    let start = false
    const trade = async () => {
        let trade = tradeStore.tradeInfo;

        if (tradeStore.isNeedCreateTrade){
            console.debug("Начинаю создавать обмена")
            try{
                trade = await createTrade({
                    email: tradeStore.email,
                    paymentMethodId: tradeStore.paymentMethodId,
                    promocode: tradeStore.promocode,
                    itemsGive: tradeStore.itemsGive,
                    itemsReceive: tradeStore.itemsReceive,
                    gameId: tradeStore.gameId,
                    price: tradeStore.price,
                    sbpBank: tradeStore.sbpBank,
                    wallet: tradeStore.wallet
                })
                tradeStore.setTradeInfo(trade)
                if (!trade.status) {
                    tradeStore.setIsError(true)
                    console.log(`Ошибка при создании обмена errMsg=${trade.errMsg}`)
                    setOpen(false)
                    throw new Error(trade.errMsg)
                }
                else{
                    console.log(`Успешно создал обмена steamOfferId=${trade.steamOfferId} tradeId=${trade.tradeId} botName=${trade.botName} price=${trade.price} paymentInfo=${trade.paymentInfo} gameId=${trade.appId} paymentMethodId=${trade.paymentMethodId}`)
                }
            }
            catch (e){
                console.log(`Ошибка (Exception) при создании обмена error=${e}`)
                throw e
            }
        }
        console.log("Начинаю получать статус обмена")
        let statusTrade: StatusTradeI = {status: true, statusTrade: "", finish: false};
        let maxCount = 0;
        while (!statusTrade.finish || maxCount < 720){
            try{
                statusTrade = await getStatusTrade({tradeId: trade.tradeId || ""})
                if (!statusTrade.status) {
                    console.log(`Получил статус не удовлетворительный статус обмена, пропускаю дальнейшую обработку status=${statusTrade.status} statusTrade=${statusTrade.statusTrade} finish=${statusTrade.finish}`)
                    continue
                }
                console.log(`Получил удовлетворительный статус обмена, начинаю обработку данных status=${statusTrade.status} statusTrade=${statusTrade.statusTrade} finish=${statusTrade.finish}`)
                switch (statusTrade.statusTrade) {
                    case "active":
                        console.log(`Обмена активен, продолжаю ожидание`)
                        break
                    case "accepted":
                        console.log(`Обмена принят, завершаю обработку`)
                        return true
                    case "declined":
                        console.log(`Обмена отклонен, завершаю обработку`)
                        return false
                }
            }
            catch (e) {
                console.log(`Ошибка при получении статуса обмена error=${e}`)
            }
            finally {
                await sleep(5000)
            }
        }
        console.log(`Превышено время ожидания статуса обмена maxCount=${maxCount}`)
        throw new Error("Превышено количество попыток получения статуса обмена")
    }
    useEffect( () => {
        trade().then((status) => {
            inventoryStore.setReloadInventory(1)
            if (status){
                tradeStore.setIsSuccess(true)
            }
            else{
                // Здесь надо запустить mp3 public/alarm.mp3
                let audio = new Audio('public/alarm.mp3');
                audio.loop = true;
                audio.play();
                tradeStore.setIsError(true);
                tradeStore.setTradeInfo({errMsg: "Обмен отменён Если это сделали не вы возможно, вас взломали Поменяйте пароль выйдите из всех сессий измените ссылку на обмен", status: false})
                tradeStore.setHeaderMsg("Обмен отменён!")
            }
            setOpen(false);
        }).catch((e) => {
            console.log(`Ошибка при обработке обмена error=${e}`)
            tradeStore.setIsError(true)
            setOpen(false)
        })
    }, [])
    const getNameBot = () => {
        return tradeStore.tradeInfo.botName && tradeStore.tradeInfo.botName.length > 12 ? `${tradeStore.tradeInfo.botName.substring(0, 12)}...` : tradeStore.tradeInfo.botName
    }
    return (
        <>
            <section className={tradeStore.tradeInfo.steamOfferId ? styles.trade_wrap : styles.trade_wrap_no_created}>
                {tradeStore.tradeInfo.steamOfferId && <h1 className={styles.trade_h1}>{t("Обмен")} #{tradeStore.tradeInfo.steamOfferId}</h1>}
                <section className={styles.trade_parts_wrap}>
                    <div className={styles.trade_part_wrap}>
                        <div className={styles.trade_part_top_wrap}>
                            <Image width={48} height={48} className={styles.trade_img_small} quality={100}
                                   src={`https://avatars.steamstatic.com/${userStore.steamIcon}_full.jpg`} alt=""/>
                            <span className={styles.trade_part_sent}>{t("Вы отдаете:")}</span>
                        </div>
                        <div className={styles.trade_part_items_scroll_wrap}>
                            <div className={styles.trade_part_items_wrap}>
                                {tradeStore.itemsGive.map((item, index) =>
                                    <div key={index} className={styles.trade_part_item}>
                                        <Image width={194} height={150} className={styles.trade_part_item_img}
                                               src={`https://community.steamstatic.com/economy/image/${item.img}/360fx360f`}
                                               alt="" quality={100}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <hr className={styles.trade_part_hr_mobile}/>
                    <div className={styles.trade_part_wrap}>
                        {tradeStore.tradeInfo.botName && <div className={styles.trade_part_top_wrap}>
                            <Image width={48} height={48} className={styles.trade_img_small} quality={100}
                                   src={`https://avatars.steamstatic.com/${tradeStore.tradeInfo.botImage}.jpg`} alt=""/>
                            <span className={styles.trade_part_sent}>{t("Предметы")} {t("Бот")} #{getNameBot()}:</span>
                        </div>}
                        <div className={styles.trade_part_sent_p_wrap}>
                            <p className={styles.trade_part_sent_p}>
                                {t("Вы не получаете предметы")}<br/>{t("в этом обмене")}
                            </p>
                        </div>
                        <div className={`${styles.trade_part_state_wrap} ${styles.trade_part_state_wrap_green}`}>
                            <span className={`${styles.trade_part_state_span} ${styles.trade_part_state_span_green}`}>State {tradeStore.tradeInfo.steamOfferId ? 2 : 1}: {t(tradeStore.tradeInfo.steamOfferId ? "Смотрим трейд" : "Создаем трейд")}</span>
                            <Image width={20} height={20} className={styles.trade_part_state_icon} src={swap_active} quality={100}
                                   alt=""/>
                        </div>
                    </div>
                </section>
                {tradeStore.tradeInfo.steamOfferId &&
                    <>
                        <hr className={styles.trade_part_hr_desktop}/>
                        <div className={styles.trade_part_footer_wrap}>
                            <div className={styles.trade_part_footer_left_wrap}>
                                <Image width={120} height={120} className={styles.trade_img_big}
                                       src={`https://avatars.steamstatic.com/${tradeStore.tradeInfo.botImage}.jpg`} alt=""/>
                                <div className={styles.trade_part_footer_btn_left_wrap}>
                                    <span className={styles.trade_part_footer_bot_span}>{t("Бот")} #{getNameBot()}</span>
                                    <span className={styles.trade_part_footer_bot_span_gray}>{t("Регистрация: ")}{tradeStore.tradeInfo.timeRegistrationBot}</span>
                                </div>
                            </div>
                            <div className={styles.trade_part_footer_right}>
                                <Link target={"_blank"} href={`https://steamcommunity.com/tradeoffer/${tradeStore.tradeInfo.steamOfferId}`} className={styles.trade_part_footer_right_item}>
                                    <Image width={24} height={24} className={styles.trade_part_footer_right_img}
                                           src={accept_web} alt="Принять в steam"/>
                                    <span className={styles.trade_part_footer_right_span}>{t("Принять в браузере")}</span>
                                </Link>
                                <Link target={"_blank"} href={`steam://url/ShowTradeOffer/${tradeStore.tradeInfo.steamOfferId}`} className={styles.trade_part_footer_right_item}>
                                    <Image width={24} height={24} className={styles.trade_part_footer_right_img}
                                           src={accept_steam} alt="Принять в браузере"/>
                                    <span className={styles.trade_part_footer_right_span}>{t("Принять в Steam")}</span>
                                </Link>
                            </div>
                        </div>
                    </>
                }
            </section>
        </>
    )
}

export default Trade;