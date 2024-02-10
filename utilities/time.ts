export function TimePassedToString(date: number) {
    const timeNow = Date.now();
    const timePassed = timeNow - date;
    let timePassedString = "";
    let wordPassed = "";
    if (timePassed < 60) {
        timePassedString = timePassed.toString()
        wordPassed = `сек. назад`
    }
    else if (timePassed < 60 * 60){
        timePassedString = Math.floor(timePassed / 60).toString()
        wordPassed = `мин. назад`
    }
    else if (timePassed < 60 * 60 * 24){
        timePassedString = Math.floor(timePassed / (60 * 60)).toString()
        wordPassed = `час. назад`
    }
    else if (timePassed < 60 * 60 * 24 * 30){
        timePassedString = Math.floor(timePassed / (60 * 60 * 24)).toString()
        wordPassed = `дн. назад`
    }
    else if (timePassed < 60 * 60 * 24 * 30 * 12){
        timePassedString = Math.floor(timePassed / (60 * 60 * 24 * 30)).toString()
        wordPassed = `мес. назад`
    }
    else {
        timePassedString = Math.floor(timePassed / (60 * 60 * 24 * 30 * 12)).toString()
        wordPassed = `г. назад`
    }
    return [timePassedString, wordPassed]
}

export function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}