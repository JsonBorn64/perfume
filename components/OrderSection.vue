<template>
    <section class="order_section">
        <div class="frame"></div>
        <img class="rose_left" src="~/assets/images/rose_left.webp" alt="rose">
        <img class="rose_right" src="~/assets/images/rose_right.webp" alt="rose">
        <img class="rose_bottom" src="~/assets/images/rose_right.webp" alt="rose">
        <img class="rose_top" src="~/assets/images/rose_left.webp" alt="rose">
        <img class="order_perfume" src="~/assets/images/order_perfume.webp" alt="perfume">
        <button class="order_button" @click="showOrder = !showOrder"
            :style="showOrder ? 'background: white; color: black' : 'background: black; color: white'">ОФОРМИТЬ
            ПРЕДЗАКАЗ</button>
        <form class="order_form" :style="showOrder ? 'transform: translateX(0%);' : 'transform: translateX(-100%);'">
            <div class="top">
                <p>CHANEL</p>
                <img src="~/assets/images/cross.svg" alt="X" @click="showOrder = !showOrder">
            </div>
            <fieldset>
                <input type="text" placeholder="Введите ваше имя">
                <input type="tel" placeholder="Введите номер телефона">
                <input type="email" placeholder="Введите эл. почту">
                <select>
                    <option>100 мл.</option>
                </select>
            </fieldset>
        </form>
    </section>
</template>

<script setup>
let showOrder = ref(false);

onMounted(() => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".order_section",
            start: "center bottom",
            end: "center center",
            scrub: true,
        }
    });

    tl.addLabel("start")
        .fromTo(".rose_left", { x: "-50%", y: "-50%", rotate: 0, scale: 0 }, { x: "-100%", y: "-19%", rotate: -51, scale: 1 })
        .fromTo(".rose_top", { x: "-50%", y: "-50%", rotate: 0, scale: 0 }, { x: "-77%", y: "-79%", rotate: 44, scale: 1, delay: -0.5 })
        .fromTo(".rose_right", { x: "-50%", y: "-50%", rotate: 0, scale: 0 }, { x: "-12%", y: "-76%", rotate: 14, scale: 1, delay: -0.5 })
        .fromTo(".rose_bottom", { x: "-50%", y: "-50%", rotate: 0, scale: 0 }, { x: "-37%", y: "-12%", rotate: 196, scale: 1, delay: -0.5 })

})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.order_section {
    height: calc($index * 39);
    width: 100%;
    position: relative;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 50%);

    @media (max-aspect-ratio: 1/1) {
        height: calc($index * 44);
    }

    >img {
        position: absolute;
        top: 50%;
        left: 50%;

        @media (max-aspect-ratio: 1/1) {
            top: 40%;
        }
    }

    .frame {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc($index * 40);
        height: calc($index * 31);
        border: 2px solid rgba(34, 34, 34, 0.26);
        
        @media (max-aspect-ratio: 1/1) {
            transform: translate(-50%, -65%);
            width: calc($index * 24);
            height: calc($index * 27);
        }
    }

    .order_perfume {
        width: calc($index * 13.71);
        transform: translate(-50%, -50%);
    }

    .rose_left {
        width: calc($index * 17.66);
    }

    .rose_top {
        width: calc($index * 13.05);
    }

    .rose_right {
        width: calc($index * 18.6);
    }

    .rose_bottom {
        width: calc($index * 14.05);
    }

    .order_button {
        display: grid;
        place-items: center;
        height: calc($index * 1.92);
        width: calc($index * 11.46);
        border-radius: calc($index * 0.86);
        background: $black;
        color: $white;
        font-size: calc($index * 0.82);
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        border: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(64%, 650%);
        cursor: pointer;
        z-index: 2;
        transition: 1s;

        @media (max-aspect-ratio: 1/1) {
            transform: translate(-50%, 420%);
            height: calc($index * 3.2);
            width: calc($index * 18.46);
            border-radius: calc($index * 1.86);
            background: $black;
            color: $white;
            font-size: calc($index * 1.4);
        }
    }
}

.order_form {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: 1s;
    background-color: $black;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $white;

    .top {
        display: flex;
        justify-content: space-between;
        width: 66%;
        font-family: 'Romile';
        font-size: calc($index * 1.22);
        border-bottom: 1px solid rgba(255, 255, 255, 0.70);
        margin-top: calc($index * 2.28);

        @media (max-aspect-ratio: 1/1) {
            width: calc($index * 25.9);
        }

        >p {
            margin: calc($index * 0.41) 0;

            @media (max-aspect-ratio: 1/1) {
                margin: calc($index * 0.82) 0;
                font-size: calc($index * 2);
            }
        }

        >img {
            cursor: pointer;
            width: calc($index * 0.86);
            padding: calc($index * 0.41);

            @media (max-aspect-ratio: 1/1) {
                width: calc($index * 1.62);
                padding: calc($index * 0.82);
            }
        }
    }

    fieldset {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: calc($index * 8.56);
        margin-left: 17%;
        align-self: flex-start;
        border: none;
        font-family: 'Open Sans';
        font-weight: 300;

        @media (max-aspect-ratio: 1/1) {
            margin-left: auto;
            margin-right: auto;
        }

        >input {
            color: $white;
            height: calc($index * 1.92);
            width: calc($index * 20.72);
            font-size: calc($index * 0.82);
            margin-bottom: calc($index * 0.98);
            padding-left: calc($index * 0.57);
            border: 1px solid rgba(255, 255, 255, 0.70);
            background: none;
            box-sizing: border-box;

            @media (max-aspect-ratio: 1/1) {
                min-width: 72%;
                height: calc($index * 2.4);
                width: calc($index * 25.9);
                font-size: calc($index * 1.025);
                margin-bottom: calc($index * 1.225);
                padding-left: calc($index * 0.7125);
            }
        }

        >input::placeholder {
            color: $white;
        }

        >select {
            height: calc($index * 1.92);
            width: calc($index * 20.72);
            border: 1px solid rgba(255, 255, 255, 0.70);
            font-size: calc($index * 0.82);
            background: none;
            color: $white;
            padding-left: calc($index * 0.57);

            @media (max-aspect-ratio: 1/1) {
                height: calc($index * 2.4);
                width: calc($index * 25.9);
                font-size: calc($index * 1.025);
                padding-left: calc($index * 0.7125);
            }
        }
    }
}
</style>