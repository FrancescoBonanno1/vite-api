<script>
import Appheader from './components/Appheader.vue'
import Appmain from './components/Appmain.vue'
import Appfooter from './components/Appfooter.vue'
import Appcard from './components/Appcard.vue'
export default {
  components: {
    Appheader,
    Appmain,
    Appcard,
    Appfooter
  },
}
</script>

<template>
  <Appheader />
  <Appmain />
  <Appcard />
  <Appfooter />
</template>

<style scoped></style>
