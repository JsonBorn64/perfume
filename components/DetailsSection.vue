<template>
    <section class="details_section">
        <div class="left_side">
            <div class="description" ref="description">
                <h2>Продукт</h2>
                <p>
                    COCO NOIR - это абсолют черного цвета, который позволяет женской красоте проявиться в полную силу.
                    Современный, полный света, восточный аромат, как выражение магнетической чувственности. Композиция, не
                    приемлющая компромиссов.
                </p>
                <p>
                    Современный восточный аромат с искрами света. Яркое аристократичное начало с ноткой бергамота
                    приковывает внимание. Насыщенные ноты сердца постепенно раскрываются блистательной красотой...
                </p>
                <!-- <p>
                    Цветочный аккорд, состоящий из роскошных роз, соблазнительного жасмина и глубокого пачули, окутывает вас
                    элегантностью и чувственностью. Этот изысканный букет плавно переходит в завораживающую базу, где
                    таинственный ветивер и теплый бобовый тонка создают глубокий и манящий шлейф.
                </p>
                <p>
                    Этот парфюм не терпит компромиссов - он смелый, утонченный и уникальный. Он подходит как для особых
                    событий и вечерних выходов, так и для повседневного использования, добавляя нотку роскоши и загадочности
                    в вашу повседневность.
                </p> -->
            </div>
        </div>
        <div class="right_side">
            <h1>Детали</h1>
            <img class="perfume" src="~/assets/images/perfume.webp" alt="perfume"  loading="lazy">
            <img class="ellipse" src="~/assets/images/Ellipse1.svg" alt="ellipse">
        </div>
        <p class="line">coco noir chanel | coco noir chanel | coco noir chanel | coco noir chanel</p>
    </section>
</template>

<script setup>
const description = ref(null)
onMounted(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".details_section",
                pin: true,
                start: "center center",
                end: "500px",
                scrub: true,
                snap: {
                    snapTo: "labels",
                    duration: 3,
                    delay: 0.2,
                    ease: "power1.inOut",
                }
            }
        });

        tl
            .fromTo(".left_side", { x: "-200px", autoAlpha: 0 }, { x: "0px", autoAlpha: 1 })
            .fromTo(".right_side h1", { x: "200px", autoAlpha: 0 }, { x: "0px", autoAlpha: 1, delay: -0.5 })
            .fromTo(".perfume", { x: "400px", autoAlpha: 0 }, { x: "0px", autoAlpha: 1, delay: -0.5 })
            .fromTo(".ellipse", { x: "600px", autoAlpha: 0 }, { x: "0px", autoAlpha: 1, delay: -0.5 })
            .addLabel("finish")

})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.details_section {
    background-color: $white;
    display: flex;
    justify-content: center;
    position: relative;
    min-height: calc($index * 37);
    height: 100vh;
}

.left_side,
.right_side {
    width: 50%;
    position: relative;
    display: flex;
}

.left_side {
    height: 100%;
    overflow-y: auto;
    justify-content: flex-end;

    .description {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: calc(100% - 60px);
        max-width: calc($index * 18.3);

        >h2 {
            margin-top: 140%;
        }

        p {
            font-family: 'Open Sans';
            font-weight: 600;
            font-size: calc($index * 0.8);
            line-height: calc($index * 1.26);
            color: $black;
            letter-spacing: 0.02em;
            position: relative;
        }


        p:last-child {
            padding-bottom: calc($index * 1.67);
        }

        p:last-child::after {
            content: '';
            position: absolute;
            background: linear-gradient(90deg, $black 0%, $black 100%);
            left: 0;
            bottom: 0;
            height: 2px;
            width: 90%;
        }
    }
}

.right_side {
    flex-direction: column;
    justify-content: flex-end;

    h1 {
        margin-top: calc($index * 1.2);
        margin-left: calc($index * 3.7);
    }

    .perfume {
        width: calc($index * 20.8);
        margin-top: calc($index * -0.4);
        z-index: 1;
    }

    .ellipse {
        width: calc($index * 23.5);
        position: absolute;
        bottom: 0;
        left: 24%;
    }
}

.line {
    background-color: $black;
    position: absolute;
    bottom: calc($index * -3.2);
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Romile';
    font-size: calc($index * 2);
    letter-spacing: 0.25em;
    color: $white;
    white-space: nowrap;
    z-index: 1;
    margin: 0;
    padding: 0.225em 0;
}
</style>