<template>
  <ul>
    <li>md5 非对称加密</li>
    <li>aes 对称加密</li>
  </ul>
</template>

<script>
  import CryptoJS from 'crypto-js'
  import md5 from 'md5'
  export default {
    data() {
      return {
        key: 'abc123'
      }
    },
    created() {
      this.aes()
      this.md5()
    },
    methods: {
      encrypt(data, key, iv) {
        return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
          })
          .toString()
      },
      decrypt(data, key) {
        const decrypted = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        })
        return decrypted.toString(CryptoJS.enc.Utf8).toString()
      },
      aes() {
        console.log('--------aes-------')
        // 秘钥必须 16位
        const key = 'zhanghao12345678'
        // 偏移量 16位（不可随意修改，否则前后端加密解密可能失败）
        const  iv = '0000000000000000'
        let aes = this.encrypt('test123abc.', key, iv)
        console.log(aes)
        let originalText = this.decrypt(aes, key)
        console.log(originalText)
      },
      md5() {
        console.log('--------md5-------')
        console.log(md5(this.key))
        console.log(md5(this.key) == md5(this.key))
      }
    },
  }
</script>

<style scoped>
  li {
    font-size: 18px;
    padding: 5px 0;
  }
</style>