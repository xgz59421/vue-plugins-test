<template>
  <div class=''>
    <ul>
      <li>当前时间: {{curDate}}</li>
      <li>当前日期: {{curDate.year()}}-{{curDate.month()}}-{{curDate.date()}}</li>
      <li>format: {{curDate.format('YYYY-MM-DD')}}</li>
      <li>082000 format: {{moment('082000', 'hmm').format('HH:mm')}}</li>
      <li>202203162133 format: {{moment('202203162133', 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm')}}</li>
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
import moment from 'moment'
export default {
  data() {
    return {
      date1: moment('2021-12-14'),
      date2: moment('2021-12-15'),
      curDate: moment() //当前时间
    }
  },
  mounted() {
    // console.log(moment(new Date, 'YYYY-MM-DD HH:mm:ss'));
    // console.log(moment(1318781876406).year());
  },
  methods: {
    moment: moment
  }
}
</script>

<style scoped>
  li{
    font-size: 18px;
    padding: 5px 0;
  }
</style>