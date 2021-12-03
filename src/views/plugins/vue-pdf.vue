<template>
  <div>
    <pdf ref="pdf" v-for="i in numPages" :key="i"  
      :src="url" :page="i"></pdf>
      <!-- <img height="180px" src="../assets/logo.png" alt=""> -->
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components:{pdf},
  data() {
    return {
      url:'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
      url:'/pdf/weixin01.pdf',
      numPages: null, // pdf 总页数
    }
  },
  mounted() {
    this.getNumPages()
  },
  methods: {
    getNumPages(){
      let loadingTask = pdf.createLoadingTask(this.url)
      loadingTask.promise.then(pdf => {
        this.numPages = pdf.numPages
      }).catch(err => {
        console.error('pdf 加载失败', err);
      })
      console.log('loadingTask', loadingTask);
    }
  },
}
</script>