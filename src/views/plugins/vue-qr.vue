<template>
  <div class="container">
    <vue-qr :text="appSrc"
      :bgSrc='bgSrc' :size="200" class="qr"
      colorLight="#fff" 
      :logoSrc="logoSrc" :logoScale="100"
      :callback="test" qid="testid"
      ></vue-qr>
  </div>
</template>


<script>
import vueQr from 'vue-qr'
// 常用属性:
// text	二维码内容
// size	二维码宽高大小，因为是正方形，所以设一个参数即可
// margin	默认边距20px，不喜欢的话自己设为0
// colorDark	实点的颜色，注意要和colorLight一起设置才有效
// colorLight	空白的颜色，注意要和colorDark一起设置才有效
// bgSrc	嵌入背景图地址，没什么卵用，不建议设置
// logoSrc	二维码中间的图，这个是好东西，设置一下显得专业点
// logoScale	中间图的尺寸，不要设太大，太大会导致扫码失败的
// dotScale	那些小点点的大小，这个也没什么好纠结的，不建议设置了
export default {
  components:{
    vueQr
  },
  data() {
    return {
      appSrc:'www.baidu.com',
      bgSrc:'',
      logoSrc: require('@/assets/img/icon_head.png'),
      // logoSrc:'',
    }
  },
  methods: {
    test(uri, id){
      // console.log(url, id);
    }
  },
}
</script>

<style scoped>
  .container{
    text-align: center;
  }
  .qr{
    width: 300px;
    height: 300px;
  }
</style>

