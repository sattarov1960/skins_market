import { create } from "zustand";
import {WithdrawItemsI} from "@/storage/interface/withdraw";
import {WithdrawMainI} from "@/storage/interface/withdrawMain";


export const useWithdrawMainStore = create<WithdrawMainI>((set) => ({
    activePaymentSystem: "",
    wallet: "+79237289963",
    email: "sattarov.1960@inbox.ru",
    promotionalCode: "",
    sbpBank: "Сбербанк",
    workingPaymentSystem: {
        "MIR": {
            "active": true,
            "minPrice": 100,
            "commission": 3,
            "fixedCommission": 50,
            "caption": "Минимальная сумма обмена для MIR 100₽.\nКомиссия 3% + 50₽",
            "id": 1,
            "placeholder": "Ваша карта MIR",
            "validateType": "bankcard"
        },
        "SBP": {
            "active": true,
            "minPrice": 500,
            "commission": 0,
            "fixedCommission": 0,
            "caption": "Минимальная сумма обмена для СБП 500₽.\nКомиссия 0%\nДоступен не всегда, вывод может занять до 24 часов",
            "id": 2,
            "placeholder": "Ваш номер телефона",
            "validateType": "phone number"
        },
        "Qiwi": {
            "active": false,
            "minPrice": 10,
            "commission": 5,
            "fixedCommission": 0,
            "caption": "Минимальная сумма обмена для Qiwi 10₽.\nКомиссия 5%",
            "id": 3,
            "placeholder": "Ваш Qiwi-кошелек",
            "validateType": "phone number"
        },
        "BTC": {
            "active": true,
            "minPrice": 1000,
            "commission": 0.3,
            "fixedCommission": 882.6,
            "caption": "Минимальная сумма обмена для BTC 1000₽.\nКомиссия 0.3% + 882.6₽",
            "id": 4,
            "placeholder": "Ваш BTC-кошелек",
            "validateType": "btc"
        },
        "USDT TRC20": {
            "active": true,
            "minPrice": 1000,
            "commission": 0.3,
            "fixedCommission": 266.64,
            "caption": "Минимальная сумма обмена для USDT TRC20 1000₽.\nКомиссия 0.3% + 266.64₽",
            "id": 5,
            "placeholder": "Ваш USDT-кошелек",
            "validateType": "usdt trc20"
        }
    },
    setWorkingPaymentSystem: (workingPaymentSystem) => set({ workingPaymentSystem: workingPaymentSystem }),
    setWallet: (wallet) => set({ wallet: wallet }),
    setEmail: (email) => set({ email: email }),
    setActivePaymentSystem: (paymentSystem) => set({ activePaymentSystem: paymentSystem }),
    setPromotionalCode: (promotionalCode) => set({ promotionalCode: promotionalCode }),
    setSbpBank: (sbpBank) => set({ sbpBank: sbpBank }),
}));