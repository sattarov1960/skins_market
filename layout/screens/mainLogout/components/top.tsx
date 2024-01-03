import styles from "@/layout/screens/mainLogout/styles/mainLogout.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";

export function Top() {
    const t = useTranslations()
  return (
      <section className={styles.basic_part}>
          <div className={styles.main_part}>
              <div className={styles.average_sell}>
                  <Image src="/walletCheck_icon.svg" width={24} height={24} alt="кошелек" className={styles.walletCheck_icon}/>
                  <p className={styles.average_sell_text}>
                      3795 ₽ - {t("средняя продажа")}
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
                  <span className={styles.main_part_subText}>
                            {t("Продавай игровые скины проще и быстрее Безопасные платежи Без скрытых комиссий или налогов")}
            </span>
              </div>
              <div className={styles.mainPart_startNowBlock}>
                  <button className={styles.mainPart_startNowBlock_button}>
                      {t("Начать сейчас")}
                  </button>
                  <div className={styles.mainPart_sub_startNowBlock}>
                      <Image src="/star_icon.svg" width={24} height={24} alt="звезда" className={styles.star_icon}/>
                      <span className={styles.mainPart_sub_startNowBlock_text}>
               {t("Читать отзывы")}
               </span>
                  </div>
              </div>
          </div>
          <Image src="/ak_mobile.webp" width={375} height={722} alt="ак" className={styles.ak_image_mobile}/>
          <Image src="/ak.webp" width={1905} height={1358} alt="ак" className={styles.ak_image}/>
          <Image src="/smoke_mainPart.webp" width={318} height={627} alt="дым" className={styles.smoke_mainPart}/>
      </section>
  );
}