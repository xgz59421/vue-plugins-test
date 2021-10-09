<template>
  <div id="app">
    <div id="nav">
      <router-link to="/prismjs">prismjs</router-link> |
      <router-link to="/vue-splitpane">vue-splitpane</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    // axios test
    // this.$http.get('http://jsonplaceholder.typicode.com/users')
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.error(err); 
    // })

    // mock test
    this.$http.get('/home/getData').then(res => {
      console.log(res);
    })
  },
}
</script>

// <style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// </style>
