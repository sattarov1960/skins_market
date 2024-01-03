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
    return [timePassedString, wordPassed]
}