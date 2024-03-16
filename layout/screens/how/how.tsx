import { HeaderPart } from '@/layout/screens/how/components/headerPart';
import { MainPart } from '@/layout/screens/how/components/mainPart';
import { RegisterSubBlock } from '@/layout/screens/how/components/registerSubBlock';
import styles from "@/layout/screens/how/styles/how.module.css"
import {useTranslations} from "next-intl";


export function How() {
    const t = useTranslations()
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.faq}>
                    <HeaderPart />
                    <MainPart />
                </div>
            </section>
            <section>
                <div className={styles.how_register}>
                    <RegisterSubBlock
                        numText="01"
                        mainText={t("Регистрация аккаунта")}
                        subTitle={t("Авторизуйтесь на сайте, используя вашу учетную запись Steam")}
                        subText={t("how step one")}
                        imgSrc="/step_fsrt.webp"
                        imgAlt="registration"
                        imgMobileSrc="/step_frst_mobile.webp"
                        imgMobileAlt="registration"
                    >
                    </RegisterSubBlock>
                    <RegisterSubBlock
                        numText="02"
                        mainText={t("Укажите трейд-ссылку")}
                        subTitle={t("Укажите Trade URL и убедитесь что она открыта для обмена с ботом")}
                        subText={t("how step two")}
                        imgSrc="/step_scnd.webp"
                        imgAlt="set trade url"
                        imgMobileSrc="/step_scnd_mobile.webp"
                        imgMobileAlt="set trade url"
                    >
                    </RegisterSubBlock>
                    <RegisterSubBlock
                        numText="03"
                        mainText={t("Выберите скины для продажи")}
                        subTitle={t("Выберите скины доступные для продажи и добавьте их в корзину")}
                        subText={t("how step three")}
                        imgSrc="/step_thrd.webp"
                        imgAlt="select skins for sale"
                        imgMobileSrc="/step_thrd_mobile.webp"
                        imgMobileAlt="select skins for sale"
                    >
                    </RegisterSubBlock>
                    <RegisterSubBlock
                        numText="04"
                        mainText={t("Введите ваши платежные реквизиты")}
                        subTitle={t("Введите ваши платежные реквизиты и выберите способ вывода средств")}
                        subText={t("how step four")}
                        imgSrc="/step_frth.webp"
                        imgAlt="input payment details"
                        imgMobileSrc="/step_frth_mobile.webp"
                        imgMobileAlt="input payment details"
                    >
                    </RegisterSubBlock>
                    <RegisterSubBlock
                        numText="05"
                        mainText={t("Нажмите кнопку Продать скины")}
                        subTitle={t("Нажмите кнопку Продать скины, обменяйтесь с ботом и получите выплату")}
                        subText={t("how step five")}
                        imgSrc="/step_five.webp"
                        imgAlt="sell skins"
                        imgMobileSrc="/step_five_mobile.webp"
                        imgMobileAlt="sell skins"
                    >
                    </RegisterSubBlock>
                </div>
            </section>
        </main>
    );
}