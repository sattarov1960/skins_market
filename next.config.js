const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
);

module.exports = withNextIntl({
    publicRuntimeConfig: {
        ENVIRONMENT: process.env.NODE_ENV === 'production' ? 'deploy' : 'development',
    },
    env: {
        api: process.env.NODE_ENV === 'production' ? 'https://tf2key.ru/api' : 'http://127.0.0.1:8003',
        current: process.env.NODE_ENV === 'production' ? 'https://tf2key.ru' : 'http://127.0.0.1:3000',
        localhost_api: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:8000' : 'http://127.0.0.1:8003',
    },
    images: {
        domains: ["avatars.steamstatic.com", "community.steamstatic.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mc.yandex.ru',
                port: '',
                pathname: '/watch/12345678',
            },
        ],
    },
});
