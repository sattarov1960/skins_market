import styles from "@/layout/components/header/header.module.css"
import Image from "next/image";
export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.nav_leftBlock}>
                    <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.logo}/>
                    <hr className={styles.nav_line}/>
                    <div className={styles.nav_languageBlock}>
                        <Image src="/ru_icon.svg" width={18} height={19} alt="флаг" className={styles.ru}/>
                        <p className={styles.nav_languageBlock_text}>
                            RU
                        </p>
                        <Image src="/arrow_bot.svg" width={11} height={12} alt="стрелочка"/>
                    </div>
                    <div className={styles.nav_currencyBlock}>
                        <Image src="/wallet_icon.svg" width={18} height={18} alt="кошелек" className={styles.wallet_icon}/>
                        <p className={styles.nav_currencyBlock_text}>
                            RUB
                        </p>
                        <Image src="/arrow_bot.svg" width={11} height={12} alt="стрелочка"/>
                    </div>
                </div>
                <div className={styles.nav_midBlock}>
                    <ul className={styles.nav_midBlock_items}>
                        <li className={`${styles.nav_midBlock_item} ${styles.nav_midBlock_item_active}`}>
                            Главная
                            <div className={styles.nav_midBlock_item_active_line}>
                            </div>
                        </li>
                        <li className={styles.nav_midBlock_item}>
                            Отзывы
                        </li>
                        <li className={styles.nav_midBlock_item}>
                            Розыгрыши
                        </li>
                        <li className={styles.nav_midBlock_item}>
                            Помощь
                        </li>
                        <li className={styles.nav_midBlock_item}>
                            Партнерка
                        </li>
                        <li className={styles.nav_midBlock_item}>
                            Контакты
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={styles.nav_rightBlock}>
                <button className={styles.nav_rightBlock_button}>
                    <Image src="/stem_icon.svg" width={24} height={24} alt="стим" className={styles.steam_icon}/>
                    <p className={styles.nav_rightBlock_button_text}>
                        Войти через Steam
                    </p>
                    <p className={styles.nav_rightBlock_button_text_mobile}>
                        Войти
                    </p>
                </button>
                <Image src="/burgerMenu_icon.svg" width={24} height={24} alt="меню" className={styles.burgerMenu_icon}/>
            </div>
        </header>
);
}