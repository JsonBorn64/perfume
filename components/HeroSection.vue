<template>
    <section class="hero_section">
        <div class="hero-text" ref="heroText" data-speed="0.001">
            <p class="coco">COCO</p>
            <p class="chanel">CHANEL</p>
            <p class="parfume">DE PARFUM</p>
        </div>
    </section>
</template>

<script setup>
const heroText = ref(null)
onMounted(() => {
    
    setTimeout(() => {

        let start
        let end

        let mm = gsap.matchMedia();
    
        mm.add("(min-aspect-ratio: 1/1)", () => {
            start = "bottom top",
            end = "bottom+=40% top"
        })

        mm.add("(max-aspect-ratio: 1/1)", () => {
            start = "bottom center",
            end = "bottom top",

            gsap.fromTo(".hero-text",
            { autoAlpha: 1},
            {
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: start,
                    end: "bottom-=20% top",
                    scrub: true
                },
                autoAlpha: 0
            },
        );
        })
        
        gsap.fromTo(".hero-text .coco",
            { x: "0vw"},
            {
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: start,
                    end: end,
                    scrub: true
                },
                x: "130%",
                right: 0
            },
        );

        gsap.fromTo(".hero-text .chanel",
            { x: "0vw" },
            {
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: start,
                    end: end,
                    scrub: true
                },
                x: "-130%",
                left: 0
            },
        );

        gsap.fromTo(".hero-text .parfume",
            { x: "0vw" },
            {
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: start,
                    end: end,
                    scrub: true,
                },
                x: "200%",
                right: 0
            },
        );

    }, 0);
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.hero_section {
    position: relative;
    height: 100vh;
    background: url('~/assets/images/hero-bg.webp') center/cover no-repeat;
    pointer-events: none;
}

.hero-text {
    width: 66%;
    height: 16.4vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
    color: white;
    z-index: 2;

    > p {
        position: absolute;
        font-family: 'Romile';
        margin: 0;
    }

    > .coco {
        font-size: 13.8vw;
        left: 0;
        top: 0;
        margin-top: -2.65vw;
        @media (max-aspect-ratio: 1/1) {
            font-size: 24.7vw;
        }
    }

    > .chanel {
        font-size: 13.8vw;
        right: 0;
        bottom: 0;
        margin-bottom: -3.6vw;

        @media (max-aspect-ratio: 1/1) {
            font-size: 24.7vw;
            left: 0;
        }
    }

    > .parfume {
        font-size: 3.1vw;
        bottom: 0;
        left: 0;
        margin-bottom: -0.8vw;
        margin-left: 0.6vw;
        letter-spacing: 0.8vw;
        white-space: nowrap;

        @media (max-aspect-ratio: 1/1) {
            font-size: 3.8vw;
            margin-bottom: 25.4vw;
            margin-left: 52vw;
        }
    }

    @media (max-aspect-ratio: 1/1) {
        width: 76%;
        height: 37vw;
    }
}
</style>