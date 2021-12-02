<template>
  <div>
    <p class="text">{{count}}</p>
    <button class="btn" @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    add(){
      this.count++
    }
  },
}
</script>

<style>
  .text{
    color: red;
    font-size: 2rem;
  }
  .btn{
    background: burlywood;
    padding: 10px;
    font-size: 2rem;
  }
</style>