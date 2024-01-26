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