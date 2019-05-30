<style lang="less" scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 960px;
  margin-top: 30px;
}
article{
  width: 600px;
  height: auto;
  .shuffling-box{
    width: 600px;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    .Slide2{
      background: rgb(76,179,127);
      width: 100%;
      height: 100%;
    }
    .swiper-slide{
      height: 300px;
      background: gray;
      border-radius: 8px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .content-box{
    margin-top: 15px;
    .content-item{
      width: 600px;
      height: 140px;
      border-bottom: 1px solid rgb(240, 240, 240);
      padding-bottom: 20px;
      margin: 30px 0;
      .item-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
       .item-content{
         width: 450px;
         height: 110px;
         .item-content-title{
           font-size: 1.2rem;
           font-weight: 600;
           margin-bottom: 10px;
         }
         .item-content-preview{
          font-size: 0.9rem;
          line-height: 1.5rem;
          overflow:hidden;
          text-overflow:ellipsis; 
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
         }
       }
       .item-img{
         width: 140px;
         height: 110px;
         border-radius: 5px;
         overflow: hidden;
         position: relative;
         img{
           width: 200px;
           height: auto;
           margin-left: -100px;
           left: 50%;
           top: 50%;
           margin-top: -60px;
           position: absolute;
         }
       }
      }
      .item-keys{
        width: 450px;
        height: 30px;
        margin-top: 5px;
        display: flex;
        font-size: .9rem;
        color: gray;
        align-items: center;
        .item-key{
          margin-right: 10px;
        }
      }
    }
    .viewMore{
      width: 600px;
      height: 45px;
      background:  rgb(165,165,165);
      border-radius: 20px;
      color: white;
      text-align: center;
      cursor: pointer;
      line-height: 45px;
    }
    .viewMore:hover{
      background: rgb(128,128,128);
    }
  }
}
aside{
  margin-left: 50px;
  width: 300px;
  // 归档
  .pigeonhole{
    line-height: 50px;
  }
  // 小伙伴们
  .friends{
    .friends-title{
      color: rgb(150,150,150);
      font-size: 14px;
      padding: 10px 10px;
    }
    .frirend-item{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .item-profile{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .item-preInfo{
        .item-proInfo-name{
          font-size: 15px;
          font-weight: 800;
          line-height: 26px;
        }
        .item-proInfo-vale{
          display: flex;
          font-size: 13px;
          color: rgb(165,165,165);
          line-height: 26px;
        }
      }
    }
  }
}
footer{
  margin: 0 auto;
  margin-top: 80px;
  border-top: 1px solid rgb(234, 236, 239);
  text-align: center;
  padding: 10px 0 20px 0;
  .logo{
    font-size: 80px;
  }
  .logo-value{
    span{
      color: rgb(76,179,127);
    }
  }
}
</style>
<template>
  <div>
    <main class="container">
      <article>
        <section>
          <div class="shuffling-box">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide class="Slide1">
                <img src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="">
              </swiper-slide>
              <swiper-slide class="Slide2">
                <img src="https://upload.jianshu.io/admin_banners/web_images/4668/77e4329017294a607d78e74789afc6a22f4a6ebe.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="">
              </swiper-slide>
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
        </section>
        <section>
          <div class="content-box">
            <div class="content-item" v-for="(item, index) in 12" :key="index">
              <div class="item-box">
                <div class="item-content">
                  <div class="item-content-title">{{ title }}</div>
                  <div class="item-content-preview">
                    {{ preContent }}
                  </div>
                </div>
                <div class="item-img">
                  <img src="https://upload-images.jianshu.io/upload_images/5390551-f57780d0ad7e3799?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="">  
                </div> 
              </div>
              <div class="item-keys">
                <div class="item-keys-Quantity item-key">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yueduliang"></use>
                  </svg>
                  211
                </div>
                <div class="item-keys-nickName item-key">
                  最爱小柑橘
                </div>
                <div class="item-keys-comment item-key">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                  </svg>
                  110
                </div>
                <div class="item-key-like item-key">
                  <svg class="icon" aria-hidden="true" style="color:red">
                    <use xlink:href="#icon-aixin" style="color:red" ></use>
                  </svg>
                  2210
                </div>
              </div>
            </div>
            <div class="viewMore">
              阅读更多
            </div>
          </div>
        </section>
      </article>
      <aside>
        <section class="pigeonhole">
          归档 暂无
        </section>
        <section class="friends">
          <div class="friends-title">都是小公举</div>
          <div class="frirend-item" v-for="(item, index) in 8" :key="index">
            <div class="item-profile">
              <img src="https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp">
            </div>
            <div class="item-preInfo">
              <div class="item-proInfo-name">
                吴雨村
              </div>
              <div class="item-proInfo-vale">
                <div>写了200篇文章</div>
                <div>28.9喜欢</div>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </main>
    <footer>
      <div class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pikachu-"></use>
        </svg>
      </div>
      <div class="logo-value">Powered by <span>Wuyucun</span> </div>
    </footer>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      title: '为什么吃主食容易胖！',
     preContent: `大家好！我是福爸，执业医师。专注体重管理和疾病营养治疗二十年。希望我的文章对您有用。
人体消耗的热量有50～60%来自于碳水化合物，所以一般把富含碳水化合物的食物称之为主食。主食品种丰富，有哪些主食吃了容易发胖呢？` ,
      swiperOption: {
        notNextTick: true,
        //循环
        loop: false,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: true,
        // 设置轮播
        effect: 'slide',
        //滑动速度
        speed: 800,
        //滑动方向
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
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
  }
}
</script>
