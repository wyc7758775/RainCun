<style lang="less" scoped>
.mavonEditor{
  width: 100%;
  height: 100%;
}
.edtieBox{
  width: 100%;
  height: 94vh;
  overflow-y: auto;
}
</style>
<template>
  <div>
    <div class="edtieBox">
      <div class="mavonEditor">
        <mavon-editor  style="height:94vh" v-model="value" :scrollStyle="false" @save="saveArtitle"/>
      </div>
      
    </div>    
    <!-- <div @click="test">阿斯顿</div> -->
  </div>
</template>
<script>
import { addContent } from '@/api/getData'

export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    // api start
    async addContentHandle(render, title) {
      let that = this
      try{
        const res = await addContent({
          bookId: this.$store.state.currentBookId,
          content: render,
          title: title
        })
        console.log(res)
      } catch(err) {
        console.log(err)
      }            
    },
    // api End
    saveArtitle(val, render){
      console.log('我要保存')
      this.addContentHandle(render ,title)
    },
    test() {
      console.log(this.value)
      this.addContentHandle()
    }
  }
}
</script>
