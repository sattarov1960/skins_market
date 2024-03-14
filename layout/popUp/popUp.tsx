import {Dialog, Transition} from "@headlessui/react";
import React, {Dispatch, Fragment, SetStateAction} from "react";
import styles from "@/layout/popUp/popUp.module.css";

export function PopUp (
    {isOpen, close, children}: {isOpen: boolean, close?: Dispatch<SetStateAction<boolean>>, children: React.ReactNode}
) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={styles.dialog} onClose={close || (() => null)}>
                <div className={styles.dialog_div_wrap}>
                    <div className={styles.dialog_div}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}