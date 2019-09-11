<style lang="less" scoped>
footer{
  margin: 0 auto;
  margin-top: 80px;
  border-top: 1px solid rgb(234, 236, 239);
  text-align: center;
  padding: 10px 0 20px 0;
  .logo{
    font-size: 80px;
  }
  .logo-value{
    span{
      color: rgb(76,179,127);
    }
  }
}
</style>
<template>
  <div>
    <footer>
      <div class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pikachu-"></use>
        </svg>
      </div>
      <div class="logo-value">Powered by <span>Wuyucun</span> </div>
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
