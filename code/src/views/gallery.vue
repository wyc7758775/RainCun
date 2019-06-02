<style lang="less" scoped>
.gallery{
  max-width: 820px;
  margin: 0 auto;
  padding: 50px 0;
  .gallery-item{
    min-height: 300px;
    width: 100%;
    border-bottom: 1px solid rgb(222, 222, 222);
    padding-bottom: 30px;
    .gallery-item-time{
      color: rgb(100,100,100);
      font-weight: 800;
      padding: 20px 0;
      margin-left: 5px;
    }   
    .gallery-item-box{
        // column-count: 4;
        // column-gap: 0px;
        width: 820px;
        margin:  0 auto;
        overflow: hidden;
      .gallery-phone-item{
        width: 150px;
        height: 100px;
        margin: 2px;
        border: 1px solid grey;
        float: left;
        cursor: pointer;
      }
      .gallery-phone-item:hover{
        box-shadow: 0px 0px 20px  rgb(200, 200, 222);
      }
    }
  }
}
footer{
  height: 300px;
  border-top: 1px solid red;
}
aside{
  .uploadImg{
    position: fixed;
    right: 200px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    line-height: 60px;
    text-align: center;
    box-shadow: 0px 0px 20px gainsboro;
    top: 160px;
    cursor: pointer;
  }
  .uploadImg:hover{
    box-shadow: 0px 0px 5px gray;
  }
}
.uploadImgBtn{
  position: absolute;
  top: 6vh;
  left: 0;
}
.upload-Box{
  display: none;
}
</style>
<template>
  <div class="container">
    <aside>
      <div class="uploadImg">
        上传
      </div>
    </aside>
    <main class="gallery">
      <div class="gallery-item" v-for="(item, index) in 3" :key="index">
        <div class="gallery-item-time">2019-06-01</div>
        <div class="gallery-item-box">
          <div class="gallery-phone-item" v-for="(item, index) in 30" :key="index">
            <img src="" alt="我是橘子叔">
          </div>
        </div>
      </div>
    </main>
    <v-footer>
    </v-footer>
    <v-upload class="upload-Box"></v-upload>
  </div>
</template>
<script>
import vFooter from '../common/footer'
import vUpload from '../components/Gallrey/uploadImg'
export default {
  data () {
    return {

    }
  },
  components: {
    vFooter,
    vUpload
  }
}
</script>
// 第一期： 根据时间来排序