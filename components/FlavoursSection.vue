<template>
    <section class="flavours_section">
        <div class="picture"
            :style="`background-image: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 90%), url(${source}.webp)`"
            :class="{ 'fadeIn': isFadeIn, 'fadeOut': isFadeOut }" @animationend="handleAnimationEnd" type="image/webp"
            ref="picture"></div>
        <div class="flavours" ref="flavours">
            <h1>{{ $t('fragrances') }}</h1>
            <div class="types">
                <div ref="top">
                    <h2>{{ $t('topNotes') }}</h2>
                    <ul>
                        <li data-name="Грейпфрут">{{ $t('grapefruit') }}</li>
                        <li data-name="Бергамот">{{ $t('bergamot') }}</li>
                        <li data-name="Апельсин">{{ $t('orange') }}</li>
                    </ul>
                </div>
                <hr class="line">
                <div ref="middle">
                    <h2>{{ $t('middleNotes') }}</h2>
                    <ul>
                        <li data-name="Роза">{{ $t('rose') }}</li>
                        <li data-name="Персик">{{ $t('peach') }}</li>
                        <li data-name="Герань">{{ $t('geranium') }}</li>
                        <li data-name="Жасмин">{{ $t('jasmine') }}</li>
                        <li data-name="Нарцисс">{{ $t('narcissus') }}</li>
                    </ul>
                </div>
                <hr class="line">
                <div ref="base">
                    <h2>{{ $t('baseNotes') }}</h2>
                    <ul>
                        <li data-name="Пачули">{{ $t('patchouli') }}</li>
                        <li data-name="Сандал">{{ $t('sandalwood') }}</li>
                        <li data-name="Бензоин">{{ $t('benzoin') }}</li>
                        <li data-name="Гвоздика">{{ $t('clove') }}</li>
                        <li data-name="Олибанум">{{ $t('frankincense') }}</li>
                        <li data-name="Бобы тонка">{{ $t('tonkaBeans') }}</li>
                        <li data-name="Ваниль">{{ $t('vanilla') }}</li>
                        <li data-name="Белый мускус">{{ $t('whiteMusk') }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const top = ref(null);
const middle = ref(null);
const base = ref(null);
const picture = ref(null);
const flavours = ref(null);
let isFadeIn = ref(false);
let isFadeOut = ref(false);
const sources = {
    "default": '/flavours/бензоин',
    "Грейпфрут": '/flavours/грейпфрут',
    "Бергамот": '/flavours/бергамот',
    "Апельсин": '/flavours/апельсин',
    "Роза": '/flavours/роза',
    "Персик": '/flavours/персик',
    "Герань": '/flavours/герань',
    "Жасмин": '/flavours/жасмин',
    "Нарцисс": '/flavours/нарцисс',
    "Пачули": '/flavours/пачули',
    "Сандал": '/flavours/сандал',
    "Бензоин": '/flavours/бензоин',
    "Гвоздика": '/flavours/гвоздика',
    "Олибанум": '/flavours/олибанум',
    "Бобы тонка": '/flavours/бобы_тонка',
    "Ваниль": '/flavours/ваниль',
    "Белый мускус": '/flavours/белый_мускус',
}
let source = ref(sources['default'])

onMounted(() => {

    const preloadedImages = Object.values(sources).map(source => {
        const image = new Image();
        image.src = source + ".webp";
        return image;
    });

    let loadedImages = 0;

    preloadedImages.forEach(image => {
        image.addEventListener("load", () => {
            loadedImages++;
        });
    });

    (function pictureSwitcher() {
        const listItems = flavours.value.querySelectorAll("li");
        let lastCallTime = 0;
        function checkImagesLoaded() {
            if (loadedImages === preloadedImages.length) {
                listItems.forEach(item => {
                    item.addEventListener("mouseenter", () => {
                        const currentTime = Date.now();
                        if (currentTime - lastCallTime >= 600 && source.value !== sources[item.dataset.name]) {
                            isFadeOut.value = true;
                            setTimeout(() => {
                                source.value = sources[item.dataset.name];
                                isFadeIn.value = true;
                            }, 500);
                            lastCallTime = currentTime;
                        }
                    });
                });
            } else {
                setTimeout(checkImagesLoaded, 100);
            }
        }
        checkImagesLoaded();
    })();

    setTimeout(() => {
        const items = [top.value, middle.value, base.value];
        items.forEach(item => gsap.fromTo(item,
            {
                y: "200px",
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: item,
                    start: `top bottom+=420vh`,
                    end: `top center+=320vh`,
                    scrub: true,
                },
                y: "0px",
                opacity: 1
            },
        ));
        gsap.fromTo(".flavours_section .line",
            {
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: ".flavours_section .line",
                    start: `top bottom-=20%`,
                    end: `top center-=20%`,
                    scrub: true
                },
                opacity: 1
            },
        );
    }, 0);

});

function handleAnimationEnd() {
    if (isFadeOut.value) {
        isFadeOut.value = false;
    }
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.flavours_section {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: calc($index * 3.2);
    position: relative;
}

.picture {
    width: calc($index * 24);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-aspect-ratio: 1/1) {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: opacity(0.2);
    }
}

.flavours {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc($index * 20.7);
    padding-top: calc($index * 1);

    h1 {
        z-index: 1;
    }

    @media (max-aspect-ratio: 1/1) {
        padding-top: calc($index * 2);
        padding-bottom: calc($index * 1);
    }
}

.types {
    >div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: calc($index * 1.63);
        margin-bottom: calc($index * 1);
    }

    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0;
        width: calc($index * 21);
        gap: calc($index * 0.8) calc($index * 1);
    }

    li {
        border: 0.5px solid rgba(34, 34, 34, 0.65);
        border-radius: calc($index * 0.9);
        box-sizing: border-box;
        list-style: none;
        display: grid;
        place-content: center;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: calc($index * 0.8);
        letter-spacing: 0.02em;
        color: $black;
        padding: 2px calc($index * 0.5);
        width: fit-content;
        min-width: calc($index * 5.1);
        cursor: default;
    }

    .line {
        width: calc($index * 14.27);
        background-color: rgba(34, 34, 34, 0.2);
        height: 1px;
        border: none;
        margin: 0 auto;
    }
}

@media (max-aspect-ratio: 1/1) {
    .types {
        >div{
            margin-top: calc($index * 2.445);
            margin-bottom: calc($index * 1.5);
        }

        h2 {
            font-size: calc($index * 1.5);
        }

        ul {
            width: calc($index * 31.5);
            gap: calc($index * 1.2) calc($index * 1.5);
        }

        li {
            border-radius: calc($index * 1.35);
            font-size: calc($index * 1.2);
            padding: 2px calc($index * 0.75);
            min-width: calc($index * 7.65);
        }

        .line {
            width: calc($index * 21.405);
        }
    }

}

.fadeIn {
    animation: fadeIn 1s;
}

.fadeOut {
    animation: fadeOut 0.5s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}</style>