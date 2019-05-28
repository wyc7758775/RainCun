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
      height: 200px;
      background: white;
      border-bottom: 1px solid grey;
      padding-bottom: 20px;
      margin: 30px 0;
      .item-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
       .item-content{
         width: 450px;
         height: 160px;
         background: gold;
       }
       .item-img{
         width: 140px;
         height: 150px;
         background: goldenrod;
       }
      }
      .item-keys{
        width: 450px;
        height: 30px;
        background: green;
        margin-top: 5px;
      }
    }
    .viewMore{
      width: 600px;
      height: 50px;
      background: gray;
      border-radius: 20px;
      color: white;
      text-align: center;
      cursor: pointer;
      line-height: 50px;
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
                  <div class="item-content-title"></div>
                  <div class="item-content-preview"></div>
                </div>
                <div class="item-img"></div> 
              </div>
              <div class="item-keys"></div>
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
      
    }
  }
}
</script>
