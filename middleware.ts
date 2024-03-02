import {NextRequest} from 'next/server';
import {withAuth} from 'next-auth/middleware';
import createIntlMiddleware from 'next-intl/middleware';
import {locales} from './navigation';

const publicPages = [
    '/',
    '/how',
    '/faq',
    '/contact',
    '/partner',
];

const intlMiddleware = createIntlMiddleware({
    locales,
    localePrefix: 'as-needed',
    defaultLocale: 'ru'
});

const authMiddleware = withAuth(
    // Note that this callback is only invoked if
    // the `authorized` callback has returned `true`
    // and not for pages listed in `pages`.
    (req) => intlMiddleware(req),
    {
        callbacks: {
            authorized: ({token}) => {
                return false;
            }
        },
        pages: {
            signIn: '/login',
        }
    }
);

export default function middleware(req: NextRequest) {
    const publicPathnameRegex = RegExp(
        `^(/(${locales.join('|')}))?(${publicPages
            .flatMap((p) => (p === '/' ? ['', '/'] : p))
            .join('|')})/?$`,
        'i'
    );
    const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

    if (isPublicPage) {
        return intlMiddleware(req);
    } else {
        return (authMiddleware as any)(req);
    }
}

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)']
};
