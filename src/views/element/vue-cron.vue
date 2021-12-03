<template>
  <div class="cron">
    <h1>vue-cron</h1>
    <el-popover v-model="cronPopover">
      <cron @change="changeCron" @close="cronPopover=false" i18n="cn"></cron>
      <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"></el-input>
    </el-popover>
  </div>
</template>

<script>
  /**
   * 依赖:
   * 1. Vue 2.0.0+
   * 2. element-ui 2.0.0+
   */
  import { cron } from 'vue-cron';
  export default {
    components: {
      cron
    },
    data() {
      return {
        cronPopover: false,
        cron: '',
      }
    },
    methods: {
      changeCron(val) {
        this.cron = val
      },
    },
  }
</script>