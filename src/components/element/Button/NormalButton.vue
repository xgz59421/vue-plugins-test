<template>
  <el-button v-bind="$attrs" v-on="$listeners">
    <slot><p>默认按钮</p></slot>
  </el-button>
</template>

<script>
export default {
  name: 'NormalButton',
}
</script>
