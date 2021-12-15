<template>
  <div class=''>
    <ul>
      <li>dayjs(): {{curDate}}</li>
      <li>当前日期: {{curDate.year()}}-{{curDate.month()}}-{{curDate.date()}}</li>
      <li>format: {{curDate.format('YYYY-MM-DD')}}</li>
      <li>format h:mm:ss: {{dayjs().format('h:mm:ss')}}</li>
      <li>星期: {{dayjs().format('ddd')}}</li>
      <li>星期: {{curDate.day()}}</li>
      <li>时间: {{curDate.hour()}}:{{curDate.minute()}}:{{curDate.second()}}</li>
      <li>add: {{curDate.add(1, 'days').format('YYYY-MM-DD')}}</li>
      <li>subtract: {{curDate.subtract(1, 'days').format('YYYY-MM-DD')}}</li>
      <li>diff: {{date2.diff(date1)}}</li>
      <li>diff: {{date2.diff(date1, 'days')}}</li>
    </ul>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  // import 'dayjs/locale/zh-cn' // import locale
  // dayjs.locale('zh-cn') // use locale
  export default {
    name: '',
    components: {},
    props: {},
    data() {
      return {
        date1: dayjs('2021-12-14'),
        date2: dayjs('2021-12-15'),
        curDate: dayjs()
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
      // console.log(dayjs(new Date()).locale('zh-cn'));
    },
    methods: {
      dayjs: dayjs
    },
  }
</script>

<style scoped>
  li {
    font-size: 18px;
    padding: 5px 0;
  }
</style>