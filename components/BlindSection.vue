<template>
    <div class="blind_section" ref="blindSection">
        <p>Ослепительная <br> женственность, рожденная <br class="br"> из бездонного черного цвета</p>
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
                duration: 6
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

        @media (max-aspect-ratio: 1/1) {
            line-height: calc($index * 3.6);
            font-size: calc($index * 1.8);
        }

        .br {
            @media (max-aspect-ratio: 1/1) {
                display: none;
            }
        }
    }
}
</style>