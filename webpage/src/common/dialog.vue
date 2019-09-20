<style lang="less" scoped>
.screen{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(10, 10, 10,.8);
  z-index: 9999;
}
.dialog{
  position: absolute;
  width: 340px;
  background: white;
  border-radius: 5px;
  z-index: 99999;
  top: 30%;
  left: 50%;
  margin-top: -100px;
  margin-left: -170px;
  padding: 20px 10px;
  animation: fadeAnimation .3s alternate forwards;
}
@keyframes fadeAnimation {
      from { opacity: 0; margin-top: -200px}
      to { opacity: 1; margin-top: -100px }
    }
.dialog-header{
  padding-left: 10px;
}
.dialog-main{
  padding: 30px 20px;
  font-size: .9rem;
}
.dialog-handle{
  display: flex;
  flex-direction: row-reverse;
  .handle-item{
    width: 65px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: .8rem;
    border-radius: 5px;
    border: 1px solid rgba(100, 100, 100,.5);
    cursor: pointer;
  }
  .dialog-handle-confirm{
    margin: 0 20px;
    background: rgb(62, 119, 192);
    border: 1px solid rgb(62, 119, 192);
    color: white;
  }
  .dialog-handle-confirm:hover{
    background: rgb(62,132,192);
  }
}

</style>
<template>
  <div>
    <div class="screen"></div>
    <div class="dialog">
      <div class="dialog-header">
        {{ this.$store.state.inpuContent.title }}
      </div>
      <div class="dialog-main">
        {{ this.$store.state.inpuContent.content }}
      </div>
      <div class="dialog-handle">
        <div class="dialog-handle-confirm handle-item" @click="confirm">确认</div>
        <div class="dialog-handle-cancel handle-item" @click="cancelDialog">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
import { delectContent, getConentList } from '@/api/getData'
export default {
  data () {
    return {
      type: '提示',
      content: '这是一段内容'
    }
  },
  methods: {
    // api start
    async DelecteContentUrl() {
      try {
        const res = await delectContent ({
          contentId: this.$store.state.currentContentId
        })
        if(res.data.code === 200) {
          this.$store.commit('modDialogShow', false)
          this.getConentListAuto()
        }
        console.log(res)
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
          this.arTitleMenu = res.data.data
          this.arTitleMenu.forEach(item => {
            let time = new Date(this.arTitleMenu[0].createAt).getMonth() + 1
            item.createAtMonth = time
          })
          
        }
        console.log(res)
      } catch(err) {
        console.log(err)
      }            
    },
    // api end
    cancelDialog() {
      console.log('什么情况')
      this.$store.commit('modDialogShow', false)
    },
    confirm() {
      let type = this.$store.state.inpuContent.type
      switch (type) {
        case '删除文章':
        this.DelecteContentUrl() 
        break
      }
      // this.DelecteContentUrl()
    }
  }
}
</script>
