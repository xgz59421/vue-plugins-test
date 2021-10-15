<template>
  <div>
    <h3>整数输入框</h3>
      <cnfu-int-input v-model="inputdata" style="width: 260px"></cnfu-int-input>
  </div>
</template>

<script>
export default {
  name: "CnfuIntInputExample",
  data() {
    return {
      inputdata: ''
    }
  },
};
</script>
