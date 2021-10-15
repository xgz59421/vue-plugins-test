<template>
  <div>
    <h3>浮点输入框</h3>
    <cnfu-decimal-input
      v-model="inputdata"
      style="width: 260px"
      intLength="8"
      decLength="2"
    ></cnfu-decimal-input>

    <ul>
      <li>intLength: 整数位数</li>
      <li>decLength: 小数位数</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CnfuDecimalInputExample",
  data() {
    return {
      inputdata: "",
    };
  },
};
</script>
