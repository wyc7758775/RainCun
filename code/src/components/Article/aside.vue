<style lang="less" scoped>
main{
  display: flex;
  align-items: center;
}
.menu{
  background: rgb(35, 37, 39);
  width: 160px;
  height: 94vh;
  color: rgb(222, 222, 222);
  .menu-item{
    display: flex;
    align-items: center;
    padding: 8px 0 8px 8px;
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
    justify-content: space-between;
    width: 210px;
    transition: border .3s;
    cursor: pointer;
    .item-month{
      width: 28px!important;
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
        width: 150px;
        overflow: hidden;
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
  .book-item:hover{
    border-left: 6px solid rgb(62, 119, 192);
  }
}
.addArtitle{
  text-align: center;
  width: 100%;
  height: 80px;
  line-height: 80px;
}
.addBook{
  width: 100%;
  padding-left: 30px;
}
.addBook-box{
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;  
  .addBook-inp{
    border-radius: 5px;
    background: rgb(55,55,55);
    text-align: center;
    padding: 0 6px;
  }
  input{
    background: none;
    border: none;
    height: 25px;
    color: rgb(222,222,222);
    outline: none;
  }
}
</style>
<template>
  <div class="container">
    <main>
      <section class="menu" @click="isAddBookBox = false">
        <div class="menu-box">
          <div class="menu-item" :class="item.type ? 'menu-itemEd':''"
            v-for="(item, index) in menuData" :key="index" @click="navBook(item)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-benzi"></use>
            </svg>
            <div class="menu-item-value" >{{item.bookName}}</div>
          </div>
           <div class="menu-item addBook-box" v-if="isAddBookBox" @click.stop>
              <div class="addBook-inp">
                <input type="text" v-model="bookName" placeholder="最好不超过10个字" @keyup.enter="KeyUpenter">  
              </div>              
          </div>
          <div class="menu-item" @click.stop="addBook">
            <div class="addBook">
              <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiahao"></use>
            </svg>
            添加
            </div>
          </div>
        </div>
      </section>
      <section class="book">
        <div class="book-box">
          <div
            @click="addArtitle"
            class="book-item">           
            <div class="addArtitle">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiewenzhang"></use>
              </svg>
              写文章
            </div>
          </div>
          <div
            @click="readArtitle(item)"
            class="book-item" 
            v-for="(item, index) in arTitleMenu" 
            :key="index">
            <div class="item-month">2月</div>
            <div class="item-details">
              <div class="item-detailsTime">
                {{item.createAt}}
              </div>
              <div class="item-detailsContent">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { addBook, getBookList, getConentList } from '@/api/getData'

export default {
  data () {
    return {
      menuData: [],
      arTitleMenu: [],
      isAddBookBox: false,
      bookName: ''
    }
  },
  created() {
    console.log('*********我要查看书本列表*********')
    console.log(this.$store.state.userId)
    this.getBookListHandle()
  },
  methods: {
    async addBookHandle() {
      try{
        const res = await addBook({
          userId: this.$store.state.userId,
          bookName: this.bookName
        })
        if(res.data.code === 200) {
          this.isAddBookBox = false
          this.getBookListHandle()
        } else {
          console.log('失败')
        }
      } catch(err) {
        console.log(err)
         this.isAddBookBox = false
      }            
    },
    async getBookListHandle() {
      try{
        const res = await getBookList({
          userId: this.$store.state.userId
        })
        if(res.data.code === 200) {
          res.data.data.forEach((item, index) => {
            item.type = false
          })
          console.log(res)
          res.data.data[0].type = true
          this.$store.commit('ModCurrentBookId', res.data.data[0]._id)
          this.getConentListAuto()
          this.menuData = res.data.data
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
          this.arTitleMenu = res.data.data
        }
        console.log(res)
      } catch(err) {
        console.log(err)
      }            
    },
    // 路由跳转
    readArtitle(val) {
      console.log(val)
      this.$store.commit('showCurrentContent', val.content)
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
      console.log(val._id)
      this.$store.commit('ModCurrentBookId', val._id)
      this.getConentListAuto()
      this.menuData.forEach(element => {
        element.type = false
      }) 
      val.type = val.type ? false : true      
    },
    // 添加本子
    addBook() {
      //this.addBookHandle()
      this.isAddBookBox = true
    },
    // 点击确认怎家
    KeyUpenter() {
      this.addBookHandle()
    }
  }
}
</script>
 