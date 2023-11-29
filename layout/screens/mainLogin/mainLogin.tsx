import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css"
import Image from "next/image";

export function MainLogin() {
    return (
        <main className={styles.main}>
            <section className={styles.basic_part}>
                <div className={styles.inventory_and_recieve}>
                    <div className={styles.inventoryBlock}>
                        <div className={styles.inventoryBlock_header}>
                            <div className={styles.inventoryBlock_header_leftPart}>
                                <Image src="/steam_icon.svg" width={24} height={24} alt="иконка стима" className={styles.inventoryBlock_header_steam_icon}/>
                                <h2 className={styles.inventoryBlock_header_leftPart_text}>
                                    ваш инвентарь
                                </h2>
                            </div>
                            <div className={styles.inventoryBlock_filtersInfo_rightPart_mobile}>
                                <Image src="/swap_icon.svg" width={16} height={16} alt="свап" className={styles.swap_icon}/>
                                <span className={styles.inventoryBlock_filtersInfo_rightPart_text}>
                  Изменить Trade-URL
                  </span>
                            </div>
                            <div>
                                <div>
                                    <ul className={styles.inventoryBlock_header_sub_rightPart_items}>
                                        <li className={styles.inventoryBlock_header_sub_rightPart_item}>
                                            <Image src="/cs_icon.svg" width={12} height={16} alt="иконка" className={styles.cs_icon}/>
                                            <p className={`${styles.inventoryBlock_header_sub_rightPart_item_text} ${styles.inventoryBlock_header_sub_rightPart_item_text_active}`}>
                                                CS:GO
                                            </p>
                                        </li>
                                        <hr className={styles.inventoryBlock_header_sub_rightPart_items_line}/>
                                        <li className={styles.inventoryBlock_header_sub_rightPart_item}>
                                            <Image src="/dota_icon.svg" width={14} height={14} alt="иконка" className={styles.dota_icon}/>
                                            <p className={styles.inventoryBlock_header_sub_rightPart_item_text}>
                                                DOTA 2
                                            </p>
                                        </li>
                                        <hr className={styles.inventoryBlock_header_sub_rightPart_items_line}/>
                                        <li className={styles.inventoryBlock_header_sub_rightPart_item}>
                                            <Image src="/dota_icon.svg" width={14} height={14} alt="иконка" className={styles.dota_icon}/>
                                            <p className={styles.inventoryBlock_header_sub_rightPart_item_text}>
                                                RUST
                                            </p>
                                        </li>
                                        <hr className={styles.inventoryBlock_header_sub_rightPart_items_line}/>
                                        <li className={styles.inventoryBlock_header_sub_rightPart_item}>
                                            <Image src="/dota_icon.svg" width={14} height={14} alt="иконка" className={styles.dota_icon}/>
                                            <p className={styles.inventoryBlock_header_sub_rightPart_item_text}>
                                                TF2
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.inventoryBlock_filters}>
                            <div className={styles.inventoryBlock_sub_filters}>
                                <ul className={styles.inventoryBlock_sub_filters_leftPart_items}>
                                    <li className={`${styles.inventoryBlock_sub_filters_leftPart_item} ${styles.inventoryBlock_sub_filters_leftPart_frstItem}`}>
                                        <Image src="/search_icon.svg" width={18} height={19} alt="лупа" className={styles.search_icon}/>
                                        <input className={styles.inventoryBlock_sub_filters_leftPart_item_input} placeholder="Название скина" type="text"/>
                                    </li>
                                    <li className={styles.inventoryBlock_sub_filters_leftPart_item}>
                        <span className={styles.inventoryBlock_sub_filters_leftPart_item_text}>
                        Качество
                        </span>
                                        <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="мини-стрелочка" className={styles.mini_arrow_bot_filters}/>
                                    </li>
                                    <li className={styles.inventoryBlock_sub_filters_leftPart_item}>
                        <span className={styles.inventoryBlock_sub_filters_leftPart_item_text}>
                        Редкость
                        </span>
                                        <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="мини-стрелочка" className={styles.mini_arrow_bot_filters}/>
                                    </li>
                                </ul>
                                <div className={styles.inventoryBlock_sub_filters_rightPart_item}>
                     <span className={styles.iinventoryBlock_sub_filters_rightPart_item_text}>
                     От дорогих
                     </span>
                                    <Image src="/mini_arrow_bot.svg" width={8} height={8} alt="мини-стрелочка" className={styles.mini_arrow_bot_filters}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.inventoryBlock_cards}>
                            <ul className={styles.inventoryBlock_cardsItems}>
                                <li className={`${styles.inventoryBlock_cardsItem} ${styles.inventoryBlock_cardsItemActive}`}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            10.365 ₽
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            ST
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                     Прямо с завода
                     </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            1.275 ₽
                                        </p>
                                    </div>
                                    <Image src="/usp_skin.webp" width={90} height={67} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <Image src="/blur_violet.svg" width={92} height={92} alt="блюр" className={styles.blur_violet}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            USP-S
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Cortex
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Поношенное
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            7.263 ₽
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            2.322 ₽
                                        </p>
                                    </div>
                                    <Image src="/mac10_skin.webp" width={103} height={91} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            MAC-10
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Disco Tech
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            3.462 ₽
                                        </p>
                                    </div>
                                    <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            Five-SeveN
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Monkey Business
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        После полевых
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            2.322 ₽
                                        </p>
                                    </div>
                                    <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            Five-SeveN
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Monkey Business
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        После полевых
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            10.365 ₽
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            ST
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            1.275 ₽
                                        </p>
                                    </div>
                                    <Image src="/usp_skin.webp" width={90} height={67} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <Image src="/blur_violet.svg" width={92} height={92} alt="блюр" className={styles.blur_violet}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            USP-S
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Cortex
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Поношенное
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            1.275 ₽
                                        </p>
                                    </div>
                                    <Image src="/skin_awp.webp" width={90} height={67} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <Image src="/blur_blue.svg" width={92} height={92} alt="блюр" className={styles.blur_violet}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AWP
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Monkey Business
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            7.263 ₽
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            2.322 ₽
                                        </p>
                                    </div>
                                    <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            Five-SeveN
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Monkey Business
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        После полевых
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            2.322 ₽
                                        </p>
                                    </div>
                                    <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            Five-SeveN
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Monkey Business
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        После полевых
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            10.365 ₽
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            ST
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            7.263 ₽
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            1.275 ₽
                                        </p>
                                    </div>
                                    <Image src="/usp_skin.webp" width={90} height={67} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <Image src="/blur_violet.svg" width={92} height={92} alt="блюр" className={styles.blur_violet}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            USP-S
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Cortex
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Поношенное
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            2.322 ₽
                                        </p>
                                    </div>
                                    <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            Five-SeveN
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Monkey Business
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        После полевых
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            2.322 ₽
                                        </p>
                                    </div>
                                    <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            Five-SeveN
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Monkey Business
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        После полевых
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            10.365 ₽
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            ST
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            7.263 ₽
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            1.275 ₽
                                        </p>
                                    </div>
                                    <Image src="/usp_skin.webp" width={90} height={67} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <Image src="/blur_violet.svg" width={92} height={92} alt="блюр" className={styles.blur_violet}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            USP-S
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Cortex
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Поношенное
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            2.322 ₽
                                        </p>
                                    </div>
                                    <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            Five-SeveN
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Monkey Business
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        После полевых
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            2.322 ₽
                                        </p>
                                    </div>
                                    <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            Five-SeveN
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Monkey Business
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        После полевых
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            10.365 ₽
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            ST
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            7.263 ₽
                                        </p>
                                    </div>
                                    <Image src="/ak_skin.webp" width={127} height={96} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            AK-47
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Neon Revolution
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Прямо с завода
                        </span>
                                    </div>
                                </li>
                                <li className={styles.inventoryBlock_cardsItem}>
                                    <div className={styles.inventoryBlock_cardsItem_headerPart}>
                                        <p className={styles.inventoryBlock_cardsItem_headerPart_text}>
                                            1.275 ₽
                                        </p>
                                    </div>
                                    <Image src="/usp_skin.webp" width={90} height={67} alt="ак" className={styles.inventoryBlock_cardsItem_img}/>
                                    <Image src="/blur_violet.svg" width={92} height={92} alt="блюр" className={styles.blur_violet}/>
                                    <div className={styles.inventoryBlock_cardsItem_mainPart}>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textModel}>
                                            USP-S
                                        </p>
                                        <p className={styles.inventoryBlock_cardsItem_mainPart_textName}>
                                            Cortex
                                        </p>
                                        <span className={styles.inventoryBlock_cardsItem_mainPart_subText}>
                        Поношенное
                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.inventoryBlock_filtersInfo}>
                            <div className={styles.inventoryBlock_filtersInfo_leftPart}>
                                <ul className={styles.inventoryBlock_filtersInfo_leftPart_items}>
                                    <li className={`${styles.inventoryBlock_filtersInfo_leftPart_item} ${styles.inventoryBlock_filtersInfo_leftPart_frstItem}`}>
                     <span className={styles.inventoryBlock_filtersInfo_leftPart_item_subText}>
                     Выбрать все
                     </span>
                                    </li>
                                    <li className={`${styles.inventoryBlock_filtersInfo_leftPart_item} ${styles.inventoryBlock_filtersInfo_leftPart_scndItem}`}>
                     <span className={styles.inventoryBlock_filtersInfo_leftPart_item_subText}>
                     Всего:
                     </span>
                                        <p className={styles.inventoryBlock_filtersInfo_leftPart_item_mainText}>
                                            137.372 ₽
                                        </p>
                                    </li>
                                    <li className={`${styles.inventoryBlock_filtersInfo_leftPart_item} ${styles.inventoryBlock_filtersInfo_leftPart_thrdItem}`}>
                     <span className={styles.inventoryBlock_filtersInfo_leftPart_item_subText}>
                     Выбрано:
                     </span>
                                        <p className={styles.inventoryBlock_filtersInfo_leftPart_item_mainText}>
                                            1
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.inventoryBlock_filtersInfo_rightPart}>
                                <Image src="/swap_icon.svg" width={16} height={16} alt="свап" className={styles.swap_icon}/>
                                <span className={styles.inventoryBlock_filtersInfo_rightPart_text}>
                  Изменить Trade-URL
                  </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.recieveBlock}>
                        <div className={styles.recieveBlock_headerPart}>
                            <div className={styles.recieveBlock_headerPart_leftBlock}>
                                <Image src="/wallet_icon.svg" width={18} height={18} alt="кошелек" className={styles.recieveBlock_wallet_icon}/>
                                <h2 className={styles.recieveBlock_headerPart_leftBlock_text}>
                                    Вы получите
                                </h2>
                            </div>
                            <div className={styles.recieveBlock_headerPart_rightBlock}>
                  <span className={styles.recieveBlock_headerPart_rightBlock_subText}>
                  Комиссия сервиса:
                  </span>
                                <p className={styles.recieveBlock_headerPart_rightBlock_subText_mainText}>
                                    0₽
                                </p>
                            </div>
                        </div>
                        <div className={styles.recieveBlock_sub_headerPart}>
                            <ul className={styles.recieveBlock_sub_headerPart_items}>
                                <li className={`${styles.recieveBlock_sub_headerPart_item} ${styles.recieveBlock_sub_headerPart_frstItem}`}>
                                    <p className={styles.recieveBlock_sub_headerPart_item_mainText}>
                                        ₽
                                    </p>
                                    <p className={`${styles.recieveBlock_sub_headerPart_item_mainText} ${styles.recieveBlock_sub_headerPart_item_mainTextPrice}`}>
                                        10.365,00~
                                    </p>
                                </li>
                                <li className={`${styles.recieveBlock_sub_headerPart_item} ${styles.recieveBlock_sub_headerPart_scndItem}`}>
                  <span className={styles.recieveBlock_sub_headerPart_item_subText}>
                  Минимальная сумма: 300₽
                  </span>
                                </li>
                                <li className={`${styles.recieveBlock_sub_headerPart_item} ${styles.recieveBlock_sub_headerPart_thrdItem}`}>
                  <span className={styles.recieveBlock_sub_headerPart_item_subText}>
                  Промокод
                  </span>
                                    <Image src="/checkCircle_icon.svg" width={20} height={21} alt="галочка" className={styles.checkCircle_icon}/>
                                </li>
                            </ul>
                        </div>
                        <hr className={`${styles.recieveBlock_delimiter_line} ${styles.recieveBlock_delimiter_frstLine}`}/>
                        <div className={styles.recieveBlock_paymentMethod}>
                            <p className={styles.recieveBlock_paymentMethod_mainText}>
                                Выберите способ оплаты
                            </p>
                            <ul className={styles.recieveBlock_paymentMethod_items}>
                                <li className={styles.recieveBlock_paymentMethod_item}>
                                    <Image src="/visa_paymentMethod_icon.svg" width={41} height={34} alt="Visa"/>
                                </li>
                                <li className={`${styles.recieveBlock_paymentMethod_item} ${styles.recieveBlock_paymentMethod_item_active}`}>
                                    <Image src="/tether_paymentMethod_icon.svg" width={28} height={28} alt="Tether" className={styles.tether_paymentMethod_icon}/>
                                    <Image src="/tether_paymentMethod_iconText.svg" width={46} height={12} alt="Tether" className={styles.paymentMethod_iconText}/>
                                </li>
                                <li className={styles.recieveBlock_paymentMethod_item}>
                                    <Image src="/btc_paymentMethod_icon.svg" width={28} height={28} alt="BTC" className={styles.btc_paymentMethod_icon}/>
                                    <Image src="/btc_paymentMethod_iconText.svg" width={59} height={16} alt="BTC" className={styles.paymentMethod_iconText}/>
                                </li>
                                <li className={styles.recieveBlock_paymentMethod_item}>
                                    <Image src="/tron_paymentMethod_icon.svg" width={29} height={30} alt="tron" className={styles.tron_paymentMethod_icon}/>
                                    <Image src="/tron_paymentMethod_iconText.svg" width={49} height={14} alt="tron" className={styles.paymentMethod_iconText}/>
                                </li>
                                <li className={styles.recieveBlock_paymentMethod_item}>
                                    <Image src="/sberbank_paymentMethod_icon.svg" width={71} height={20} alt="sberbank"/>
                                </li>
                            </ul>
                        </div>
                        <hr className={styles.recieveBlock_delimiter_line}/>
                        <div className={styles.recieveBlock_formFields}>
                            <input className={styles.recieveBlock_form} placeholder="Ваш USDT-кошелек" type="text"/>
                            <input className={`${styles.recieveBlock_form} ${styles.recieveBlock_scndForm}`} placeholder="Электронная почта" type="text"/>
                        </div>
                        <button className={styles.recieveBlock_mainButton}>
                            Продать скины
                        </button>
                    </div>
                </div>
                <Image src="/smoke_mainPart.webp" width={318} height={627} alt="дым" className={styles.smoke_mainPart}/>
            </section>
            <section>
                <div className={styles.statistic_part}>
                    <ul className={styles.statistic_part_items}>
                        <li className={styles.statistic_part_item}>
                            <div className={styles.statistic_part_item_headerBlock}>
                                <Image src="/clock_icon.svg" width={34} height={34} alt="часы" className={styles.statistic_part_item_icon}/>
                                <p className={styles.statistic_part_item_headerBlock_text}>
                                    5-10 минут
                                </p>
                            </div>
                            <span className={styles.statistic_part_item_subText}>
               В среднем занимает сделка с момента
               регистрации
               </span>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <hr className={styles.statistic_part_item_line}/>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <div className={styles.statistic_part_item_headerBlock}>
                                <Image src="/layer_icon.svg" width={35} height={34} alt="слои" className={styles.statistic_part_item_icon}/>
                                <p className={styles.statistic_part_item_headerBlock_text}>
                                    12 тысяч
                                </p>
                            </div>
                            <span className={styles.statistic_part_item_subText}>
               Всего куплено предметов за время работы
               </span>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <hr className={styles.statistic_part_item_line}/>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <div className={styles.statistic_part_item_headerBlock}>
                                <Image src="/checkMark_icon.svg" width={35} height={34} alt="галочка" className={styles.statistic_part_item_icon}/>
                                <p className={styles.statistic_part_item_headerBlock_text}>
                                    ПРИВАТНО
                                </p>
                            </div>
                            <span className={styles.statistic_part_item_subText}>
               Приватное и безопасное проведение платежа
               </span>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <hr className={styles.statistic_part_item_line}/>
                        </li>
                        <li className={styles.statistic_part_item}>
                            <div className={styles.statistic_part_item_headerBlock}>
                                <Image src="/emoji_icon.svg" width={34} height={34} alt="эмодзи" className={styles.statistic_part_item_icon}/>
                                <p className={styles.statistic_part_item_headerBlock_text}>
                                    прозрачно
                                </p>
                            </div>
                            <span className={styles.statistic_part_item_subText}>
               Никаких скрытых комиссий, налогов и платежей.
               </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className={styles.latest_deals}>
                    <div className={styles.latest_deals_headerPart}>
                        <h2 className={styles.latest_deals_headerPart_text}>
                            Последние сделки
                        </h2>
                        <div className={styles.latest_deals_headerPart_rightSwitches}>
                            <div className={styles.latest_deals_headerPart_rightSwitches_switch}>
                                <Image src="/arrowLeft_forSwitches_icon.svg" width={15} height={14} alt="стрелочка" className={styles.arrows_forSwitches_icon}/>
                            </div>
                            <div className={`${styles.latest_deals_headerPart_rightSwitches_switch} ${styles.latest_deals_headerPart_rightSwitches_scndSwitch}`}>
                                <Image src="/arrowRight_forSwitches_icon.svg" width={15} height={14} alt="стрелочка" className={styles.arrows_forSwitches_icon}/>
                            </div>
                        </div>
                    </div>
                    <ul className={styles.latest_deals_items}>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_frstItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_scndItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/ak_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_thrdItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/mac10_skin.webp" width={103} height={91} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_frthItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/fiveSeven_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_fifthItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/ak_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_sixthItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/mac10_skin.webp" width={103} height={91} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_svnthItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/ak_skin.webp" width={127} height={96} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_penultDarkItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/mac10_skin.webp" width={103} height={91} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                        <li className={`${styles.latest_deals_item} ${styles.latest_deals_lastDarkItem}`}>
                            <div className={styles.latest_deals_item_headerBlock}>
            <span className={styles.latest_deals_item_headerBlock_text}>
            30 мин. назад
            </span>
                                <span className={styles.latest_deals_item_headerBlock_text}>
            2174.33₽
            </span>
                            </div>
                            <Image src="/mac10_skin.webp" width={103} height={91} alt="пистолет" className={styles.latest_deals_item_image}/>
                            <div className={styles.latest_deals_item_footerBlock}>
                                <p className={styles.latest_deals_item_footerBlock_prgrf}>
                                    Monkey Business
                                </p>
                                <span className={styles.latest_deals_item_footerBlock_subText}>
            После полевых
            </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.detail_information_forMobile}>
                <div className={styles.detail_information}>
                    <div className={styles.detail_information_headerPart}>
                        <div className={styles.detail_information_headerPart_leftBlock}>
                            <Image src="/crown_icon.svg" width={32} height={32} alt="корона" className={styles.crown_icon}/>
                            <p className={styles.detail_information_headerPart_leftBlock_text}>
                                Продать скины CS:GO на реальные деньги!
                            </p>
                        </div>
                        <Image src="/logo.svg" width={122} height={18} alt="лого" className={styles.logo_detail_information}/>
                    </div>
                    <div className={styles.detail_information_mainPart}>
            <span className={styles.detail_information_mainPart_text}>
            <span className={styles.detail_information_mainPart_specialText}>
            Avan.market
            </span>
            - это оправданная годами площадка для продажи
            внутриигровых скинов и предметов. Сервис
            обеспечивает мгновенный и безопасный обмен вещей на
            реальные деньги для геймеров по всему миру. Игрок
            CS:GO получает уникальный шанс продать скины КС ГО
            из своего личного инвентаря. Когда у вас есть
            дополнительные скины в инвентаре и вам нужны
            наличные деньги, вы можете продавать скины CS:GO на
            Avan.Market. На данный момент мы покупаем скины
            <span className={styles.detail_information_mainPart_specialText}>CS:GO</span>,
            <span className={styles.detail_information_mainPart_specialText}>Dota2</span>,
            <span className={styles.detail_information_mainPart_specialText}>RUST</span>и
            <span className={styles.detail_information_mainPart_specialText}>TF2</span>.
            <br/>
            <br/>
            Стоимость предметов CS:GO может
            гарантировать геймерам довольно неплохой доход:
            некоторые вещи в Counter-Strike: Global Offensive
            довольно дороги. Так почему бы вам не попытаться
            заработать хорошие деньги, продавая скины с помощью
            Avan.Market?
            </span>
                    </div>
                    <div className={styles.detail_information_footerPart}>
                        <p className={styles.detail_information_footerPart_text}>
                            Показать все
                        </p>
                    </div>
                    <Image src="/character_forDetailInformation.webp" width={171} height={186} alt="человек" className={styles.character_forDetailInformation}/>
                    <Image src="/smoke_detailInformation.webp" width={162} height={869} alt="дым" className={styles.smoke_detailInformation}/>
                </div>
            </section>
        </main>


    );
}