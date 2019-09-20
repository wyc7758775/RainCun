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
  </div>
</template>
<script>
import { addContent, getConentList, updateContent} from '@/api/getData'

export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    // api start
    async updateContentUrl(content, title) {
      try {
        const res = await updateContent ({
          contentId: this.$store.state.newConetentId,
          content: content,
          title: title
        })
        if(res.data.code === 200) {
           this.getConentListAuto()
        }
      } catch(err) {
        console.log(err)
      }            
    },
    async getConentListAuto() {
      try{
        const res = await getConentList({
          bookId: this.$store.state.currentBookId
        })
        if(res.data.code === 200) {
          let arTitleMenu = res.data.data
           arTitleMenu.forEach(item => {
            let time = new Date(arTitleMenu[0].createAt).getMonth() + 1
            item.createAtMonth = time
          })
          this.$store.commit('UpdataArTitleMenu', arTitleMenu)
        }
      } catch(err) {
      }            
    },
    // api End
    saveArtitle(val, render){
      let str = render 
      let title = str.match(/<\/a>(\S*)<\/h1>/)[1]
      this.updateContentUrl(val, title)
    },
  }
}
</script>
