<template>
  <div class=''>
    <p>默认设置的 locale: 'zh'</p>
    <p v-t="'hello'"></p>
    <p>{{ $t('hello') }}</p>

    <p v-t="'pleaseSelect'"></p>
    <el-input v-model="input" :placeholder="$t('pleaseSelect')"></el-input>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      input: ''
    }
  },
  mounted() {
    console.log('local', this.$i18n.locale);
    console.log(this.$i18n.t('chinese'));
  }
}
</script>

<style scoped></style>