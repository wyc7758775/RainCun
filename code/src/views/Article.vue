<style lang="less" scoped>
.container{
  display: flex;
}
.content{
  width: 100%;
  position: relative;
}
</style>
<template>
  <div class="container">
    <v-aside v-if="isHidden"></v-aside>
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>
<script>
import vAside from '../components/Article/aside'
import vContent from '../components//Article/content'
export default {
  data () {
    return {
      isHidden: true
    }
  },
  components: {
    vAside,
    vContent
  },
  methods: {
    readArtitle() {
      // this.isHidden = true
    },
    writeArtitle() {
      // this.isHidden = false
    }
  }
}
</script>
