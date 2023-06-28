<template>
    <section class="details_section">
        <div class="left_side">
            <div class="description">
                <h2>Продукт</h2>
                <p>COCO NOIR - это абсолют черного цвета, который позволяет женской красоте проявиться в полную силу.
                    Современный, полный света, восточный аромат, как выражение магнетической чувственности. Композиция, не
                    приемлющая компромиссов.</p>
            </div>
        </div>
        <div class="right_side">
            <h1>Детали</h1>
            <img class="perfume" src="~/assets/images/perfume.webp" alt="perfume">
            <img class="ellipse" src="~/assets/images/Ellipse1.svg" alt="ellipse">
        </div>
        <p class="line">coco noir chanel | coco noir chanel | coco noir chanel | coco noir chanel</p>
    </section>
</template>

<script setup>
onMounted(() => {
    setTimeout(() => {
        gsap.fromTo(".left_side",
            {
                x: "-200px",
                autoAlpha: 0
            },
            {
                scrollTrigger: {
                    trigger: ".left_side",
                    start: "top bottom-=80%",
                    end: "top center-=80%",
                    scrub: true
                },
                x: "0px",
                autoAlpha: 1
            },
        );
        gsap.fromTo(".right_side h1",
            {
                x: "200px"
            },
            {
                scrollTrigger: {
                    trigger: ".right_side h1",
                    start: "top bottom",
                    end: "top center-=20%",
                    scrub: true
                },
                x: "0px"
            },
        );
        gsap.fromTo(".perfume",
            {
                x: "400px"
            },
            {
                scrollTrigger: {
                    trigger: ".perfume",
                    start: "top bottom",
                    end: "top center-=20%",
                    scrub: true
                },
                x: "0px"
            },
        );
        gsap.fromTo(".ellipse",
            {
                x: "600px"
            },
            {
                scrollTrigger: {
                    trigger: ".ellipse",
                    start: "top bottom",
                    end: "top center-=10%",
                    scrub: true
                },
                x: "0px"
            },
        );
    }, 0);
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.details_section {
    background-color: $white;
    display: flex;
    justify-content: center;
    position: relative;
    height: calc($index * 44);
}

.left_side,
.right_side {
    width: 50%;
    position: relative;
    display: flex;
}

.left_side {
    height: 100%;
    overflow-y: scroll;
    justify-content: flex-end;

    .description {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: calc(100% - 60px);
        max-width: calc($index * 18.3);

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
            background: $black;
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