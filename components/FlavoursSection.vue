<template>
    <section class="flavours_section">
        <div class="picture"
            :style="`background-image: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 90%), url(${source}.webp), url(${source}_lite.webp)`"
            :class="{ 'fadeIn': isFadeIn, 'fadeOut': isFadeOut }" @animationend="handleAnimationEnd" ref="picture"></div>
        <div class="flavours" ref="flavours">
            <h1>АРОМАТЫ</h1>
            <div class="types">
                <div class="top">
                    <h2>ВЕРХНИЕ НОТЫ</h2>
                    <ul>
                        <li>Грейпфрут</li>
                        <li>Бергамот</li>
                        <li>Апельсин</li>
                    </ul>
                </div>
                <hr class="line">
                <div class="middle">
                    <h2>СРЕДНИЕ НОТЫ</h2>
                    <ul>
                        <li>Роза</li>
                        <li>Персик</li>
                        <li>Герань</li>
                        <li>Жасмин</li>
                        <li>Нарцисс</li>
                    </ul>
                </div>
                <hr class="line">
                <div class="base">
                    <h2>БАЗОВЫЕ НОТЫ</h2>
                    <ul>
                        <li>Пачули</li>
                        <li>Сандал</li>
                        <li>Бензоин</li>
                        <li>Гвоздика</li>
                        <li>Олибанум</li>
                        <li>Бобы тонка</li>
                        <li>Ваниль</li>
                        <li>Белый мускус</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const picture = ref(null);
const flavours = ref(null);
let isFadeIn = ref(false);
let isFadeOut = ref(false);
const sources = {
    "default": '/flavours/default',
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

    (function pictureSwitcher() {
        const listItems = flavours.value.querySelectorAll('li');
        let lastCallTime = 0;
        listItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const currentTime = Date.now();
                if (currentTime - lastCallTime >= 1000 && source.value !== sources[item.innerText]) {
                    isFadeOut.value = true;
                    setTimeout(() => {
                        source.value = sources[item.innerText];
                        isFadeIn.value = true;
                    }, 500);
                    lastCallTime = currentTime;
                }
            });
        });
    })();

    setTimeout(() => {
        const items = [".top", ".middle", ".base"];
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
}

.picture {
    width: calc($index * 24);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.flavours {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc($index * 20.7);
    padding-top: calc($index * 1);
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
        font-family: 'Open Sans';
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
}
</style>