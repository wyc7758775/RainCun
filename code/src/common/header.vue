<style lang="less" scoped>
main{
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(192, 194, 199);
  .menu{
    display: flex;
    align-items: center;
    .logo{
      font-size: 30px;
      font-family: 'STKaiti';
    }
    .menu-box{
      margin-left: 100px;
      display: flex;
      align-items: center;
      .menue-item{
        margin-right: 30px;
        cursor: pointer;
        width: 75px;
        position: relative;
        border-bottom: 2px solid rgb(192, 194, 199);
        .icon{
          font-size: 20px;
          margin-right: 5px;
        }
        .line{
          height: 2px;
          width: 75px;
          z-index: 1111;
          margin: 0 auto;
          transition: width .5s;
          background: transparent;
          height: 100%;
          position: absolute;
          border-bottom: 2px solid  rgb(64, 71, 86);
          top: 0;
        }
        .line:hover{
          width: 0px;
        }
        span{
          color: rgb(192, 194, 199);
        }
      }
    }
  }
}
.header{
  width: 100%;
  height: 6vh;
  // padding: 5px 0;
  background: rgb(64, 71, 86);
  display: flex;
  align-items: center;
}
.portrait{
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  img{
    width: 100%;
    height: 100%;
  }
}
.search{
  background: rgb(97, 102, 115);
  padding: 4px 10px;
  border-radius: 5px;
  margin-left: 20px;
  input{
    border: none;
    background: none;
    outline: none;
  }
  input::-webkit-input-placeholder{
    color: rgb(179, 182, 187);
  }
}
</style>
<template>
  <div>
    <div class="header">
      <main>
        <section class="menu">
          <div class="logo">
            RainCun
          </div>
          <div class="search">
            <input type="text" placeholder="search blog">
          </div>
          <div class="menu-box">
            <div 
              class="menue-item" 
              v-for="(item, index) in menue" 
              :key="index">
              <router-link :to="item.label">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.iconName"></use>
                </svg>
                <span>{{item.name}}</span>
                <div class="line"></div>  
              </router-link>                    
            </div>
          </div>
        </section>
        <section class="portrait">
          <div class="portrait" @click="logout">
            <img src="../assets/E74647DB346A1F0CDD681D3DD8E6A4D6.jpg" alt="大哥">
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menue: [
        {
          iconName: '#icon-xiewenzhang',
          name: '文章',
          label: '/main/article'
        },{
          iconName: '#icon-liuyan',
          name: '留言',
          label: '/main/leaveMsg'
        },{
          iconName: '#icon-xiangce',
          name: '相册',
          label: '/main/about'
        },{
          iconName: '#icon-iconzhengli-',
          name: '关于我',
          label: '/main/about'
        },
      ]
    }
  },
  methods: {
    logout () {
      this.$router.replace({ path: '/' })
    }
  }
}
</script>
