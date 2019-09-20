<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color:#333; 

}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<template>
  <div id="app">
    <router-view/>
     <vsDialog v-show="this.$store.state.dialogShow"></vsDialog>
  </div>
</template>
<script>
import vsDialog from './common/dialog'
export default {
  data () {
    return {
      dialogShow : true
    }
  },
  created() {
    let getUserId = localStorage.getItem("getUserId")
    this.$store.commit('getUserId', getUserId) 
  },
  methods: {
    
  },
  components: {
    vsDialog
  },
}
</script>

