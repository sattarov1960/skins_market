export interface ContactI {
    name: string;
    telegram: string;
    text: string;
    selectedOption: string;
    setName: (name: string) => void;
    setTelegram: (telegram: string) => void;
    setText: (text: string) => void;
    setSelectedOption: (selectedOption: string) => void;
}