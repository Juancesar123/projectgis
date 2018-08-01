<template>
    <div>
        <header-pages></header-pages>
        <card></card>
        <level></level>
        <footer-pages></footer-pages>
    </div>
</template>
<script>
import card from '../components/card.vue'
import level from '../components/level.vue'
import FooterPages from '../components/footerpages.vue'
import HeaderPages from '../components/header.vue'
export default {
    name:'homepage',
    components:{ card, level, FooterPages, HeaderPages}
}
</script>
