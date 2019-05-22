<style lang="less" scoped>
.mavonEditor {
  height: auto;
  margin: 0 auto;
  overflow-y: auto;
  width: 100%;
}
.mavonEditor-read{
  width: 100%;
  height: 94vh;
}
.content-box{
  width: 400px;
  margin: 0 auto;
  margin-top: 20px;
}
.noContent{
  text-align: center;
  line-height: 500px;
  width: 100%;
}
</style>
<template>
  <div class="container">
    <div class="mavonEditor" v-if="this.$store.state.currentContent">
      <mavon-editor 
        :toolbars="toolbars"
        defaultOpen="preview" 
        :subfield="false"
        :boxShadow="false"
        class="mavonEditor-read"
        v-model="this.$store.state.currentContent"/>
    </div>
    <div v-else class="noContent">
      我有漂亮美图
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toolbars: {
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      contentVlaue: ''
    }
  },
  created() {
  }
}
</script>
