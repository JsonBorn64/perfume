<template>
    <header class="header">
        <p class="logo">chanel</p>
        <nav class="menu">
            <ul>
                <li><a @click="smoother.scrollTo('.details_section', true, 'center+=50vh center')">{{ $t('details') }}</a></li>
                <li><a @click="smoother.scrollTo('.flavours_section', true, 'center center')">{{ $t('compound') }}</a></li>
                <li><a @click="smoother.scrollTo('.perfumers_section', true, 'center center')">{{ $t('perfumers') }}</a></li>
                <li><a @click="smoother.scrollTo('.footer', true, 'center center')">{{ $t('shops') }}</a></li>
            </ul>
        </nav>
        <div class="burger" @click="toggleMenu()" :class="{ 'burger-cross': showMenu }">
            <div class="top"></div>
            <div class="middle"></div>
            <div class="bottom"></div>
        </div>
    </header>
    <Transition>
        <div class="burger-menu" v-show="showMenu">
            <div class="overlay"></div>
            <nav class="menu">
                <ul>
                    <li><a @click="toggleMenu('.details_section', true, 'top top')">{{ $t('details') }}</a></li>
                    <li><a @click="toggleMenu('.flavours_section', true, 'center center')">{{ $t('compound') }}</a></li>
                    <li><a @click="toggleMenu('.perfumers_section', true, 'top top')">{{ $t('perfumers') }}</a></li>
                    <li><a @click="toggleMenu('.footer', true, 'bottom bottom')">{{ $t('shops') }}</a></li>
                </ul>
            </nav>
        </div>
    </Transition>
</template>

<script setup>
const props = defineProps({
  smoother: {
    type: Object,
    reqired: true
  }
})
const { smoother } = toRefs(props)

let showMenu = ref(false)
const toggleMenu = (target, smooth, position) => {
    showMenu.value = !showMenu.value
    document.body.style.position = showMenu.value ? 'fixed' : ''
    if (!target) return
    setTimeout(() => {
        smoother.value.scrollTo(target, smooth, position)
    }, 0)
}
</script>
    
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 66%;
    margin-top: calc($index * 2.7);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    z-index: 10;

    .logo {
        font-family: 'Romile', sans-serif;
        // font-size: calc($index * 1.24);
        font-size: 30px;
        color: $white;
        margin: calc($index * 0.33) 0;

        @media (max-aspect-ratio: 1/1) {
            padding-top: 6px;
        }
    }

    .menu ul {
        display: flex;
        list-style: none;

        @media (max-aspect-ratio: 1/1) {
            display: none;
        }
    }

    .burger {
        display: none;
        cursor: pointer;
        margin: 30px 0;
        transition: 500ms;

        >div {
            width: 40px;
            height: 1px;
            background-color: $white;
            transition: 0.5s;
        }

        @media (max-aspect-ratio: 1/1) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 28px;
        }
    }

    a {
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        font-size: calc($index * 0.82);
        font-weight: 300;
        padding-left: calc($index * 2.3);
        color: $white;
        cursor: pointer;
    }

    @media (max-aspect-ratio: 1/1) {
        width: 76%;
        margin-top: calc($index * 1);
    }
}

.burger-cross {
    transform: rotate(90deg);
    .top {
        transform: rotate(45deg) translate(9px, 9px);
    }

    .middle {
        width: 0px !important;
    }

    .bottom {
        transform: rotate(-45deg) translate(9px, -10px);
    }
}

.burger-menu {
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 9;
    // filter: blur(40px);

    > .overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        z-index: -1;
    }

    a {
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        font-size: calc($index * 2);
        font-weight: 300;
        color: $white;
        cursor: pointer;
    }

    >.menu ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style: none;
        height: 100vh;
        gap: calc($index * 3);
        margin: 0;
        padding: 0;
    }
}

.v-enter-active,
.v-leave-active {
    backdrop-filter: blur(5px);
    transition: 0.5s;
    filter: blur(0px);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
  filter: blur(40px);
}

</style>