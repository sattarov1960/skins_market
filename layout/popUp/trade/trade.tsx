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

function Trade({isOpen, setOpen}: {isOpen: boolean, setOpen: (isOpen: boolean) => void}) {
    const gunImage = "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcQljHQva9hZ-BARJnLANoor-mIwlvh_j3eTJO45LnwIHaz_aiauKJxTICv8Yn3u2WoN6ljVDn-kFoMWD3I4aTIA48YwnQ5BHglqNsNZim"
    const userImage = "f2ae4544e940ea8943d088507c57db5868461855_full"
    const botImage = "fa31773ad3befce64be98fc74a8371ffa53069ec_full"
    const tradeStore = useTradeStore()
    const userStore = useUserStore()
    const t = useTranslations()
    const trade = async () => {
        let trade;
        console.debug("Начинаю создавать обмена")
        try{
            trade = await createTrade({
                email: tradeStore.email,
                paymentMethodId: tradeStore.paymentMethodId,
                promocode: tradeStore.promocode,
                itemsGive: tradeStore.itemsGive,
                itemsReceive: tradeStore.itemsReceive,
                gameId: tradeStore.gameId,
                price: tradeStore.price
            })
            tradeStore.setTradeInfo(trade)
            if (!trade.status) {
                console.log(`Ошибка при создании обмена errMsg=${trade.errMsg}`)
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
        console.log("Начинаю получать статус обмена")
        let statusTrade: StatusTradeI = {status: true, statusTrade: "", finish: false};
        let maxCount = 0;
        while (!statusTrade.finish || maxCount < 360){
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
            await sleep(10000)
        }
        console.log(`Превышено время ожидания статуса обмена maxCount=${maxCount}`)
        throw new Error("Превышено количество попыток получения статуса обмена")
    }
    useEffect( () => {
        trade().then((status) => {

        }).catch((e) => {

        })
    }, [])
    return (
        <section className={styles.trade_wrap}>
            <h1 className={styles.trade_h1}>{t("Обмен")} #753413</h1>
            <section className={styles.trade_parts_wrap}>
                <div className={styles.trade_part_wrap}>
                    <div className={styles.trade_part_top_wrap}>
                        <Image width={48} height={48} className={styles.trade_img_small}
                               src={`https://avatars.steamstatic.com/${userStore.steamIcon}.jpg`} alt=""/>
                        <span className={styles.trade_part_sent}>{t("Вы отдаете:")}</span>
                    </div>
                    <div className={styles.trade_part_items_scroll_wrap}>
                        <div className={styles.trade_part_items_wrap}>
                            {tradeStore.itemsGive.map((item, index) =>
                                <div key={index} className={styles.trade_part_item}>
                                    <Image width={65} height={50} className={styles.trade_part_item_img}
                                           src={`https://community.steamstatic.com/economy/image/${item.img}/360fx360f`}
                                           alt="" quality={100}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <hr className={styles.trade_part_hr_mobile}/>
                <div className={styles.trade_part_wrap}>
                    <div className={styles.trade_part_top_wrap}>
                        <Image width={48} height={48} className={styles.trade_img_small}
                               src={`https://avatars.steamstatic.com/${botImage}.jpg`} alt=""/>
                        <span className={styles.trade_part_sent}>{t("Предметы")} Bot #2225:</span>
                    </div>
                    <div className={styles.trade_part_sent_p_wrap}>
                        <p className={styles.trade_part_sent_p}>
                            {t("Вы не получаете предметы")}<br/>{t("в этом обмене")}
                        </p>
                    </div>
                    <div className={`${styles.trade_part_state_wrap} ${styles.trade_part_state_wrap_green}`}>
                        <span className={`${styles.trade_part_state_span} ${styles.trade_part_state_span_green}`}>State 1: {t("Создаем трейд")}</span>
                        <Image width={20} height={20} className={styles.trade_part_state_icon} src={swap_active}
                               alt=""/>
                    </div>
                </div>
            </section>
            <hr className={styles.trade_part_hr_desktop}/>
            <div className={styles.trade_part_footer_wrap}>
                <div className={styles.trade_part_footer_left_wrap}>
                    <Image width={56} height={56} className={styles.trade_img_big}
                           src={`https://avatars.steamstatic.com/${botImage}.jpg`} alt=""/>
                    <div className={styles.trade_part_footer_btn_left_wrap}>
                        <span className={styles.trade_part_footer_bot_span}>Бот Jade #2225</span>
                        <span className={styles.trade_part_footer_bot_span_gray}>{t("Регистрация: ")}22.12.2022</span>
                    </div>
                </div>
                <div className={styles.trade_part_footer_right}>
                    <Link href={"/"} className={styles.trade_part_footer_right_item}>
                        <Image width={24} height={24} className={styles.trade_part_footer_right_img}
                               src={accept_steam} alt="Принять в steam"/>
                        <span className={styles.trade_part_footer_right_span}>{t("Принять в браузере")}</span>
                    </Link>
                    <Link href={"/"} className={styles.trade_part_footer_right_item}>
                        <Image width={24} height={24} className={styles.trade_part_footer_right_img}
                               src={accept_web} alt="Принять в браузере"/>
                        <span className={styles.trade_part_footer_right_span}>{t("Принять в Steam")}</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Trade;