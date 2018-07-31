<template>
  <div id="app">
    <hello-world></hello-world>
    <header-pages></header-pages>
    <card></card>
    <level></level>
    <footer-pages></footer-pages>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import card from './components/card.vue'
import level from './components/level.vue'
import FooterPages from './components/footerpages.vue'
import HeaderPages from './components/header.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    card,
    level,
    FooterPages,
    HeaderPages
  }
}
</script>