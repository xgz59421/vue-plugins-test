<template>
  <div class="container">
    <div id="qrcodeImg" class="qr"></div>
  </div>
</template>


<script>
import QRCode  from "qrcodejs2"
export default {
  mounted() {
    this.qrcode();
  },
  methods: {
    qrcode(){
      var url = 'www.baidu.com'
      url = ''
      var qrcode = new QRCode('qrcodeImg', {
        width: 128,
        height:128,
        text: 'hello word', // 二维码地址
        colorDark: '#000',
        colorLight: '#fff'
      });
      qrcode.clear(); //清除二维码
      qrcode.makeCode(url); //生成另一个新的二维码
    }
  },
}
</script>

<style scoped>
.qr{
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
</style>