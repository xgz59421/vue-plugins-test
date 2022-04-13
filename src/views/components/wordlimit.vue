<template>
  <div>
    <div>还可以输入{{wordlimit('words', 250)}}个汉字</div>
    <el-input v-model.trim="form.words" type="textarea" :rows="4" :cols="60" maxlength="500" @keyup="wordlimit('words', 250)" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          words: ''
        }
      }
    },
    methods: {
      wordlimit(key, maxLimit) {
        let length = 0
        let leftLength = 0
        let strArr = this.form[key].split('')
        let subStr = ''
        let reg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/
        let passFlag = true
        strArr.map(item => {
          if (passFlag) {
            if (reg.test(item)) {
              length++
            } else {
              length += 0.5
            }
            if (length > maxLimit) {
              passFlag = false
              this.$set(this.form, key, subStr)
            } else {
              subStr += item
            }
          }
        })
        leftLength = maxLimit - length
        return leftLength
      }
    },
  }
</script>

<style scoped></style>