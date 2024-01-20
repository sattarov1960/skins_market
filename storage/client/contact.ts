import { create } from "zustand";
import {ContactI} from "@/storage/interface/contact";


export const useContactStore = create<ContactI>((set) => ({
    name: "",
    text: "",
    telegram: "",
    selectedOption: "Общий",
    setName : (name: string) => set({ name: name }),
    setText : (text: string) => set({ text: text }),
    setTelegram : (telegram: string) => set({ telegram: telegram }),
    setSelectedOption : (selectedOption: string) => set({ selectedOption: selectedOption }),
}));