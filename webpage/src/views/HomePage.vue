<style lang="less" scoped>
.Slide2{
  background: rgb(76,179,127);
}
.swiper-container, 
.swiper-slide { 
  height: 100vh;
}
.swiper-pagination{
  position: relative;
  top: -50%;
  margin-left: 30px;
  width: 40px;
}
.line{
  width: 100vw;
  height: .2vh;
  background: grey;
}
.pre{
  background: url('../assets/gamersky_07origin_13_20194618926B.jpg');
  background-size: cover;
  width: 100vw;
  height: 96vh;
  position: relative;
  overflow: hidden;
  .pre-box{
    margin-top: 30vh;
    text-align: center;
    .pre-title{
      color: white;
      font-size: 30px;
      font-family: "STKaiti"!important;
      font-weight: 800;
    }
    .pre-text{
      color: white;
      font-family: '黑体';
      font-weight: 800;
      margin-top: 20px;
    }
    .pre-btn{
      background: rgb(39, 129, 238);
      color: white;
      font-size: 12px;
      width: 280px;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      margin-top: 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    .pre-btn:hover{
      background: rgb(91, 152, 226);
    }
    .login-btn{
      background: rgb(10, 187, 115);
      opacity: 0;
      position: absolute;
      left: 50%;
      margin-left: -140px;
      height: 40px;
    }
    .loging{
      background: rgb(150, 187, 115);
      color: white;
      font-size: 12px;
      width: 280px;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      margin-top: -40px;
      border-radius: 5px;
    }
    .login-btn:hover{
      background: rgb(90, 187, 115);
    }
    .fadeAnimation{
      animation: fadeAnimation .5s alternate forwards;
    }
    @keyframes fadeAnimation {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    .loginAnimation{
      animation: loginAnim .5s alternate forwards .4s;
    }
    @keyframes loginAnim {
      0% {
        opacity: 0;
        margin-top: 0px;
      }
      100% {
        opacity: 1;
        margin-top: -40px;
      }
    }
    .pre-form{
      width: 280px;
      position: absolute;
      margin-top: 10px;
      opacity: 0;
      left: 20%;
      .pre-form-inp{
        text-align: center;
        width: 280px;
        height: 40px;
        line-height: 40px;
        background: white;
        border-radius: 5px;
        margin: 10px 0;
      }
      input{
        background: none;
        outline: none;
        border: none;
        width: 260px;
        line-height: 35px;
      }
    }
    .pre-form-animation{      
      animation: formAnim .8s alternate forwards .5s;
    }
    @keyframes formAnim {
      from { left: 20%; margin-left: 0px; opacity: 0;}
      to { left: 50%; margin-left: -140px; opacity: 1;}
    }
  }
  .footer{
    color: white;
    font-size: 10px;
    position: absolute;
    width: 98vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 50%;
    margin-left: -49vw;
    bottom: 6px;
    .footer-right{
      display: flex;
      align-items: center;
      .footer-right-profile{
        margin-left: 4px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.next{
  height: 3.8vh;
  width: 100vw;
  background:  rgb(76,179,127);
  color: white;
  line-height: 3.8vh;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
}
.errorBox{
  font-size: .8rem;
  color: white;
}
</style>
<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="Slide1">
        <section class="pre">
          <div class="pre-box">
            <div class="pre-title">橘子叔 爱吃橘子</div>
            <div class="pre-text">
              <div>做人嘛，就是开心咯</div>
              <div>但，要有底线</div>
            </div>
            <div class="pre-btn" :class="ifTest ? 'fadeAnimation' : ''" @click="navMain">
              看文章
            </div>
            <div v-if="openLoading" class="pre-btn login-btn" :class="ifTest ? 'loginAnimation' : ''" @click="login">
              登录
            </div>
            <div v-else class="loging"> 登录中.... </div>
            <div class="pre-form" :class="ifTest ? 'pre-form-animation' : ''">
              <div class="pre-form-inp">
                <input type="text" v-model="formUser.userName" placeholder="用户名，没有会自动注册哦">
                <div class="errorBox">
                  {{ checkUser.userNameErrorMsg }}
                </div>
              </div>
              
              <div class="pre-form-inp">
                <input type="password" v-model="formUser.password" placeholder="密码">
                <div class="errorBox">
                  {{ checkUser.passwordErrorMsg }}
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="footer-left">
              <div style="margin-bottom:5px;text-align:left"> <span>微信：17150780153</span></div>
              <div>© 吴雨村的邮箱是295563358@qq.com</div>
            </div>
            <div class="footer-right">
              <div>Wuyucun by Hugh</div>
              <div class="footer-right-profile">
                <img src="../assets/E74647DB346A1F0CDD681D3DD8E6A4D6.jpg">
              </div>
            </div>
          </div>
        </section>
        <section class="line"></section>
        <section class="next">
          吴雨村 是一个好人吗?
        </section>        
      </swiper-slide>
      <swiper-slide class="Slide2">
        <v-resume></v-resume>
        <v-texiao></v-texiao>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <popUp  v-bind:faterName="formUser"></popUp>
  </div>
</template>
<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import vResume from '../components/HomePage/resume'
import vTexiao from '../components/HomePage/canvas'
import popUp from '../common/popUp'
import { login, register } from '@/api/getData'
export default {
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop: false,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: false,
        // 设置轮播
        effect: 'slide',
        //滑动速度
        speed: 800,
        //滑动方向
        direction : 'vertical',
        // 滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function(){
            //console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            let text
            switch(index){
              case 0: text='壹'; break;
              case 1: text='贰'; break;
            }
            return '<span class="' + className + '" style="width:25px;height:25px;line-height:25px;background:grey;color:white;font-size:10px">' + text + '</span>'
          }
        }
      },
      ifTest: false,
      openLoading: true, // 是否已经点击了登录按钮
      formUser: {
        userName: 'moliy520',
        password: '123456'
      },
      checkUser: {
        userNameErrorMsg: '',
        passwordErrorMsg: ''
      }
    }
  },
  computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper
    }  
  }, 
  components: {
    swiper,
    swiperSlide,
    vResume,
    vTexiao,
    popUp
  },
  created() {
  },
  methods: {
    async getLoginData () {
      try {
        const resData = await login(this.formUser)
        console.log(resData)
        if(resData.data.code == 200) {
          this.$store.commit('getUserId', resData.data.data._id) 
          localStorage.setItem('getUserId', resData.data.data._id)
          this.$router.push({
            path: '/main/about'
          })
        } else if(resData.data.code === 500) {
            if( resData.data.msg === '账号不存在') {
              this.$store.commit('getIfPop', true)
              this.openLoading = true
          }
          else if( resData.data.msg === '密码错误哦，大哥') {
            alert('密码错误')
            this.openLoading = true
          }
        }
      } catch (error) {
        this.openLoading = true
        console.log(error)
      }
    },
    async getRegisterData () {
      try {
        const registerInfo = await register(this.formUser)
        console.log(registerInfo)
        this.openLoading = true
      } catch (error) {
        this.openLoading = true
        console.log('注册失败')
      }
    },
    navMain () {
      this.ifTest = true
    },
    login () {
      if(this.checkFrom()) {
        this.getLoginData()
        this.openLoading = false
      }
    },
    checkFrom() {
      let isOk = true
      if(this.formUser.userName.length < 5) {
        this.checkUser.userNameErrorMsg = '用户名不能小于5位'
        isOk = false
      } else {
        this.checkUser.userNameErrorMsg = ''
      }
      if(this.formUser.password.length < 6) {
        this.checkUser.passwordErrorMsg = '密码不能少于6位'
        isOk = false
      } else {
        this.checkUser.passwordErrorMsg = ''
      }

      return isOk
    }
  }
}
</script>
