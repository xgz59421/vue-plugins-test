<template>
  <div>
    <h3>vue-splitpane</h3>
    <div>vue-splitpane 在页面展示一个或多个被分割的区块</div>
    
    <split-pane
      v-on:resize="resize"
      :min-percent="20"
      :default-percent="50"
      split="vertical"
    >
      <template slot="paneL">
        <div class="border"> A </div>
      </template>
      <template slot="paneR">
        <div class="border"> B </div>
      </template>
    </split-pane>

    <!-- 嵌套 -->
    <!-- <split-pane
      v-on:resize="resize"
      :min-percent="20"
      :default-percent="30"
      split="vertical"
    >
      <template slot="paneL"> A </template>
      <template slot="paneR"> B </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneR" > C </template>
          <template slot="paneR" > D </template>
          <template slot="paneR" > E </template>
        </split-pane>
      </template>
    </split-pane> -->
  </div>
</template>

<script>
import splitPane from "vue-splitpane";
export default {
  name: "vue-splitpane",
  components: {
    splitPane,
  },
  methods: {
    resize() {
      console.log('resize');
    },
  },
};
</script>

<style scoped>
  .border {
    border: 1px solid red;
  }
</style>