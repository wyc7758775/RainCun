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
.Release{
  position: absolute;
  right: 3vw;
  font-size: .8rem;
  top: 10vh;
  z-index: 9999;
  background: rgb(111,111,111);
  width: 60px;
  height: 25px;
  border-radius: 5px;
  text-align: center;
  line-height: 25px;
  color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px grey;
}
.Release:hover{
  box-shadow: 0px 0px 1px grey;
}
.Delecte{
  position: absolute;
  right: 10vw;
  font-size: .8rem;
  top: 10vh;
  z-index: 9999;
  background: rgb(200, 11, 11);
  width: 60px;
  height: 25px;
  border-radius: 5px;
  text-align: center;
  line-height: 25px;
  color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px grey;  
}
.Delecte:hover{
  box-shadow: 0px 0px 1px grey;
}
</style>
<template>
  <div class="container">
    <div class="Release"  v-if="this.$store.state.currentContent" @click="releaseContent">发布</div>
    <div class="Delecte"  v-if="this.$store.state.currentContent" @click="DelecteContent">删除</div>
    <div class="mavonEditor" v-if="this.$store.state.currentContent">
      <mavon-editor 
        :toolbars="toolbars"
        defaultOpen="preview" 
        :subfield="false"
        :boxShadow="false"
        class="mavonEditor-read"
        @save="upadataContent"
        v-model="this.$store.state.currentContent"/>
    </div>
    <div v-else class="noContent">
      我有漂亮美图
    </div>
  </div>
</template>
<script>
import { releaseContent, updateContent, delectContent } from '@/api/getData'
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
        trash: true // 清空
      },
      contentVlaue: ''
    }
  },
  created() {
  },
  methods: {
    // api Start
    async updateContentUrl(content, title) {
      try {
        const res = await updateContent ({
          contentId: this.$store.state.currentContentId,
          content: content,
          title: title
        })
        console.log(res)
      } catch(err) {
        console.log(err)
      }            
    },
     async updateContentUrl() {
      try {
        const res = await delectContent ({
          contentId: this.$store.state.currentContentId
        })
        console.log(res)
      } catch(err) {
        console.log(err)
      }            
    },
    // api ENd
    releaseContent() {
      
    },
    // 更新文章
    upadataContent(val, render){
      let str = render 
      let title = str.match(/<\/a>(\S*)<\/h1>/)[1]
      this.updateContentUrl(val ,title)
    },
    DelecteContent() {
      this.updateContentUrl()
    }
  }
}
</script>
