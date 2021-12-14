<template>
  <div class=''>
    <ul>
      <li>当前时间: {{curDate}}</li>
      <li>日期: {{curDate.year()}}-{{curDate.month()}}-{{curDate.date()}}</li>
      <li>星期: {{curDate.day()}}</li>
      <li>时间: {{curDate.hour()}}:{{curDate.minute()}}:{{curDate.second()}}</li>
      <li>add: {{curDate.add(1, 'days').format('YYYY-MM-DD')}}</li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      curDate: moment(new Date)
    }
  },
  mounted() {
    let date = moment(new Date)
    console.log(moment(new Date, 'YYYY-MM-DD HH:mm:ss'));
    console.log(moment(1318781876406).year());
    console.log(date.year(), date.month());
  },
  methods: {
    moment: moment
  }
}
</script>

<style scoped></style>