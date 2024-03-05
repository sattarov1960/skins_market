
const SteamProvider = {
    name: 'Steam',
    version: '2.0',
    clientId: process.env.STEAM_CLIENT_ID,
    clientSecret: process.env.STEAM_CLIENT_SECRET,
    authorizationUrl: 'https://steamcommunity.com/openid/login',
    tokenUrl: 'http://127.0.0.1:8003/authorize',
    profileUrl: 'http://127.0.0.1:8003/userinfo',
    profile: (profile: any) => {
        return {
            id: profile.id,
            name: profile.name,
            email: profile.email
        }
    },
    scope: 'openid'
};

export default SteamProvider;