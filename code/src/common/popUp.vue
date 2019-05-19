<style lang="less" scoped>
.screen{
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(11,11,11,.5);
}
.content{
  background: white;
  width: 400px;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  top: 20%;
  left: 50%;
  margin-top: -60px;
  margin-left: -200px;
  -webkit-z-index: 9999;
  -moz-z-index: 9999;
  -ms-z-index: 9999;
  -o-z-index: 9999;
  z-index: 9999;
  .content-title{
    font-weight: 800;
  }
  .content-text{
    font-size: 14px;
    margin: 10px 0;
    .iconfont{
      margin-right: 10px;
    }
  }
  .content-btn{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction:  row-reverse;
    .item-btn{
      text-align: center;
      padding: 5px 15px;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
    }
    .content-btn-confirm {
      background: rgb(39, 129, 238);
      color: white;
    }
  }
}
.contentpre{
  animation: preAniamtion 1s alternate forwards;
}
@keyframes preAniamtion {
  from { opacity: 0; }
  to { opacity: 1; }
}
.contented{
  animation: enAniamtion 1s alternate forwards;
}
@keyframes enAniamtion {
  from { opacity: 1; }
  to { opacity: 0; }
}
</style>
<template>
  <div class="container" v-if="faterName">
    <div class="screen">      
    </div>
    <main>
      <section class="content" :class="faterName ? 'contentpre':''" 
      :style="{animation:checkType?' enAniamtion 1s alternate forwards;':'none'}">
        <div class="content-title">
          {{ title }}
        </div>
        <div class="content-text">
          <i class="iconfont" :class="iconName"></i>
          <span> {{ content }} </span>
        </div>
        <div class="content-btn">          
          <div class="content-btn-confirm item-btn" @click="register">确定</div>
          <div class="content-btn-false item-btn" @click="faterName = false;checkType = true">取消</div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { register } from '@/api/getData'

export default {
  data () {
    return {
      checkType: false,
      title: '提示',
      iconName: 'icon-nianling',
      content: `该用户不存在，时候根据当前输入的用户名和密码注册用户？
      注：请妥善保管好你的的密码，吴雨村大哥把密码加密了，也没法知道你的密码哦`
    }
  },
  props:[
    'faterName'
  ],
  created() {
    console.log(this.faterName)
  },
  methods: {
    async getRegisterData (formUsre) {
      try {
        const registerInfo = await register(formUsre)
        console.log(registerInfo)
        if(registerInfo.data.code === 200){
          this.$router.push({
            path: '/main'
          })
        } else {
          console.log('注册失败')
        }
      } catch (error) {
        console.log('注册失败')
      }
    },
    register() {
      let formUsre = {
        username: 'moliy520',
        password: '123456'
      }
      this.getRegisterData(formUsre)
    }
  }
}
</script>
