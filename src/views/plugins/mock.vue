<template>
  <div class=''></div>
</template>

<script>
export default {
  name: '',
  mounted() {
    // mock test
    this.$http.get('/home/getData').then(res => {
      console.log(res);
    })
  },
}
</script>

<style scoped></style>