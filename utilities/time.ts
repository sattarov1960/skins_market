import {timeT} from "@/interface/types/time";
import {shortTimeT} from "@/interface/types/shortTime";

export function TimePassedToString(date: number) {
    const timeNow = Math.floor(Date.now() / 1000);
    const timePassed = timeNow - date;
    let timePassedString = "";
    let wordPassed: shortTimeT = "";
    if (timePassed < 60) {
        timePassedString = timePassed.toString()
        wordPassed = `сек назад`
    }
    else if (timePassed < 60 * 60){
        timePassedString = Math.floor(timePassed / 60).toString()
        wordPassed = `мин назад`
    }
    else if (timePassed < 60 * 60 * 24){
        timePassedString = Math.floor(timePassed / (60 * 60)).toString()
        wordPassed = `час назад`
    }
    else if (timePassed < 60 * 60 * 24 * 30){
        timePassedString = Math.floor(timePassed / (60 * 60 * 24)).toString()
        wordPassed = `дн назад`
    }
    else if (timePassed < 60 * 60 * 24 * 30 * 12){
        timePassedString = Math.floor(timePassed / (60 * 60 * 24 * 30)).toString()
        wordPassed = `мес назад`
    }
    else {
        timePassedString = Math.floor(timePassed / (60 * 60 * 24 * 30 * 12)).toString()
        wordPassed = `г назад`
    }
    return {timePassedString, wordPassed}
}

export function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}


export const secondsToWord = (timeDelta: number) => {
    let timeString: timeT = '';
    let value = 0;
    if (timeDelta < 60){
        timeString = `секунд`;
        value = Math.floor(timeDelta);
    }
    else if (timeDelta < 3600){
        timeString = `минут`;
        value = Math.floor(timeDelta / 60) % 60;
    }
    else if (timeDelta < 86400){
        timeString = `часов`;
        value = Math.floor(timeDelta / 3600) % 24;
    }
    else if (timeDelta < 2592000){
        timeString = `дней`;
        value = Math.floor(timeDelta / 86400);
    }
    else if (timeDelta < 31536000){
        timeString = `месяцев`;
        value = Math.floor(timeDelta / 2592000);
    }
    else{
        timeString = `лет`;
        value = Math.floor(timeDelta / 31536000);
    }
    return {timeString: timeString, value: value}
}