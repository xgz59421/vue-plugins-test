<template>
  <div>
    <h3>整数输入框</h3>
      <int-input v-model="inputdata" style="width: 260px"></int-input>
  </div>
</template>

<script>
export default {
  name: "IntInputExample",
  data() {
    return {
      inputdata: ''
    }
  },
};
</script>
