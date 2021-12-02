<template>
  <div class=''>
    env配置: {{process}}
  </div>
</template>

<script>
export default {
  name: 'env',
  components: {},
  props: {},
  data() {
    return {
      process: {}
    }
  },
  computed: {},
  watch: {},
  created() {
    // console.log('env配置: ', process.env);
    this.process = process.env
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>