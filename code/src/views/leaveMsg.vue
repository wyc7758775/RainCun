<style lang="less" scoped>
.test{
  cursor: pointer;
}
</style>

<template>
  <div>
    <div class="test" @click="textLeaveMsg">我要回复</div>
  </div>
</template>
<script>
import { addLeaveMsg } from '@/api/getData'
export default {
  data () {
    return {
      
    }
  },
  methods: {
    async apiAddLeaveMsg(){
      try {
        const data = await addLeaveMsg()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    },
    
    textLeaveMsg() {
      this.apiAddLeaveMsg()
    }
  }
}
</script>
