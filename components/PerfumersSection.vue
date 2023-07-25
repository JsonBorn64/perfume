<template>
    <section class="perfumers_section">
        <h1>ПАРФЮМЕРЫ</h1>
        <p class="polge_name" ref="polge_name">ЖАК ПОЛЬЖ</p>
        <img class="polge1" src="~/assets/images/Polge1.webp" alt="polge1" ref="polge1" loading="lazy">
        <img class="polge2" src="~/assets/images/Polge2.webp" alt="polge2" loading="lazy">
        <img class="polge3" src="~/assets/images/Polge3.webp" alt="polge3" loading="lazy">
        <img class="polge4" src="~/assets/images/Polge4.webp" alt="polge4" loading="lazy">
        <div class="decore">
            <div class="red">
                <p>КРИСТОФЕР ШЕЛДРЕЙК</p>
            </div>
        </div>
        <p class="chris_name">КРИСТОФЕР ШЕЛДРЕЙК</p>
        <img class="chris1" src="~/assets/images/Chris1.webp" alt="chris1" loading="lazy">
        <img class="chris2" src="~/assets/images/Chris2.webp" alt="chris2" loading="lazy">
        <img class="both" src="~/assets/images/Both.webp" alt="both" loading="lazy">
    </section>
</template>

<script setup>
const polge_name = ref(null)
const polge1 = ref(null)

onMounted(() => {
    let $index = (window.innerWidth + window.innerHeight) / 100

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".perfumers_section",
            pin: true,
            start: "top top",
            end: "10000px",
            scrub: true,
            snap: {
                snapTo: "labels",
                duration: 3,
                delay: 0.2,
                ease: "power1.inOut",
            }
        }
    });

    let polge_nameWidth = polge_name.value.offsetWidth
    let polge1Width = polge1.value.offsetWidth

    
    let mm = gsap.matchMedia();
    
    mm.add("(min-aspect-ratio: 1/1)", () => {
        gsap.set(polge_name.value, { x: (polge1Width / 2 - polge_nameWidth / 2) - 4 })
        tl.addLabel("start")
            .to(".perfumers_section h1", { letterSpacing: "12rem", autoAlpha: 0 })
            .to(".polge1", { top: "50%", y: "-60%", delay: -0.2 })
            .to(".polge_name", { top: "50%", y: "380%", delay: -0.5 })
            .addLabel("polge-label1")
            .to(".polge1", { left: 0, x: "-100%" })
            .to(".polge_name", { y: "-210%", x: 0, fontSize: $index * 5, duration: 0.3, delay: -0.5 })
            .addLabel("polge-label2", "-=0.15")
            .to(".polge2", { top: 0, y: "-130%", duration: 1, delay: -0.4 })
            .to(".polge3", { top: 0, y: "-100%", duration: 1, delay: -0.9 })
            .to(".polge_name", { top: "50%", y: "20%", delay: -0.6 })
            .to(".polge4", { top: 0, y: "-14%", duration: 1, delay: -0.49 })
            .addLabel("polge-finish")
            .to(".decore", { x: "100%" })
            .to(".polge4", { autoAlpha: 0, duration: 0 })
            .to(".polge_name", { autoAlpha: 0, duration: 0 })
            .to(".chris1", { top: "50%", y: "-40%", delay: -0.3 })
            .addLabel("chris-label1")
            .to(".chris_name", { top: 0, y: "10%", duration: 0 })
            .to(".decore", { x: "200%" })
            .to(".chris_name", { opacity: 1, delay: -0.4, duration: 0.1 })
            .to(".chris2", { top: 0, y: "-100%", delay: -0.3 })
            .to(".chris1", { top: 0, y: "-150%", delay: -0.5 })
            .to(".both", { top: 0, y: "0%", delay: -0.3 })
            .addLabel("chris-finish")
    });

    mm.add("(max-aspect-ratio: 1/1)", () => {
        gsap.set(polge_name.value, { x: (polge1Width / 2 - polge_nameWidth / 2) - 200 })
        tl.addLabel("start")
            .to(".perfumers_section h1", { letterSpacing: "12rem", autoAlpha: 0 })
            .to(".polge1", { top: "50%", y: "-60%", delay: -0.2 })
            .to(".polge_name", { top: "57%", y: "380%", delay: -0.5 })
            .addLabel("polge-label1")
            .to(".polge1", { left: 0, x: "-100%" })
            .to(".polge_name", { y: "-210%", x: 0, fontSize: $index * 5, duration: 0.3, delay: -0.5 })
            .addLabel("polge-label2", "-=0.15")
            .to(".polge2", { top: 0, y: "-130%", duration: 1, delay: -0.4 })
            .to(".polge3", { top: 0, y: "-100%", duration: 1, delay: -0.9 })
            .to(".polge_name", { top: "50%", y: "20%", delay: -0.6 })
            .to(".polge4", { top: 0, y: "2%", duration: 1, delay: -0.49 })
            .addLabel("polge-finish")
            .to(".decore", { x: "100%" })
            .to(".polge4", { autoAlpha: 0, duration: 0 })
            .to(".polge_name", { autoAlpha: 0, duration: 0 })
            .to(".chris1", { top: "50%", y: "-40%", delay: -0.3 })
            .addLabel("chris-label1")
            .to(".chris_name", { top: 0, y: "10%", duration: 0 })
            .to(".decore", { x: "200%" })
            .to(".chris_name", { opacity: 1, delay: -0.3, duration: 0.1 })
            .to(".chris2", { top: 0, y: "-100%", delay: -0.3 })
            .to(".chris1", { top: 0, y: "-150%", delay: -0.5 })
            .to(".both", { top: 0, y: "10%", delay: -0.3 })
            .addLabel("chris-finish")
    });

})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.perfumers_section {
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    h1 {
        letter-spacing: 0.18rem;

        @media (max-aspect-ratio: 1/1) {
            font-size: calc($index * 4);
        }
    }

    >p,
    img {
        position: absolute;
        pointer-events: none;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        margin: 0;
    }

    .polge_name {
        white-space: nowrap;
        font-family: 'Romile';
        bottom: calc($index * -3);
        font-size: calc($index * 2);
        z-index: 2;
        mix-blend-mode: difference;
        color: white;
        height: fit-content;

        @media (max-aspect-ratio: 1/1) {}
    }

    .polge1 {
        width: calc($index * 35);

        @media (max-aspect-ratio: 1/1) {
            width: calc($index * 55);
        }
    }

    .polge2 {
        width: calc($index * 19.3);
        transform: translateX(-20%) translateY(100%);
    }

    .polge3 {
        width: calc($index * 17);
        transform: translateX(-100%) translateY(100%);
        z-index: 1;
    }

    .polge4 {
        width: calc($index * 45);
    }

    .decore {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: 3;
        background-color: $white;
        left: -100%;

        >.red {
            position: absolute;
            height: 100vh;
            width: 60%;
            right: 0;
            top: 0;
            background: #6B0216;
            display: flex;
            justify-content: center;
            align-items: flex-start;

            p {
                color: $white;
                font-size: calc($index * 2);
                font-family: 'Romile';
                white-space: nowrap;
                margin: 10% 5% 0 0;

                @media (max-aspect-ratio: 1/1) {
                    white-space: wrap;
                    font-size: calc($index * 3);
                    margin: 25% 0% 0 9%;
                }
            }
        }

    }

    .chris1 {
        z-index: 4;
        width: calc($index * 26);
        transform: translateX(-80%) translateY(100%);

        @media (max-aspect-ratio: 1/1) {
            width: calc($index * 40);
            transform: translateX(-60%) translateY(100%);
        }
    }

    .chris2 {
        z-index: 6;
        width: calc($index * 18);
        transform: translateX(10%) translateY(100%);

        @media (max-aspect-ratio: 1/1) {
            width: calc($index * 26);
            transform: translateX(-50%) translateY(100%);
        }
    }

    .chris_name {
        font-size: calc($index * 5.2);
        right: 0;
        transform: translateX(-15%) translateY(100%);
        z-index: 5;
        // mix-blend-mode: difference;
        font-family: 'Romile';
        color: $white;
        opacity: 0;

        @media (max-aspect-ratio: 1/1) {
            font-size: calc($index * 4);
            transform: translateX(-40%) translateY(100%);
        }
    }

    .both {
        width: calc($index * 50);

        @media (max-aspect-ratio: 1/1) {
            width: calc($index * 64);
            transform: translateX(-30%) translateY(100%);
        }
    }
}
</style>