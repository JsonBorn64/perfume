export default defineNuxtConfig({
    css: [
        'normalize.css/normalize.css',
        '~/assets/scss/variables.scss',
    ],
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: '/fonts/Romile-Regular.woff2'
                },
                {
                    rel: 'stylesheet',
                    href: '/fonts/OpenSans.woff2'
                }
            ],
            script: [
                {
                    src: '/libs/gsap.min.js',
                    defer: true
                },
                {
                    src: '/libs/ScrollSmoother.min.js',
                    defer: true
                },
                {
                    src: '/libs/ScrollTrigger.min.js',
                    defer: true
                },
            ]
        }
    }
})