export const getAppIdByName = (name: string) => {
    const gameIds = {
        "csgo": 730,
        "dota2": 570,
        "tf2": 440,
        "rust": 252490
    };
    return gameIds[name as keyof typeof gameIds];
}