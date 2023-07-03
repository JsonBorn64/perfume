<template>
    <section class="hero_section">
        <div class="hero-text" ref="heroText">
            <p class="coco">COCO</p>
            <p class="chanel">CHANEL</p>
            <p class="parfume">DE PARFUM</p>
        </div>
    </section>
</template>

<script setup>
const heroText = ref(null)
onMounted(() => {

    heroText.value.setAttribute("data-speed", "0.4");

    setTimeout(() => {

        gsap.fromTo(".hero-text",
            {
                opacity: 1
            },
            {
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: "bottom+=80% bottom",
                    end: "bottom top",
                    scrub: true
                },
                opacity: 0
            },
        );
        
        gsap.fromTo(".hero-text .coco",
            {
                x: "0vw"
            },
            {
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: "bottom+=0% bottom",
                    end: "bottom top",
                    scrub: true
                },
                x: "30vw"
            },
        );

        gsap.fromTo(".hero-text .chanel",
            {
                x: "0vw"
            },
            {
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: "bottom+=0% bottom",
                    end: "bottom top",
                    scrub: true
                },
                x: "-30vw"
            },
        );

        gsap.fromTo(".hero-text .parfume",
            {
                x: "0vw"
            },
            {
                scrollTrigger: {
                    trigger: ".hero_section",
                    start: "bottom+=0% bottom",
                    end: "bottom top",
                    scrub: true
                },
                x: "50vw"
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
    z-index: 1;

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
    }

    > .chanel {
        font-size: 13.8vw;
        right: 0;
        bottom: 0;
        margin-bottom: -3.6vw;
    }

    > .parfume {
        font-size: 3.1vw;
        bottom: 0;
        left: 0;
        margin-bottom: -0.8vw;
        margin-left: 0.6vw;
        letter-spacing: 0.8vw;
    }
}
</style>