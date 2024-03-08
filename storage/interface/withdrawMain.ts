
export interface WithdrawMainI {
    workingPaymentSystem: PaymentSystems;
    activePaymentSystem: string;
    wallet: string
    email: string;
    setWorkingPaymentSystem: (workingPaymentSystem: PaymentSystems) => void;
    setActivePaymentSystem: (paymentSystem: string) => void;
    setWallet: (wallet: string) => void;
    setEmail: (email: string) => void;
}

interface PaymentSystem {
    active: boolean;
    minPrice: number;
    commission: number;
    fixedCommission: number;
    caption: string;
    id: number;
    placeholder: string;
    validateType: string;
}

interface PaymentSystems {
    [key: string]: PaymentSystem;
}