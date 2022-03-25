<template>
  <div class='container'>
    <div v-pre>
      <!-- import { library } from '@fortawesome/fontawesome-svg-core'
      import { fas } from '@fortawesome/free-solid-svg-icons'
      import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
      library.add(fas)
      Vue.component('font-awesome-icon', FontAwesomeIcon) -->
    </div>
    <font-awesome-icon class="icon" icon="fa-solid fa-0" />
    <font-awesome-icon class="icon" icon="fa-solid fa-1" />
    <font-awesome-icon class="icon" icon="fa-solid fa-2" />
    <font-awesome-icon class="icon" icon="fa-solid fa-apple-whole" />
  </div>
</template>

<style lang='less' scoped>
  .container {
    font-size: 18px;
    .icon {
      padding-right: 10px;
    }
  }
</style>