<template>
  <pre class='line-numbers'>
    <code :class="language" v-text="code"></code>
  </pre>
</template>

<script>
import Prism from 'prismjs'
export default {
  props: {
    lang: {
      type: String,
      default: 'html'
    },
    code: {
      type: String
    }
  },
  data() {
    return {
      language: 'language-' + this.lang
    }
  },
  created() {
    Prism.highlightAll()
  },
  methods: {
    updateCode: function () {
      this.$nextTick(()=>{
        Prism.highlightAll()
      })
    }
  },
  mounted() {
    this.updateCode()
  },
  watch: {
    code: {
      handler: function () {
        this.updateCode()
        return this.code
      }
    }
  }
}
</script>

<style scoped></style>