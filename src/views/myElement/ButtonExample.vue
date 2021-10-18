<template>
  <div>
    <el-row>
      <normal-button>默认按钮</normal-button>
      <normal-button type="primary">主要按钮</normal-button>
      <normal-button type="success">成功按钮</normal-button>
      <normal-button type="info">信息按钮</normal-button>
      <normal-button type="warning">警告按钮</normal-button>
      <normal-button type="danger">危险按钮</normal-button>
    </el-row>
    <!-- <el-divider/> -->
    <el-row>
      <normal-button icon="el-icon-search" circle></normal-button>
      <normal-button type="primary" icon="el-icon-edit" circle></normal-button>
      <normal-button type="success" icon="el-icon-check" circle></normal-button>
      <normal-button type="info" icon="el-icon-message" circle></normal-button>
      <normal-button type="warning" icon="el-icon-star-off" circle></normal-button>
      <normal-button type="danger" icon="el-icon-delete" circle></normal-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ButtonExample",
};
</script>

<style scoped></style>