<template>
  <div>
    <el-input 
      v-bind="$attrs" v-on="$listeners"
      :placeholder="placeholder ? placeholder : $t('pleaseEnterContents')"
      show-word-limit
      v-model="curValue"
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
  name: 'CnfuIntInput',
  props: {
    placeholder: {type: String, default: ''},
    value: {type: [String, Number], default: ''}
  },
  data() {
    return {
      curValue: ''
    }
  },
  created() {
    this.curValue = 
      void 0 !== this.value && null !== this.value ? this.value.toString() : ''
  },
  watch: {
    curValue: function (t) {
      void 0!== t && null !== t && (
        this.curValue = t.toString().replace(/\D/g, '')), 
        this.$emit('input', this.curValue)
    }, 
    value: function (t) {
      this.curValue = this.value
    }
  }
}
</script>