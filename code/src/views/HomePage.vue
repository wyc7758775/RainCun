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
      background: rgb(91, 152, 226);;
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
              <div>做人嘛，就是开始咯</div>
              <div>但，要有底线</div>
            </div>
            <div class="pre-btn" @click="navMain">
              看文章
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
          吴雨村 是一个好人吗？
        </section>        
      </swiper-slide>
      <swiper-slide class="Slide2">
        <v-resume></v-resume>
        <v-texiao></v-texiao>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import vResume from '../components/HomePage/resume'
import vTexiao from '../components/HomePage/canvas'
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
              case 2: text='叁'; break;
              case 3: text='肆'; break;
              case 4: text='伍'; break;
            }
            return '<span class="' + className + '" style="width:25px;height:25px;line-height:25px;background:grey;color:white;font-size:10px">' + text + '</span>'
          }
        }
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
    vTexiao
  },
  methods: {
    navMain () {
      this.$router.push({
        path: '/main'
      })
    },
  }
}
</script>
