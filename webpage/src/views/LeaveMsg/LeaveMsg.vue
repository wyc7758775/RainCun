<style lang="less" scoped>
main{
  max-width: 760px;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  .header{
    border-bottom: 1px solid rgb(204, 204, 204);
    padding: 10px;
    font-size: 15px;
    font-weight: 800;
    .header-zn{
      padding-left: 8px;
      color: rgb(184, 184, 184);
    }
  }
  .oneselfMsg{
    margin-top: 10px;
    // padding:  10px 10px 40px 10px;
    padding: 10px;
    position: relative;
    .onselfMsg-btn{
      border: 1px solid rgb(204, 204, 204);
      font-size: 15px;
      padding: 1px 10px;
      border-radius: 3px;
      cursor: pointer;
      display: inline-block;
      position: absolute;
      right: 20px;
    }
  }
  .replyClient{
    margin-top: 30px;
    .replyClient-inp{
      border: 1px dotted gainsboro;
      padding: 20px;
      .inp{
        border: none;
        background: none;
        width: 100%;
        height: 50px;
        outline: none;
        resize: none;
      }
    }
    .replyClient-hanle{
      border: 1px solid rgb(204, 204, 204);
      font-size: 15px;
      padding: 1px 10px;
      border-radius: 3px;
      cursor: pointer;
      display: inline-block;
      position: absolute;
      right: 20px;
      margin-top: 5px;
    }
  }
  .replyList{
    margin-top: 30px;
    padding: 20px;
    .replyList-header{
      border-bottom: 1px solid rgb(204, 204, 204);
      padding: 10px;
      font-size: 15px;
      font-weight: 800; 
    }
    .replyList-content{
      padding: 0 10px;
      .replyList-item{
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        border-bottom: 1px dotted gainsboro;
        .item-headFile{
          width: 80px;
          height: 60px;
          margin-right: 10px;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 5px 5px gainsboro;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .item-value{
        width: 100%;
        .item-value-name{
          font-weight: 600;
          font-size: 15px;
          margin-right: 10px;
        }
        .item-value-tower{
          font-size: 12px;
          color: rgb(111, 111, 111);
        }
        .item-value-reply{
          margin: 10px 0;
          font-size: 14px;
          min-height: 60px;
        }
        .item-value-time{
          .item-value-item-value{
            font-size: 12px;
            color: rgb(50, 50,51);
          }
          .btn{
            font-size: 13px;
            padding: 1px 12px;
            border-radius: 3px;
            cursor: pointer;
            display: inline-block;
            margin-left: 10px;
          }
        }
        .item-value-child{
          width: 100%;
          padding: 10px 0;
          display: flex;
          border-top: 1px solid gainsboro;
          margin-top: 5px;
          .child-headImg{
            width: 50px;
            height: 40px;
            overflow: hidden;
            border-radius: 5px;
            box-shadow: 0 5px 5px gainsboro;
            img{
              width: 100%;
              height: auto;
            }
          }
          .child-content{
            margin-left: 10px;
            .child-content-value{
              font-size: 14px;
            }
            .child-content-time{
              font-size: 12px;
              color: rgb(50, 50,51);
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div>
    <main>
      <section class="header">
        <span class="header-cn">留言板</span>
        <span class="header-zn">/ Message board</span>
      </section>
      <section class="oneselfMsg">
        <div class="oneselfMsg-value">
          出发是最有意义的事情，去做就是了。
        </div>
        <!-- <div class="onselfMsg-btn">
          <span v-if="isEdite">编辑</span>
          <span v-else>保存</span>
        </div> -->
      </section>
      <section class="replyClient">
        <div class="replyClient-inp">
          <textarea class="inp" cols="30" rows="10" ></textarea>
        </div>
        <div class="replyClient-hanle">回复</div>
      </section>
      <section class="replyList">
        <div class="replyList-header">留言（200）</div>
        <div class="replyList-content">
          <div class="replyList-item" v-for="(item, index) in 4" :key="index">
            <div class="item-headFile">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbp8KTs-TvFcWj9FOPcm9VqBGeMD_E0XOiXoGiQUAAVOPL86UD-A">
            </div>
            <div class="item-value">
              <div>
                <span  class="item-value-name">madcap</span>
                <span  class="item-value-tower">第 157 楼</span>
              </div>
              <div class="item-value-reply">
                爸爸，请叫爸爸，叫我爸爸
              </div>
              <div class="item-value-time">
                <span class="item-value-item-value">2019-05-02 09:52</span>
                <span class="btn">回复</span>
              </div>
              <div class="item-value-child">
                <div class="child-headImg">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRM9Jo7P8igeOjCIo1B7_V8bASop4bWp-G-62y1OToL0jOGsvvpQ">
                </div>
                <div class="child-content">
                  <div class="child-content-value">
                    <span style="margin-right:5px">马达爬</span>
                    <span>哪里找的托</span>
                  </div>
                  <div class="child-content-time">
                    2019-08-91 09:30
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
     <v-footer></v-footer>
  </div>
</template>
<script>
import vFooter from '../../common/footer'

export default {
  name: 'LeaveMsg',
  data() {
    return {
      isEdite: true, // 自己的名言是否保留
    }
  },
  components: {
    vFooter
  },
}
</script>
