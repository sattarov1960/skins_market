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