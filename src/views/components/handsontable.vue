<template>
  <div class='aab'>
    <!-- <hot-table :data='data' :rowHeaders="true" :colHeaders="true"></hot-table> -->
    <el-button v-on:click="swapHotData">Load new data!</el-button>
    <hot-table :settings='hotSettings' :style='style' ref="hotTableComponent"></hot-table>
  </div>
</template>

<script>
// https://handsontable.com/docs/vue-installation/
import { HotTable } from '@handsontable/vue';
import { registerAllModules } from 'handsontable/registry';
import { createSpreadsheetData } from 'handsontable/helpers/data';
// register Handsontable's modules
registerAllModules();
export default {
  name: '',
  components: { HotTable },
  props: {},
  data() {
    return {
      // test1
      // data: [
      //     ["A", "Ford", "Volvo", "Toyota", "Honda"],
      //     ["2016", 10, 11, 12, 13],
      //     ["2017", 20, 11, 14, 13],
      //     ["2018", 30, 15, 12, 13],
      //     []
      //   ],
      // test2
       hotSettings: {
        // startRows: 10,
        // startCols: 6,
        // data: createSpreadsheetData(10, 5),
        data: [
          ["A", "Ford", "Volvo", "Toyota", "Honda"],
          ["2016", 10, 11, 12, 13],
          ["2017", 20, 11, 14, 13],
          ["2018", 30, 15, 12, 13],
          []
        ],
        colHeaders: true,
        rowHeaders: true,
        height: 'auto',
        // stretchH: 'none', // none(defalt) last all
        // colWidths: 100,
        licenseKey: 'non-commercial-and-evaluation'
      },
      // style: 'height: 142px; overflow: hidden; border: 1px solid red;'
      style: 'margin: 1px;'
    }
  },
  methods: {
    swapHotData: function() {
      // The Handsontable instance is stored under the `hotInstance` property of the wrapper component.
      this.$refs.hotTableComponent.hotInstance.loadData([['new', 'data']]);
    }
  }
}
</script>

<style src="../../../node_modules/handsontable/dist/handsontable.full.css"></style>