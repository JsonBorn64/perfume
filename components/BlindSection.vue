<template>
    <div class="blind_section" ref="blindSection">
        <p>{{ $t('blindText1') }} <br> {{ $t('blindText2') }} <br class="br"> {{ $t('blindText3') }}</p>
    </div>
</template>

<script setup>
const blindSection = ref(null);
onMounted(() => {
    setTimeout(() => {

        // gsap.fromTo(blindSection.value,
        //     {
        //         filter: 'brightness(0)'
        //     },
        //     {
        //         scrollTrigger: {
        //             trigger: blindSection.value,
        //             start: "top top",
        //             end: "bottom center",
        //             scrub: true,
        //             pin: true,
        //             once: true
        //         },
        //         filter: 'brightness(1)'
        //     },
        // );

        gsap.fromTo(
            blindSection.value,
            { filter: 'brightness(0)' },
            {
                scrollTrigger: {
                    trigger: blindSection.value,
                    start: "center center+=10%",
                },
                filter: 'brightness(1)',
                duration: 8
            }
        );

    }, 0)
})
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";

.blind_section {
    background: radial-gradient(ellipse, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 70%), url("~/assets/images/rose.webp") center/cover no-repeat;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    p {
        font-family: 'Romile';
        font-size: calc($index * 2);
        line-height: calc($index * 2.5);
        text-align: center;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: $white;
        // width: 90%;

        @media (max-aspect-ratio: 1/1) {
            line-height: calc($index * 3.8);
            font-size: calc($index * 2);
        }

        .br {
            @media (max-aspect-ratio: 1/1) {
                display: none;
            }
        }
    }
}
</style>