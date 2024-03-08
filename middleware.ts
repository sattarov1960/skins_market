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

async function fetchTokens(getTokens: string, response: NextResponse, request: NextRequest) {
    let foundTokens = false
    try{
        const resp = await fetch(process.env.localhost_api + "/get_tokens", {
            headers: {
                'Content-Type': 'application/json',
                "Cookie": `getTokens=${getTokens};`,
            }
        });
        const data = await resp.json();
        if (!data.status){
            console.log("Ошибка получения fetchTokens: " + data.errorMsg)
        }
        else{
            response.cookies.set('refresh_token_cookie', data.refreshToken);
            response.cookies.set('refresh_token_expiry', data.refreshTokenExpiry);
            response.cookies.set('access_token_cookie', data.accessToken);
            response.cookies.set('access_token_cookie_expiry', data.accessTokenExpiry);
            foundTokens = true
        }
    }
    catch (e) {
        console.log(`Ошибка получения токенов ${e}`)
    }
    response.cookies.delete('getTokens');
    return {response, request, foundTokens};
}

async function refreshJwt(refreshToken: string, response: NextResponse, request: NextRequest) {
    try{
        const resp = await fetch(process.env.localhost_api + "/refresh_jwt", {
            headers: {
                'Content-Type': 'application/json',
                "Cookie": `refresh_token_cookie=${refreshToken};`,
            }
        });
        const data = await resp.json();
        if (!data.status){
            console.debug("Ошибка обновления refreshJwt: " + data.errorMsg)
        }
        response.cookies.set('access_token_cookie', data.accessToken);
        response.cookies.set('access_token_cookie_expiry', data.accessTokenExpiry);
    }
    catch (e) {
        console.log(`Ошибка обновления токена ${e}`)
    }
    return {response, request};
}

export default async function middleware(request: NextRequest) {
    let tokenChange = false
    let foundTokens
    const handleI18nRouting = createIntlMiddleware({
        locales,
        localePrefix: 'as-needed',
        defaultLocale: 'ru'
    });
    let response =  handleI18nRouting(request)
    // Проверка публична ли страница
    const publicPathnameRegex = RegExp(
        `^(/(${locales.join('|')}))?(${publicPages
            .flatMap((p) => (p === '/' ? ['', '/'] : p))
            .join('|')})/?$`,
        'i'
    );
    const isPublicPage = publicPathnameRegex.test(request.nextUrl.pathname);

    // Способ авторизации по кнопке авторизоваться на сайте
    let getTokens = request.cookies.get('getTokens')
    if (getTokens !== undefined){
        tokenChange = true;
        ({response, request, foundTokens} = await fetchTokens(getTokens.value, response, request));
        if (!foundTokens){
            return isPublicPage ? response : NextResponse.redirect(process.env.current as string, {headers: response.headers});
        }
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
                tokenChange = true;
                ({response, request} = await refreshJwt(refreshToken.value, response, request));
            }
        }
    }

    // Способ авторизации по refresh токену
    const refreshToken = request.cookies.get('refresh_token_cookie')
    const accessToken = request.cookies.get('access_token_cookie')
    if (refreshToken !== undefined && accessToken === undefined){
        tokenChange = true;
        ({response, request} = await refreshJwt(refreshToken.value, response, request));
    }

    // Проверка авторизации на страницах требующих авторизации
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

    // Необходимо чтобы после авторизации на steam код страница уже загружалась с сессией
    if (tokenChange){
        return NextResponse.redirect(request.url, {headers: response.headers})
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