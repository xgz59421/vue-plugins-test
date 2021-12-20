<template>
  <div class=''>
    <el-button @click="exportExcel">导出Excel</el-button> 
    <div style="margin: 5px 0;"></div>
    <el-button @click="useExportUtil">用封装的导出工具导出excel</el-button>
    <el-button > 导入Excel <input type="file" accept=".xlsx,.xls" @change="useImportUtil"></el-button>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import { saveAs } from 'file-saver'
// 用封装好的
import excelUtil from '@/utils/deal2excel.js'
export default {
  name: 'XLSX',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    workbook2blob (workbook) {
    // 生成excel的配置项
      var wopts = {
        // 要生成的文件类型
        bookType: 'xlsx',
        // // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        bookSST: false,
        type: 'binary'
      }
      var wbout = XLSX.write(workbook, wopts)
      // 将字符串转ArrayBuffer
      function s2ab (s) {
        var buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
        return buf
      }
      let buf = s2ab(wbout)
      var blob = new Blob([buf], {
        type: 'application/octet-stream'
      })
      return blob
    },
    openDownloadDialog (blob, fileName) {
      saveAs(blob, fileName)
      // if (typeof blob === 'object' && blob instanceof Blob) {
      //   blob = URL.createObjectURL(blob) // 创建blob地址
      // }
      // var aLink = document.createElement('a')
      // aLink.href = blob
      // // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效
      // aLink.download = fileName || ''
      // var event
      // if (window.MouseEvent) event = new MouseEvent('click')
      // //   移动端
      // else {
      //   event = document.createEvent('MouseEvents')
      //   event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      // }
      // aLink.dispatchEvent(event)
    },
    exportExcel () {
      let sheet1data = [{ department: '行政部', count: 2 }, { department: '前端部', count: 3 }]
      let sheet2data = [{ name: '张三', do: '整理文件' }, { name: '李四', do: '打印' }]
      let sheet3data = [{ name: '王五', do: 'Vue' }, { name: '二楞', do: 'react' }]
      var sheet1 = XLSX.utils.json_to_sheet(sheet1data)
      var sheet2 = XLSX.utils.json_to_sheet(sheet2data)
      var sheet3 = XLSX.utils.json_to_sheet(sheet3data)
      console.log(sheet1, sheet2, sheet3, 'sheet123')
      // 创建一个新的空的workbook
      var wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, sheet1, '部门统计')
      XLSX.utils.book_append_sheet(wb, sheet2, '行政部')
      XLSX.utils.book_append_sheet(wb, sheet3, '前端部')
      const workbookBlob = this.workbook2blob(wb)
      this.openDownloadDialog(workbookBlob, '部门统计.xlsx')
    },
    useImportUtil (e) {
      excelUtil.importExcel(e)
    },
    useExportUtil () {
      const initColumn = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        className: 'text-monospace'
      }, {
        title: '年级',
        dataIndex: 'grade',
        key: 'grade'
      }, {
        title: '部门',
        dataIndex: 'department',
        key: 'department'
      }]

      let attendanceInfoList = [
        {
          name: '张三',
          grade: '2017级',
          department: '前端部门'

        },
        {
          name: '李四',
          grade: '2017级',
          department: '程序部门'

        }]
      excelUtil.exportExcel(initColumn, attendanceInfoList, '最新人员名单.xlsx')
    }
  },
}
</script>

<style scoped></style>