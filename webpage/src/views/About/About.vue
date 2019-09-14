<style lang="less" scoped>
main{
  max-width: 760px;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  .aboutMe-title{
    border-bottom: 1px dotted rgb(204, 204, 204);
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .aboutME-title-edite{
      border: 1px solid rgb(204, 204, 204);
      font-size: 15px;
      padding: 1px 10px;
      border-radius: 3px;
      cursor: pointer;
    } 
    .aboutME-title-edite:active{
      background: rgb(119, 119, 119);
    }
    .aboutME-title-edite:hover{
      background: rgb(204, 204, 204);
    }
    .title-cn{
      font-weight: 800;
      margin-right: 4px;
    }
    .title-zn{
      font-weight: 800;
      color: rgb(184, 184, 184);
    }
  }
  .aboutMe-Main{
    transition: all .3s;
  }
  .aboutMe-Main-hide{
    margin-left: 50px;
    opacity: 0;
    height: 100px;
    overflow: hidden;
  }
  .aboutMe-edite{
    position: absolute;
    top: 60px;
    opacity: 0;
    left: -100px;
    transition: all .6s;
  }
  .aboutMe-edite-show{
    opacity: 1;
    left: 0;
    
  }

}
</style>

<template>
  <div class="about">
    <main>
      <section class="aboutMe">
        <div class="aboutMe-title">
          <div>
            <span class="title-cn">关于我</span>
            <span class="title-zn">/ About Me</span>
          </div>
          <div class="aboutME-title-edite" >
            <span v-if="isEdite" @click="handleEdite(1)">编辑</span>
            <span v-else @click="handleEdite(2)">返回</span>
          </div>
        </div>
      </section>
      <section class="aboutMe-Main"  :class="{'aboutMe-Main-hide':!isEdite}">
        <v-aboutValue :faterAboutMe="aboutMeData"></v-aboutValue>
      </section>
      <section class="aboutMe-edite" :class="{'aboutMe-edite-show':!isEdite}">
        <v-aboutEdite></v-aboutEdite>
      </section>
    </main>
  </div>
</template>
<script>
import { aboutMe } from '@/api/getData'
import vAboutEdite from './components/About-edite.vue'
import vAboutValue from './components/About-value.vue'
export default {
  data () {
    return {
      isEdite: true,
      getAboutMeData: {
        userId: this.$store.state.userId
      },
      aboutMeData: {
        isGet: false
      }
    }
  },
  // vAboutEdite
  components: {
    vAboutEdite,
    vAboutValue
  },
  created() {
    console.log('*******获取关于我的内容********')
    this.getAbout()
  },
  methods: {
    // api start
    async addAbout() {
      try {
        let resData = await aboutMe.addAboutMe(this.addAboutMeData)
        console.log(resData)
        
      } catch (error) {
        console.log(error)
      }
    }, 
    async getAbout() {
      try {
        let resData = await aboutMe.getAboutMe(this.getAboutMeData)
        console.log(resData)
        this.aboutMeData =resData.data.data[0] 
      } catch (error) {
        console.log(error)
      }
    },
    // api end
    handleEdite(val) {
      console.log(val)
      this.isEdite = this.isEdite ? false : true
    }
  }
}
</script>
