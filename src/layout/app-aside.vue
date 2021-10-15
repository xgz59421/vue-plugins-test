<template>
  <el-aside width="200px">
    <el-menu :default-openeds="['1', '2']" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>插件</span>
        </template>
        <el-menu-item index="/prismjs">
          <i class="el-icon-setting"></i>
          <span slot="title">语法高亮</span>
        </el-menu-item>
        <el-menu-item index="/vue-splitpane">
          <i class="el-icon-setting"></i>
          <span slot="title">分割区块</span>
        </el-menu-item>
        <el-menu-item index="/i18n">
          <i class="el-icon-setting"></i>
          <span slot="title">国际化</span>
        </el-menu-item>
        <el-menu-item index="/mock">
          <i class="el-icon-setting"></i>
          <span slot="title">mock</span>
        </el-menu-item>

        
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>组件</template>
        <el-menu-item index="/cnfubutton">
          <i class="el-icon-setting"></i>
          <span slot="title">按钮</span>
        </el-menu-item>
        <el-menu-item index="/cnfuinput">
          <i class="el-icon-setting"></i>
          <span slot="title">普通输入框</span>
        </el-menu-item>
        <el-menu-item index="/cnfuintinput">
          <i class="el-icon-setting"></i>
          <span slot="title">整数输入框</span>
        </el-menu-item>
        <el-menu-item index="/cnfudecimalinput">
          <i class="el-icon-setting"></i>
          <span slot="title">浮点输入框</span>
        </el-menu-item>
        
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>example</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "AppAside",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>