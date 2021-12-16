<template>
  <div class=''>
    <el-button type="primary" @click="download('123456!@', txt)">下载txt</el-button>
    <el-button type="success" @click="download('123456!@', doc)">下载doc</el-button>
    <el-button type="info"  @click="download('123456!@', xls)">下载xls</el-button>
    <el-button type="info"  @click="download('文件流', zip)">下载zip</el-button>
  </div>
</template>

<script>
  export default {
    name: 'FileExport',
    data() {
      return {
        txt: 'text/plain',
        doc: 'application/msword',
        xls: 'application/vnd.ms-excel',
        zip: 'application/zip'
      }
    },
    methods: {
      download(data, type) {
        let blob = new Blob([data], {type: type})
        let objUrl = URL.createObjectURL(blob)
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = objUrl;
        link.download = 'download'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    },
  }
</script>

<style scoped></style>