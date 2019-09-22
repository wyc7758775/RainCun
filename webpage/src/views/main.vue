<style lang="less" scoped>
.child-view {
  margin: 0px auto;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-left-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
<template>
  <div>
    <v-header></v-header>
    <div class="content">
      <transition 
        name="slide-left"
        mode="out-in">
        <router-view class="child-view"></router-view>
      </transition>
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
