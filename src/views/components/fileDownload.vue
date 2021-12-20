<template>
  <div class=''>
    <ul>
      <li>
        <span>blob</span>
        <el-button type="primary" @click="download(text, txt)">下载txt</el-button>
        <el-button type="success" @click="download(text, word)">下载doc</el-button>
        <el-button type="info" @click="download(test, excel)">下载xls</el-button>
        <!-- <el-button type="info"  @click="download(img, 'application/zip')">下载zip</el-button> -->
      </li>
      <li>
        <span>saveAs</span>
        <el-button type="primary" @click="saveAs(text, txt, 'test.txt')">下载txt</el-button>
        <el-button type="success" @click="saveAs(text, word, 'test.doc')">下载doc</el-button>
        <el-button type="info" @click="saveAs(test, excel, 'test.xlsx')">下载xls</el-button>
      </li>
      <li>
        <span>jszip</span>
        <el-button type="info" @click="zipdown()">jszip</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
  import JSZip from 'jszip'
  import { saveAs } from 'file-saver'
  export default {
    name: 'FileExport',
    data() {
      return {
        txt: 'text/plain',
        word: 'application/msword',
        excel: 'application/vnd.ms-excel',
        text: '123456!@',
        test: [
          [1, 2, 3],
          [4, 5, 6]
        ],
        // img: require('@/assets/logo.png'),
        imgData: "R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs="
      }
    },
    mounted() {
      console.log(JSZip);
    },
    methods: {
      download(data, type) {
        // data 文件流
        // type 文件类型
        let blob = new Blob([data], {
          type: type
        })
        let objUrl = URL.createObjectURL(blob)
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = objUrl;
        link.download = 'download'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      },
      saveAs(data, type, suffix) {
        let blob = new Blob([data], {
          type: type
        })
        saveAs(blob, suffix)
      },
      zipdown() {
        let that = this
        var zip = new JSZip();
        zip.file("Hello.txt", "Hello World\n");
        var img = zip.folder("images");
        img.file("smile.gif", that.imgData, {
          base64: true
        });
        zip.generateAsync({
          type: "blob"
        }).then(function (content) {
          saveAs(content, "example.zip")
          // that.download(content, that.zip)
        });
      }
    },
  }
</script>

<style scoped>
  span {
    display: inline-block;
    width: 50px;
  }

  li {
    margin: 5px 0;
  }
</style>