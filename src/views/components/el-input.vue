<template>
  <div>
    <h3>普通输入框</h3>
      <normal-input v-model="inputdata" style="width: 260px"></normal-input>
  </div>
</template>

<script>
export default {
  name: "InputExample",
  data() {
    return {
      inputdata: ''
    }
  },
};
</script>

<style scoped></style>