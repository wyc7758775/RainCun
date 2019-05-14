<style lang="less" scoped>
main{
  max-width: 760px;
  margin: 0 auto;
  margin-top: 20px;
  .aboutMe-title{
    border-bottom: 1px dotted rgb(204, 204, 204);
    padding: 10px 0;
    .title-cn{
      font-weight: 800;
      margin-right: 4px;
    }
    .title-zn{
      font-weight: 800;
      color: rgb(184, 184, 184);
    }
  }
  .abouteMe-value{
    padding: 20px;
    overflow: hidden;
    .value-img{
      float: left;
      border-radius: 50%;
      overflow: hidden;
      margin: 10px;
    }
    .value-text{
      p{
        margin-bottom: 15px;
        font-size: 15px;
        color: rgb(119, 119, 119);
        line-height: 30px;
      }
      li{
        margin-bottom: 12px;
        margin-left: 20px;
        font-size: 15px;
        color: rgb(119, 119, 119);
        a{
          color: rgb(85, 118, 184);
          margin-left: 10px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="about">
    <main>
      <section class="aboutMe">
        <div class="aboutMe-title">
          <span class="title-cn">关于我</span>
          <span class="title-zn">/ About Me</span>
        </div>
        <div class="abouteMe-value">
          <div class="value-img">
            <img src="../assets/E74647DB346A1F0CDD681D3DD8E6A4D6.jpg" alt="大姐">
          </div>
          <div class="value-text">
            <p v-for="(item, index) in aboutMeData" :key="index">{{ item }}</p>
          </div>        
        </div>
      </section>
      <section class="aboutContent">
         <div class="aboutMe-title">
          <span class="title-cn">关于内容</span>
          <span class="title-zn">/ About The Website</span>
        </div>
        <div class="abouteMe-value">
          <div class="value-text">
            <p v-for="(item, index) in aboutWebsit" :key="index">{{ item }}</p>
          </div>        
        </div>
      </section>
      <section class="subscribe">
         <div class="aboutMe-title">
          <span class="title-cn">订阅地址</span>
          <span class="title-zn">/ The RSS Address</span>
        </div>
        <div class="abouteMe-value">
          <div class="value-text">
            <p v-for="(item, index) in aboutRss" :key="index">
              {{item.name}} <a>{{item.value}}</a>
            </p>
          </div>        
        </div>
      </section>
      <section class="Socialbook">
         <div class="aboutMe-title">
          <span class="title-cn">社交信息</span>
          <span class="title-zn">/ Social Links</span>
        </div>
        <div class="abouteMe-value">
          <ul class="value-text">
            <li v-for="(item, index) in socialLinks" :key="index">
              {{item.name}}：  <a v-for="(item, index) in item.value" :key="index">{{item}}</a>
            </li>
          </ul>        
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      aboutMeData: [
        `My name is Wu YuCun(吴雨村). You can call me Hugh. I was born in 1992.`,
        `I have a bachelor's degree in computer science, graduated from BeiJing University Of YouDIAN and Technology, and now am employed by CarLife in GuangXing.`,
        `Life is colorful, this website was, is and will be the window which used to present the color of my life.`,
        `I like programming, reading book, surfing internet, basketBall, and I love making friends very much.`
      ],
      aboutWebsit: [
        `版权声明：「署名-非商业性使用-禁止演绎 3.0 国际」`,
        `所有文章非特别说明皆为原创。技术发展更迭迅猛，部分内容会进行修改，为保证信息与源同步，转载时请务必注明文章处处！吸血合作😊`,
        `文章皆为我个人感谢，写法，不代表所处的公司`,
        `本网页的结构都是从网上东拼西凑的，如有雷同实属正常。由于看到相似的太多，所以没有办法说出出自哪里。`,
        `关于我部分仿造自 @http://www.barretlee.com/rss2.xml`
      ],
      aboutRss: [
        {
          name: '本网站 RSS 订阅地址：',
          value: 'http://xxxxxx/res2.html'
        },
        {
          name: '博客源码：',
          value: 'https://gitee.com/RainWu/RainCun' 
        }
      ],
      socialLinks: [
        {
          name: 'Github',
          value: [
            'https://github.com/wyc7758775'
          ]
        },
        {
          name: 'Social',
          value: [
            '新浪微博','|','Twitter','|' ,'知乎'
          ]
        },
        {
          name: 'E-mail',
          value: [
            'q295563358@gmail.com'
          ]
        }
      ]
    }
  }
}
</script>
