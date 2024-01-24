export const getRarityColor = (rarity: string) => {
    switch (rarity) {
        case 'Consumer':
            return '#afafaf';
        case 'Industrial':
            return '#6496e1';
        case 'Mil-spec':
            return '#4b69cd';
        case 'Restricted':
            return '#8847ff';
        case 'Classified':
            return '#d32ce6';
        case 'Covert':
            return '#eb4b4b';
        case 'Contraband':
            return '#886a08';
        case 'Distinguished':
            return '#4b69cd';
        case 'Exceptional':
            return '#8847ff';
        case 'Superior':
            return '#d32ce6';
        case 'Master':
            return '#eb4b4b';
        case 'High Grade':
            return '#4b69cd';
        case 'Remarkable':
            return '#8847ff';
        case 'Exotic':
            return '#d32ce6';
        case 'Extraordinary':
            return '#eb4b4b';
        default:
            return '#000000'; // default color if category doesn't match any case
    }
}

export const getRarityBGColor = (rarity: string) => {
    if (rarity === `Consumer`){
        return "Белый"
    }
    else if (rarity === `Contraband`){
        return "Бордовый"
    }
    else if (rarity === 'Industrial' || rarity === 'Mil-spec' || rarity === 'Distinguished' || rarity === 'High Grade') {
        return "linear-gradient(180deg, rgba(0, 0, 0, 0.00) -34.33%, rgba(47, 60, 134, 0.20) 100%), rgba(18, 18, 22, 0.40)" // Красный
    }
    else if (rarity === 'Restricted' || rarity === 'Classified' || rarity === 'Superior' || rarity === 'Exotic') {
        return "linear-gradient(180deg, rgba(0, 0, 0, 0.00) -34.33%, rgba(108, 47, 137, 0.20) 100%), rgba(18, 18, 22, 0.40)" // Синий
    }
    else if (rarity === `Covert` || rarity === 'Master' || rarity === 'Extraordinary'){
        return "linear-gradient(180deg, rgba(0, 0, 0, 0.00) -34.33%, rgba(128, 47, 56, 0.20) 100%), rgba(18, 18, 22, 0.40)" // Розовый
    }
    else{
        return "Черный"
    }
}

export const getRarityBlurImage = (rarity: string) => {
    if (rarity === `Consumer`){
        return "Белый"
    }
    else if (rarity === `Contraband`){
        return "Бордовый"
    }
    else if (rarity === 'Industrial' || rarity === 'Mil-spec' || rarity === 'Distinguished' || rarity === 'High Grade') {
        return "/blur_blue.svg"
    }
    else if (rarity === 'Restricted' || rarity === 'Classified' || rarity === 'Superior' || rarity === 'Exotic') {
        return "/blur_violet.svg"
    }
    else if (rarity === `Covert` || rarity === 'Master' || rarity === 'Extraordinary'){
        return "/blur_red.svg"
    }
    else{
        return "Черный"
    }
}