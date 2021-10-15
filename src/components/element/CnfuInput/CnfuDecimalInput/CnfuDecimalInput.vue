<template>
  <div>
    <el-input
      ref="decimalInput"
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="placeholder ? placeholder : $t('pleaseEnterContents')"
      show-word-limit
      v-model="curValue"
      @blur="formatData"
    >
      <template slot="prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <slot name="suffix"></slot>
      </template>
      <template slot="prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append">
        <slot name="append"></slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "CnfuDecimalInput",
  props: {
    value: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    decLength: { type: String, default: "" }, //小数点位数， 不足自动补0
    intLength: { type: String, default: "" }, //整数位数
  },
  // data:  () =>{ curValue: ""},
  data() {
    return {
      curValue: "",
    };
  },
  created() {
    (this.curValue = void 0 !== this.value ? this.value.toString() : ""),
      this.formatData();
  },
    watch: {
    curValue: function (t, e) {
      if (new RegExp(/^(([1-9]\d*)|0)?(\.)?(\d*)?$/).test(t)) {
        let i = t.toString(),
          u = i.indexOf("."),
          r = u >= 0 ? u : i.length,
          h = 0;
        u >= 0 && (h = i.length - u - i),
          this.intLength &&
            r > this.intLength &&
            (("0" === this.intLength && 1 === r && "0" === i.substring(0, 1)) ||
              (this.curValue = e.toString())),
          this.decLength &&
            h > this.decLength &&
            (this.curValue = e.toString());
      } else this.curValue = e.toString();
      this.$emit("input", this.curValue);
    },
    value: function (t) {
      this.$refs.decimalInput.focused ||
        ((this.curValue = void 0 !== this.value ? this.value.toString() : ""),
        this.formatData());
    },
  },
  methods: {
    formatData() {
      if (this.decLength && this.curValue) {
        let t = 0;
        this.curValue.indexOf(".") < 0
          ? ((this.curValue += "."), (t = 0))
          : ((t = this.curValue.length - this.curValue.indexOf(".") - 1),
            0 == this.curValue.indexOf(".") &&
              (this.curValue = "0" + this.curValue));
        for (let e = 0; e < this.decLength - t; e++) {
          this.curValue += "0";
        }
        this.$emit("input", this.curValue);
      }
    },
  },

};
</script>