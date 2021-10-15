<template>
  <div>
    <h3>普通输入框</h3>
      <cnfu-input v-model="inputdata" style="width: 260px"></cnfu-input>
  </div>
</template>

<script>
export default {
  name: "CnfuInputExample",
  data() {
    return {
      inputdata: ''
    }
  },
};
</script>

<style scoped></style>