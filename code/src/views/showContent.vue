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
    background: red;
  }
  .content-box{
    margin-top: 15px;
    .content-item{
      width: 600px;
      height: 140px;
      backgroun: white;
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
  height: 600px;
  background: gainsboro;
}
footer{
  width: 960px;
  height: 140px;
  margin: 0 auto;
  background: gray;
  margin-top: 80px;
}
</style>
<template>
  <div>
    <main class="container">
      <article>
        <section>
          <div class="shuffling-box"></div>
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
                  <img src="https://upload-images.jianshu.io/upload_images/10529221-b301582c1ea9a3a3.jpg" alt="">  
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

      </aside>
    </main>
    <footer>
      我是小尾巴
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '为什么吃主食容易胖！',
     preContent: `大家好！我是福爸，执业医师。专注体重管理和疾病营养治疗二十年。希望我的文章对您有用。
人体消耗的热量有50～60%来自于碳水化合物，所以一般把富含碳水化合物的食物称之为主食。主食品种丰富，有哪些主食吃了容易发胖呢？` 
    }
  }
}
</script>
