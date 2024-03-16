"use client"
import {cloneElement, JSXElementConstructor, ReactNode, useEffect, useState, ReactElement} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import Cookies from "js-cookie";

export const LoginWrap = ({ children }: { children: ReactElement}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const [authUrl, setAuthUrl] = useState<string>(process.env.api + "/login");
    useEffect(() => {
        const ref = searchParams.get('r') ? `r=${searchParams.get('r')}` : "";
        const callback = `callbackUrl=${window.location.href}`
        const need_return_to = ref || callback ? "?" : "";
        const return_to = `${need_return_to}${ref}${callback}`;

        const params = new URLSearchParams({
            openid_ns: "http://specs.openid.net/auth/2.0",
            openid_identity: "http://specs.openid.net/auth/2.0/identifier_select",
            openid_claimed_id: "http://specs.openid.net/auth/2.0/identifier_select",
            openid_mode: 'checkid_setup',
            openid_return_to: `${process.env.api}/authorize${return_to}`,
            openid_realm: process.env.api + "/",
        });
        const authUrl = `https://steamcommunity.com/openid/login?${params.toString()}`;
        setAuthUrl(authUrl);
    }, [pathname, searchParams]);
    const login = () => {
        const authId = Math.random().toString(16).slice(2);
        Cookies.set('getTokens', authId, { path: process.env.api });
        window.location.href = authUrl;
    }
    return (
        <>
            {cloneElement(children, { onClick: login })}
        </>
    )
}