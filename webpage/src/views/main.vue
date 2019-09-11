<style lang="less" scoped>

</style>
<template>
  <div>
    <v-header></v-header>
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>
<script>
import vHeader from '../common/header'
export default {
  components: {
    vHeader
  },
}
</script>
