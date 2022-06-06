<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/prismjs">prismjs</router-link> |
      <router-link to="/vue-splitpane">vue-splitpane</router-link>
    </div> -->
    <!-- <router-view/> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
  import i18n from '@utils/i18n/index.js'
  export default {
    data() {
      return {}
    },
    mounted() {
      console.log('i18n==', i18n)
      // axios test
      // this.$http.get('http://jsonplaceholder.typicode.com/users')
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.error(err); 
      // })



    },
  }
</script>

<style lang="less"></style>