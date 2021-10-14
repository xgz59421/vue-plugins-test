<template>
  <div>
    <el-row>
      <cnfu-button>默认按钮</cnfu-button>
      <cnfu-button type="primary">主要按钮</cnfu-button>
      <cnfu-button type="success">成功按钮</cnfu-button>
      <cnfu-button type="info">信息按钮</cnfu-button>
      <cnfu-button type="warning">警告按钮</cnfu-button>
      <cnfu-button type="danger">危险按钮</cnfu-button>
    </el-row>
    <!-- <el-divider/> -->
    <el-row>
      <cnfu-button icon="el-icon-search" circle></cnfu-button>
      <cnfu-button type="primary" icon="el-icon-edit" circle></cnfu-button>
      <cnfu-button type="success" icon="el-icon-check" circle></cnfu-button>
      <cnfu-button type="info" icon="el-icon-message" circle></cnfu-button>
      <cnfu-button type="warning" icon="el-icon-star-off" circle></cnfu-button>
      <cnfu-button type="danger" icon="el-icon-delete" circle></cnfu-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CnfuButtonExample",
};
</script>

<style scoped></style>