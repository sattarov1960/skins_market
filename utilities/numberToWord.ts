import {numberT} from "@/interface/types/number";

export const numberToWord = (valueNumber: number) => {
    let numberValue = 0;
    let valueString: numberT = "";
    if (valueNumber < 1000){
        numberValue = valueNumber;
        valueString = "";
    }
    else if (valueNumber < 1000000){
        numberValue = Math.floor(valueNumber / 1000);
        valueString = getRussianWordEnding(numberValue, "тысяча", "тысячи", "тысяч");
    }
    else if (valueNumber < 1000000000){
        numberValue = Math.floor(valueNumber / 1000000);
        valueString = getRussianWordEnding(numberValue, "миллион", "миллиона", "миллионов");
    }
    else {
        numberValue = Math.floor(valueNumber / 1000000000);
        valueString = getRussianWordEnding(numberValue, "миллиард", "миллиарда", "миллиардов");
    }
    return {numberValue, valueString}
}

const getRussianWordEnding = (value: number, singular: numberT, plural1: numberT, plural2: numberT) => {
    const lastDigit = value % 10;
    const lastTwoDigits = value % 100;
    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return singular;
    } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
        return plural1;
    } else {
        return plural2;
    }
}