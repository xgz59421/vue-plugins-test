<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/prismjs">prismjs</router-link> |
      <router-link to="/vue-splitpane">vue-splitpane</router-link>
    </div> -->
    <!-- <router-view/> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
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
