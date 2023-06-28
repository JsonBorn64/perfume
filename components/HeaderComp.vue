<template>
    <header class="header">
        <p class="logo">chanel</p>
        <nav class="menu">
            <ul>
                <li>
                    <a href="#">Детали</a>
                </li>
                <li>
                    <a href="#">Состав</a>
                </li>
                <li>
                    <a href="#">Парфюмеры</a>
                </li>
                <li>
                    <a href="#">Магазины</a>
                </li>
            </ul>
        </nav>
    </header>
</template>
  
<script setup>
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
    z-index: 1;
    .logo {
        font-family: 'Romile', sans-serif;
        font-size: calc($index * 1.24);
        color: $white;
        margin: calc($index * 0.33) 0;
    }
    .menu ul{
        display: flex;
        list-style: none;
    }
    a {
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        font-size: calc($index * 0.82);
        font-weight: 300;
        padding-left: calc($index * 2.3);
        color: $white;
    }
}
</style>