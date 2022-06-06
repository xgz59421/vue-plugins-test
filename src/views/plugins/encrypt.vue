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
    aes() {
      console.log('--------aes-------')
      let ciphertext = CryptoJS.AES.encrypt('xxxxxbbbbbcccc', this.key).toString()
      // Decrypt
      let bytes  = CryptoJS.AES.decrypt(ciphertext, this.key)
      let originalText = bytes.toString(CryptoJS.enc.Utf8)
      console.log(originalText)
    },
    md5() {
      console.log('--------md5-------')
      console.log(md5(this.key))
      console.log(md5(this.key))
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