<template>
  <div>
    <HeaderComp :smoother="smoother" />
    <HeroSection />
    <DetailsSection />
    <FlavoursSection />
    <BlindSection />
    <PerfumersSection />
    <OrderSection />
    <FooterComp />
  </div>
</template>

<script setup>

const smoother = ref(null)
onMounted(() => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

  smoother.value = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 1,
    // normalizeScroll: true,
  });

  setTimeout(() => {
    smoother.value.scrollTo(1);
  }, 0)

})
</script>
    
<style lang="scss">
@import "@/assets/scss/variables.scss";

// Fonts
@font-face {
  font-family: 'Romile';
  src: url('/fonts/Romile-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/OpenSans.woff2') format('woff2');
}

// Scrollbar
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background-color: rgba(34, 34, 34, 0.23);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(34, 34, 34, 0.72);
}

// Headings
h1 {
  font-family: 'Romile';
  font-size: calc($index * 5.2);
  color: $black;
  font-weight: 400;
  margin: 0;
}

h2 {
  font-family: 'Open Sans';
  font-size: calc($index * 0.98);
  color: $black;
  font-weight: 600;
  margin: 0;
}
</style>