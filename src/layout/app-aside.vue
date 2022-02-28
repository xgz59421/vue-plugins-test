<template>
  <el-aside width="200px">
    <el-menu :default-active="$route.path" :default-openeds="openeds" router>
      <!-- :index:'' 为字符串格式, 需要转换一下 -->
      <!-- 一级标题 -->
      <el-submenu unique-opened='true' v-for="level1 in routes" :index="level1.index+''" :key="level1.index">
        <template slot="title"><i class="el-icon-menu"></i>{{level1.name}}</template>
        <div v-for="level2 in level1.children" :key="level2.name">
          <!-- 二级标题 无子标题-->
          <el-menu-item v-if="!level2.children" :index="level2.path">
            <template><i class="el-icon-setting"></i><span slot="title">{{level2.name}}</span></template>
          </el-menu-item>
          <!-- 二级标题 有子标题 -->
          <el-submenu v-else :index="level2.path">
            <template slot="title"><i class="el-icon-setting"></i><span slot="title">{{level2.name}}</span></template>
            <!-- 三级标题 -->
            <el-menu-item v-for="level3 in level2.children" :key="level3.name" :index="level3.path">
              <template><i class="el-icon-date"></i><span slot="title">{{level2.name}}</span></template>
            </el-menu-item>
          </el-submenu>
        </div>
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
      return {
        routes: [],
        // 默认展开的选项
        openeds: []
      };
    },
    computed: {},
    watch: {},
    created() {
      this.routes = this.$router.options.routes
      console.log(this.routes)
      // this.routes.forEach(group => {
      //   this.openeds.push(group.index+'')
      // });
    },
    mounted() {},
    methods: {

    },
  };
</script>

<style>
</style>