<style lang="less" scoped>
 .aboutMe-title{
    border-bottom: 1px dotted rgb(204, 204, 204);
    padding: 10px 0;
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
  .inputs{
    display: flex;
    align-items: center;
    font-size: 15px;
    .input-name{
      padding: 5px;
      width: 80px;
    }
    .input-outline{
      margin-left: 20px;
      padding: 5px;
      border-bottom: 1px solid rgba(119, 119, 119, .8);
    }
    textarea{
      border: none;
      background: none;
      outline: none;
      font-size: 15px;
      resize: none;
    }
    input{
      border: none;
      background: none;
      outline: none;
      font-size: 15px;
      width: 400px;
    }
  }
  .about-social{
    margin-top: 30px;
  }
  .btn{
    border-radius: 10px;
    padding: 5px 10px;
    border: 1px solid rgb(119, 119, 119);
    width: 200px;
    text-align: center;
    margin: 0 auto;
    margin-top: 50px;
    cursor: pointer;
  }
  .btn:hover{
    background: rgb(204, 204, 204);
  }
</style>
<template>
  <div>
    <main>
      <section class="about-me">
        <div class="abouteMe-value">
          <div class="value-text">
            <div class="inputs">
              <div class="input-name">姓名/生日</div>
              <div class="input-outline">
                <textarea  cols="50" rows="3" v-model="addAboutMeData.aboutMeVal[0]"></textarea>
              </div>
            </div>
            <div class="inputs">
              <div class="input-name">学校/出身</div>
              <div class="input-outline">
                <textarea  cols="50" rows="3" v-model="addAboutMeData.aboutMeVal[1]"></textarea>
              </div>
            </div>
            <div class="inputs">
              <div class="input-name">目的/想法</div>
              <div class="input-outline">
                <textarea  cols="50" rows="3" v-model="addAboutMeData.aboutMeVal[2]"></textarea>
              </div>
            </div>
            <div class="inputs">
              <div class="input-name">兴趣/爱好</div>
              <div class="input-outline">
                <textarea  cols="50" rows="3" v-model="addAboutMeData.aboutMeVal[3]"></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about-social">
        <div class="aboutMe-title">
          <span class="title-cn">社交信息</span>
          <span class="title-zn">/ Social Links</span>
        </div>
        <div class="abouteMe-value">
          <div class="value-text">
            <div class="inputs">
              <div class="input-name">Github</div>
              <div class="input-outline">
                <input type="text" v-model="addAboutMeData.socialContact[0]">
              </div>
            </div>
            <div class="inputs">
              <div class="input-name">新浪微博</div>
              <div class="input-outline">
                <input type="text" v-model="addAboutMeData.socialContact[1]">
              </div>
            </div>
            <div class="inputs">
              <div class="input-name">Twitter</div>
              <div class="input-outline">
                <input type="text" v-model="addAboutMeData.socialContact[2]">
              </div>
            </div>
            <div class="inputs">
              <div class="input-name">知乎</div>
              <div class="input-outline">
                <input type="text" v-model="addAboutMeData.socialContact[3]">
              </div>
            </div>
            <div class="inputs">
              <div class="input-name">E-mail</div>
              <div class="input-outline">
                <input type="text" v-model="addAboutMeData.socialContact[4]">
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <section @click="handle" class="btn">确定</section>
  </div>
</template>
<script>
import { aboutMe } from '@/api/getData'

export default {
  data() {
    return {
      addAboutMeData : {
        userId: this.$store.state.userId,
        aboutMeVal: [],
        socialContact: []
      },
      getAboutMeData: {
        userId: this.$store.state.userId
      },
    }
  },
  created() {
    console.log(this.$store.state.userId)
    this.getAbout()
    // 
    
  },
  methods: {
    // api start
    async addAbout() {
      try {
        let resData = await aboutMe.addAboutMe(this.addAboutMeData)
        console.log(resData)
        if(resData.data.code === 200) {
          alert('成功')
          this.getAbout()
        }
        
      } catch (error) {
        console.log(error)
      }
      
    },
    async getAbout() {
      try {
        let resData = await aboutMe.getAboutMe(this.getAboutMeData)
        this.$store.commit('ModAboutValue', resData.data.data[0])
        this.addAboutMeData.aboutMeVal = this.$store.state.aboutValue.aboutMeVal
        this.addAboutMeData.socialContact = this.$store.state.aboutValue.socialContact
        console.log()
      } catch (error) {
        console.log(error)
      }
    },
    // api end
    handle() {
      console.log(this.addAboutMeData)
      this.addAbout()
    }
  }
}
</script>
