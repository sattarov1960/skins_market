"use client"
import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {LoginWrap} from "@/layout/wrap/login";
import Link from "next/link";
import {scrollInto} from "@/utilities/scrollInto";
import {useMetaStore} from "@/storage/client/meta";

export function Top() {
    const t = useTranslations()
    const metaStore = useMetaStore()
  return (
      <section className={styles.basic_part}>
          <div className={styles.main_part}>
              <div className={styles.average_sell}>
                  <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                  <p className={styles.average_sell_text}>
                      {metaStore.medianPrice} ₽ - {t("средняя продажа")}
                  </p>
              </div>
              <div className={styles.main_part_textBlock}>
                  <h1 className={styles.main_part_text}>
                      <h1 className={styles.main_part_text_generalBlock}>
                          {t("Продавай")}
                          <Image src="/x_icon.svg" width={66} height={67} alt="икс" className={styles.x_icon}/>
                          {t("Cкины")} CS:GO
                      </h1>
                      {t("по приятной стоимости")}
                      <Image src="/line_mainPart.svg" width={361} height={13} alt="линия" className={styles.line_mainPart}/>
                  </h1>
                  <span className={styles.main_part_subText}>{t("Продавай игровые скины проще и быстрее Безопасные платежи Без скрытых комиссий или налогов")}</span>
              </div>
              <div className={styles.mainPart_startNowBlock}>
                  <LoginWrap>
                      <button className={styles.mainPart_startNowBlock_button}>
                          {t("Начать сейчас")}
                      </button>
                  </LoginWrap>
                  <div className={styles.mainPart_sub_startNowBlock}>
                      <Image src="/star_icon.svg" width={24} height={24} alt="звезда" className={styles.star_icon}/>
                      <Link onClick={(event) => scrollInto({e: event, selector: '#reviews'})} href="/#reviews" className={styles.mainPart_sub_startNowBlock_text}>{t("Читать отзывы")}</Link>
                  </div>
              </div>
          </div>
          <Image priority={true} src="/ak_mobile.webp" width={375} height={722} alt="ak" className={styles.ak_image_mobile} quality={100}/>
          <Image priority={true} src="/ak.webp" width={1905} height={1358} alt="ak" className={styles.ak_image} quality={100}/>
          <Image src="/smoke_mainPart.webp" width={318} height={627} alt="smoke" className={styles.smoke_mainPart}/>
      </section>
  );
}