import {NextRequest, NextResponse} from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import {locales} from './navigation';

const publicPages = [
    '/',
    '/how',
    '/faq',
    '/contact',
    '/partner',
];


async function fetchTokens(getTokens: string, response: NextResponse) {
    try{
        const resp = await fetch(process.env.localhost_api + "/get_tokens", {
            headers: {
                'Content-Type': 'application/json',
                "Cookie": `getTokens=${getTokens};`,
            }
        });
        const data = await resp.json();
        if (data.error){
            console.log(data.errorMsg)
        }
        else{
            response.cookies.set('refresh_token_cookie', data.refreshToken);
            response.cookies.set('refresh_token_expiry', data.refreshTokenExpiry);
            response.cookies.set('access_token_cookie', data.accessToken);
            response.cookies.set('access_token_cookie_expiry', data.accessTokenExpiry);
        }
    }
    catch (e) {
        console.log(`Ошибка получения токенов ${e}`)
    }
    response.cookies.delete('getTokens');
    return response;
}

async function refreshJwt(refreshToken: string, response: NextResponse) {
    try{
        const resp = await fetch(process.env.localhost_api + "/refresh_jwt", {
            headers: {
                'Content-Type': 'application/json',
                "Cookie": `refresh_token_cookie=${refreshToken};`,
            }
        });
        const data = await resp.json();
        if (data.error){
            console.debug("Обновляю access токен" + data.errorMsg)
            return null;
        }
        response.cookies.set('access_token_cookie', data.accessToken);
        response.cookies.set('access_token_cookie_expiry', data.accessTokenExpiry);
    }
    catch (e) {
        console.log(`Ошибка обновления токена ${e}`)
    }
    return response;
}

export default async function middleware(request: NextRequest) {
    const handleI18nRouting = createIntlMiddleware({
        locales,
        localePrefix: 'as-needed',
        defaultLocale: 'ru'
    });
    const response =  handleI18nRouting(request)

    // Способ авторизации по кнопке авторизоваться на сайте
    let getTokens = request.cookies.get('getTokens')
    if (getTokens !== undefined){
        return await fetchTokens(getTokens.value, response);
    }

    // Проверка и обновление access токена
    let accessTokenExpiry = request.cookies.get('access_token_cookie_expiry')
    if (accessTokenExpiry !== undefined){
        const accessTokenExpiryValue = parseInt(accessTokenExpiry.value)
        let date = new Date()
        let expiry = new Date(accessTokenExpiryValue * 1000)
        if (date > expiry){
            let refreshToken = request.cookies.get('refresh_token_cookie')
            if (refreshToken !== undefined){
                return await refreshJwt(refreshToken.value, response);
            }
        }
    }

    // Способ авторизации по refresh токену
    const refreshToken = request.cookies.get('refresh_token_cookie')
    const accessToken = request.cookies.get('access_token_cookie')
    if (refreshToken !== undefined && accessToken === undefined){
        return await refreshJwt(refreshToken.value, response);
    }

    // Проверка авторизации на страницах требующих авторизации
    const publicPathnameRegex = RegExp(
        `^(/(${locales.join('|')}))?(${publicPages
            .flatMap((p) => (p === '/' ? ['', '/'] : p))
            .join('|')})/?$`,
        'i'
    );
    const isPublicPage = publicPathnameRegex.test(request.nextUrl.pathname);
    if (!isPublicPage){
        const accessToken = request.cookies.get('access_token_cookie')
        if (accessToken === undefined){
            const loginPath = generateLoginPath();
            const response = NextResponse.redirect(loginPath);
            const authId = Math.random().toString(16).slice(2);
            response.cookies.set('getTokens', authId);
            return response
        }
    }
    return response
}


function generateLoginPath() {
    const params = new URLSearchParams({
        openid_ns: "http://specs.openid.net/auth/2.0",
        openid_identity: "http://specs.openid.net/auth/2.0/identifier_select",
        openid_claimed_id: "http://specs.openid.net/auth/2.0/identifier_select",
        openid_mode: 'checkid_setup',
        openid_return_to: `${process.env.api}/authorize`,
        openid_realm: process.env.api + "/",
    });
    return `https://steamcommunity.com/openid/login?${params.toString()}`
}

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
