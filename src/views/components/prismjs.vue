<template>
  <div style="height: 77%;padding-left: 0;">
    <h3>一个轻量级的，稳健的，优雅简洁的语法高亮插件</h3>
    <prism lang="html" :code='htmlCode'></prism>
    <prism lang="javascript" :code='jsCode'></prism>
  </div>
</template>

<script>
// import prism from '../components/prismjs'
import prism from '@/components/prismjs'
export default {
  name: '',
  components: {
    prism
  },
  props: {},
  data() {
    return {
      htmlCode: `<div class='btn'>这是一个html</div>`,
      jsCode: `
      function isObj(obj) {
        if (typeof obj!== 'object' || obj===null ) return false
        console.log(obj.constructor.name);
        console.log(typeof obj.constructor.name);
        return true
      }
      `
    }
  },
  mounted() {
    // console.log(prism);
  },
  methods: {},
}
</script>

<style scoped></style>