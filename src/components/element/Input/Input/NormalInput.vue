<template>
  <div>
    <el-input 
      v-bind="$attrs" v-on="$listeners"
      :placeholder="placeholder ? placeholder : $t('pleaseEnterContents')"
      show-word-limit
    >
      <template slot="prefix">
        <slot name='prefix'></slot>
      </template>
      <template slot="suffix">
        <slot name='suffix'></slot>
      </template>
      <template slot="prepend">
        <slot name='prepend'></slot>
      </template>
      <template slot="append">
        <slot name='append'></slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'NormalInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>