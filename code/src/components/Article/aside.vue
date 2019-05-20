<style lang="less" scoped>
main{
  display: flex;
  align-items: center;
}
.menu{
  background: rgb(35, 37, 39);
  width: 160px;
  height: 94vh;
  color: white;
  .menu-item{
    display: flex;
    align-items: center;
    padding: 8px 0;
    cursor: pointer;
    overflow: hidden;
    .menu-item-value{
      margin-left: 3px;
      overflow: hidden;
      width: 120px;
    }
  }
  .menu-itemEd{
    background: rgb(61, 119, 192);
  }
}
.book{
  background: rgb(249,249,249);
  width: 220px;
  height: 94vh;
  overflow-y: auto;
  border-right: 1px solid rgb(191, 191, 191);
  .book-item{
    display: flex;
    transition: border .3s;
    cursor: pointer;
    .item-month{
      width: 50px;
      font-size: 14px;
      padding: 10px 5px;
    }
    .item-details{
      padding: 10px;
      border-bottom: 1px solid rgb(191, 191, 191);
      .item-detailsTime{
        font-weight: 800;
        font-size: 15px;
      }
      .item-detailsContent{
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
  .book-item:hover{
    border-left: 5px solid rgb(62, 119, 192);
  }
}
</style>
<template>
  <div class="container">
    <main>
      <section class="menu">
        <div class="menu-box">
          <div class="menu-item" :class="item.type ? 'menu-itemEd':''"
            v-for="(item, index) in menuData" :key="index" @click="navBook(item)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiewenzhang"></use>
            </svg>
            <div class="menu-item-value">{{item.name}}</div>
          </div>
          <div class="menu-item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiewenzhang"></use>
            </svg>
            <div class="menu-item-value">点击添加本子+</div>
          </div>
        </div>
      </section>
      <section class="book">
        <div class="book-box">
          <div
            @click="addArtitle"
            class="book-item">
            <div class="item-month">+</div>
            <div class="item-details">
              <div class="item-detailsTime">
                2019年6月21日 23:22
              </div>
              <div class="item-detailsContent">
                增加文章
              </div>
            </div>
          </div>
          <div
            @click="readArtitle"
            class="book-item" 
            v-for="(item, index) in 13" 
            :key="index">
            <div class="item-month">2月</div>
            <div class="item-details">
              <div class="item-detailsTime">
                2019年4月21日 23:22
              </div>
              <div class="item-detailsContent">
                按道理昨天就应该放假了。但是去融水
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuData: [
        {
          name:'check-me 日记',
          type: true
        },
        {
          name:'nodeJs学习笔记',
          type: false
        },
        {
          name:'随记住',
          type: false
        },
        {
          name:'微信小程序开发笔记',
          type: false
        },
        {
          name:'check-me 日记',
          type: false
        },
      ]
    }
  },
  methods: {
    readArtitle() {
      this.$router.push({
        path: '/main/article/readArticle'
      })
    },
    addArtitle() {
      this.$router.push({
        path: '/main/article/writeArticle'
      })
    },
    navBook(val) {
      console.log(val)      
      this.menuData.forEach(element => {
        element.type = false
      }) 
      val.type = val.type ? false : true      
    }
  }
}
</script>
