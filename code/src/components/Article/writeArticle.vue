<style lang="less" scoped>
</style>
<template>
  <div>
    <div id="main">
      <mavon-editor v-model="value"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
