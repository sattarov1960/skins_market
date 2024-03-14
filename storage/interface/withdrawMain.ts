import {withdrawPlaceholder} from "@/interface/types/withdrawPlaceholder";

export interface WithdrawMainI {
    workingPaymentSystem: PaymentSystems;
    activePaymentSystem: string;
    wallet: string
    email: string;
    promotionalCode: string;
    setWorkingPaymentSystem: (workingPaymentSystem: PaymentSystems) => void;
    setActivePaymentSystem: (paymentSystem: string) => void;
    setWallet: (wallet: string) => void;
    setEmail: (email: string) => void;
    setPromotionalCode: (promotionalCode: string) => void;
}

interface PaymentSystem {
    active: boolean;
    minPrice: number;
    commission: number;
    fixedCommission: number;
    caption: string;
    id: number;
    placeholder: withdrawPlaceholder;
    validateType: string;
}

interface PaymentSystems {
    [key: string]: PaymentSystem;
}