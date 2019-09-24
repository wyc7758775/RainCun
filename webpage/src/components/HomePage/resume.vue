<style lang="less" scoped>
ul,li{
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
}
main{
  display: flex;
  width: 880px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  position: absolute;
  height: 665px;
  top: 50%;
  left: 50%;
  margin-top: -332.5px;
  margin-left: -440px;
}
.resume-left{
  width: 450px;
  height: 665px;
  background: rgba(235,235,235,.8);
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px gray;
  .profile{
    display: flex;
    margin: 5px;
    background: rgb(209, 218,227);
    padding: 5px;
    padding-bottom: 20px;
    .profile-text{
      font-size: 13px;
      overflow: hidden;
      ul{
        margin-top: 20px;
        li{
          margin-top: 5px;
        }
      }
      span{
        margin-left: 4px;
      }
    }
    .porefile-img{
      font-size: 20px;
      text-align: center;
      margin-left: 80px;
      .porefile-img-box{
        width: 120px;
        height: 120px;
        margin-top: 10px;
        border: 2px solid white;
        font-size: 13px;
        margin-left: 18px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }  
}
.line{
  width: 450px;
  height: 10px;
  background: rgb(76,179,127);
  margin: 0 auto;
}
.introduce-item{
  padding: 10px;
  .introduce-title{
    margin-bottom: 5px;
    font-weight: 800;
  }
  .introduce-value{
    border-left: 2px solid rgb(59,127,195);
    margin-left: 5px;
    padding-left: 10px;
    .introduce-value-name{
      font-size: 13px;
      font-weight: 800;
    }
    .introduce-value-content{
      font-size: 12px;
      font-weight: 400;

    }
  }
}
.resume-right{
  width: 400px;
  height: 665px;
  background: rgba(235,235,235,.8);
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px gray;
}
</style>
<template>
  <div>
    <main>
      <div class="resume-left">
        <div class="profile">
          <div class="profile-text">
            <ul>
              <li v-for="(item, index) in prefileText" :key="index">
                <i class="iconfont" :class="item.nameIcon"></i>
                <span>{{ item.text }}</span>
              </li>
            </ul>
          </div>
          <div class="porefile-img">
            <div class="porefile-img-box">
              <img src="http://b185.photo.store.qq.com/psb?/V13wdY8N2PwrVZ/qJt3Z64vC6EhxysBQJyWZPZ8d.aqZFe9EEzpcEsuR6E!/b/dDjtSm4tPgAA&bo=gAKAAkAGQAYFCCs!&rf=viewer_4" alt="">
            </div>
            <div style="color:#e2c;margin-top:6px">主攻WEB前端</div>
          </div>
        </div>
        <div class="line"></div>
        <div class="introduce">
          <div class="introduce-item" v-for="(item, index) in introduceData" :key="index">
            <div class="introduce-title">
              <span>
                <i class="iconfont" :class="item.iconName"></i>
              </span>
              <span style="margin-left:10px">{{item.titleName}}</span>
            </div>
            <div class="introduce-value">
              <div v-for="(item, index) in item.value" :key="index">
                <span class="introduce-value-name">{{item.name}}：</span>
                <span  class="introduce-value-content">{{item.content}}</span>
              </div>
            </div>  
          </div>          
        </div>
      </div>
      <div class="resume-right">
        <div class="introduce">
          <div class="introduce-item" v-for="(item, index) in WorkExperience" :key="index">
            <div class="introduce-title">
              <span>
                <i class="iconfont" :class="item.iconName"></i>
              </span>
              <span style="margin-left:10px">{{item.type}}</span>
            </div>
            <div class="introduce-value">
              <div v-for="(item, index) in item.value" :key="index">
                <span class="introduce-value-name">{{item.name}}：</span>
                <span  class="introduce-value-content">{{item.content}}</span>
              </div>
            </div>  
          </div>          
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import xinxin from '../HomePage/canvas'

const prefileText = [
  {
    nameIcon: 'icon-gongzuojingyan',
    text: '吴雨村'
  },
  {
    nameIcon: 'icon-gongzuojingyan',
    text: '三年工作经验'
  },
  {
    nameIcon: 'icon-nianling',
    text: '26岁'
  },
  {
    nameIcon: 'icon-dizhi',
    text: '北京'
  },
  {
    nameIcon: 'icon-dianhua',
    text: '17150780153'
  },
  {
    nameIcon: 'icon-dianziyoujian',
    text: 'q295563358@gmail.com'
  },
]
const introduceData = [
  {
    iconName: 'icon-bag-case-work-need-job-ecacdf',
    titleName: '最近工作',
    value: [
      {
        name: '公司',
        content: '广西卡莱科技有限公司'
      },
      {
        name: '职位',
        content: '技术部主管'
      },
      {
        name: '负责工作',
        content: 'WEB前端开发 + 原生安卓混合开发 + 制定做工作计划'
      }
    ]
  },
  {
    iconName: 'icon-xueli',
    titleName: '最高学历',
    value: [
      {
        name: '学校',
        content: '邢台大学->北京邮电大学(没考上(´;ω;`))'
      },
      {
        name: '学历',
        content: '本科->硕士（没考上）'
      },
      {
        name: '专业',
        content: '计算机科学与技术-嵌入式方式-主攻神经病网络学'
      },
    ]
  },
  {
    iconName: 'icon-gongzuojingyan1',
    titleName: '技术栈',
    value: [
      {
        name: '总览',
        content: 'CSS + HTML + JS + python + C + Golang'
      },
      {
        name: '描述',
        content: '掌握VUE+ROURER+VUEX三件套 + NODEJS（KOA+芒果）+ 微信小程序 + Jq'
      },
    ]
  },
  {
    iconName: 'icon-gongzuojingyan',
    titleName: '自我评价',
    value: [
      {
        name: '乐学：',
        content: '以嵌入式实习生进入码农生活。机缘巧合之下，主攻WEB前端开发，也深深的喜欢上前端开发即见即可得的开发体验。私以为程序员是为了解决问题的工种，不应有工种的限制，所以也乐于学习后台，学习底层的东西'
      },
    ]
  },
]
const WorkExperience = [
  { 
    iconName: 'icon-gongzuojingyan1',
    type: '最复杂',
    value: [
      {
        name: '时间',
        content: '2017年6月-2017年11月'
      },
      {
        name: '项目名称',
        content: '爱智物联后台管理(http://www.aiwisdoms)'
      },
      {
        name: '职位',
        content: 'WEB前端开发'
      },
      {
        name: '技术栈',
        content: 'CSS+HTML+JQ+JQUI'
      },
      {
        name: '原因',
        content: '没有UI，没有项目需求，一个SASS平台，300个接口的调用、前端部分包括UI都我一个人负责。'
      },
      {
        name: '工作内容',
        content:  `
          1.整个网站的设计,需求分析,
          2.技术选项不是由我来的选的,
          3.提供物联网开发及云服务，服务于智能硬件，智能电器的sass平台
        `
      }  
    ]    
  },
  {
    iconName: 'icon-gongzuojingyan1',
    type: '最难',
    value: [
      {
        name: '时间',
        content: '2017年6月-2017年11月'
      },
      {
        name: '项目名称',
        content: '52嗨停-停车导航小程序'
      },
      {
        name: '职位',
        content: 'WEB前端开发'
      },
      {
        name: '技术栈',
        content: '微信小程序'
      },
      {
        name: '原因',
        content: '小程序坑太多、数据可视化确实难，渲染到界面可以，渲染得快就难了'
      },
      {
        name: '工作内容',
        content:  `
          1.整个网站的设计,需求分析,
          2.技术选项不是由我来的选的。麻痹,
          3.一个物联网SASS平台系统，为了连接个个平台
        `
      }  
    ]    
  },
  {
    iconName: 'icon-gongzuojingyan1',
    type: '最好',
    value: [
      {
        name: '时间',
        content: '2018年6月-2019年5月'
      },
      {
        name: '项目名称',
        content: '52教育项目-机构后台管理端（http://organization.52carlife.com）'
      },
      {
        name: '职位',
        content: 'WEB前端开发+技术总管'
      },
      {
        name: '技术栈',
        content: 'CSS+HTML+VUE+VUEX+AIOXS+elementUI'
      },
      {
        name: '原因',
        content: '代码风格有了自己的偏好，组件化、函数封装'
      },
      {
        name: '工作内容',
        content:  `
          午托、幼儿园机构的管理后台。
        `
      }  
    ]    
  }
]
export default {
  data () {
    return {
      prefileText: prefileText,
      introduceData: introduceData,
      WorkExperience: WorkExperience
    }   
  },
  components: {
    xinxin
  }
}
</script>
