import styles from "@/layout/screens/mainLogin/styles/mainLogin.module.css";
import {useWithdrawMainStore} from "@/storage/client/withdrawMain";
import {ChangeEvent} from "react";

// FormFields.tsx
export const FormFields = ({
                               isActivePaymentSystem,
                               isWalletError,
                               getPlaceholder,
                               BlurInput,
                               focusInput,
                               isEmailError,
                           }: {
    isActivePaymentSystem: (paymentSystem: string) => boolean,
    isWalletError: boolean | undefined,
    getPlaceholder: () => string,
    BlurInput: (inputName: string) => void,
    focusInput: (e: React.FocusEvent<HTMLInputElement>) => void,
    isEmailError: boolean | undefined ,
    setEmail: (email: string) => void,
    email: string,
    wallet: string
}) => {
    const withdrawMainStore = useWithdrawMainStore()
    return (
        <div className={`${styles.recieveBlock_formFields} ${!isActivePaymentSystem(withdrawMainStore.activePaymentSystem) && styles.recieveBlock_formFields_inactive}`}>
            <input className={`${styles.recieveBlock_form} ${isWalletError && styles.recieveBlock_form_error}`}
                   placeholder={getPlaceholder()}
                   type="text"
                   onChange={(e) => withdrawMainStore.setWallet(e.target.value)}
                   onBlur={() => BlurInput("wallet")}
                   onFocus={(e) => focusInput(e)}/>
            {isWalletError && <p className={styles.recieveBlock_form_error_text}>Проверьте введенные реквизиты</p>}
            <input
                className={`${styles.recieveBlock_form} ${styles.recieveBlock_scndForm} ${isEmailError && styles.recieveBlock_form_error}`}
                placeholder="Электронная почта"
                type="text"
                onChange={(e) => withdrawMainStore.setEmail(e.target.value)}
                onBlur={() => BlurInput("email")}
                onFocus={(e) => focusInput(e)}
            />
            {isEmailError && <p className={styles.recieveBlock_form_error_text}>Проверьте введеные данные</p>}
        </div>
    )
}