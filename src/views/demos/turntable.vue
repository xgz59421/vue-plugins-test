<template>
  <div class="turtable_container">
    <!-- 转盘抽奖 -->
    <div class="turtable_top">
      <router-link to="/" >
          <img class="back" src="../assets/turntable/icon_back.png" alt="">
      </router-link>
      <div class="title">
        <img src="../assets/turntable/img_title.png" alt="">
        <p>您现在有x次抽奖机会</p>
      </div>
    </div>
    <div class="turtable_bg">
        <img class="img_turntable_bottom" src="../assets/turntable/img_turntable_bottom.png" alt="">
        <img class="img_turntable" src="../assets/turntable/img_turntable.png" alt="">
        <!-- <transition :name="fade"> -->
        <img 
          class="img_turntable_circle"  
          :class="{rotate0:t_rotate==0, rotate60:t_rotate==1, rotate120:t_rotate==2, 
            rotate180:t_rotate==3,rotate240:t_rotate==4, rotate300:t_rotate==5}"
          src="../assets/turntable/img_turntable_circle.png" alt="">
        <!-- </transition> -->
        <div class="img_turntable_go" @click="luckyGo"></div>
        <img class="img_turntable_girl" src="../assets/turntable/img_turntable_girl.png" alt="">
        <div class="btn_trophy" @click="openRecord">
            <img src="../assets/turntable/btn_trophy.png" alt="">
            <p class="a">获奖记录</p>
        </div>
        <div class="btn_rules" @click="openRules">
            <img src="../assets/turntable/btn_rules.png" alt="">
            <p>活动规则</p>
        </div>
      </div>
    <div class="turtable_bottom">
      联系您的服务专员领取奖品：华小夏 13800000000
    </div>
    <!-- 提示框 -->
    <transition name="fade">
      <div class="outer_layer" v-if="showPopUp">
        <div class="bg_reward">
          <table></table>
          <div class="bg_reward_apple">
            <p>很遗憾</p>
            <p>您本次抽奖未抽中</p>
            <p>请再接再厉</p>
            <div class="btn_reward" @click="closePopUp">我知道了</div>
          </div>
          <div class="bg_close">
            <a href="javascript:void(0);" @click="closePopUp">
              <img src="../assets/turntable/btn_close.png">
            </a>
          </div>
        </div>
      </div>
    </transition>
    
    <!-- 活动规则-->
    <div class="outer_layer" v-if="showRules">
      <div class="bg_layer">
        <h2 class="layer_title">活动规则</h2>
        <div class="layer_rules">
          <div>
            <p class="text_title">活动时间</p>
            <p class="text_rules">10月16日—11月30日</p>
          </div>
          <div>
            <p class="text_title">获奖规则</p>
            <p class="text_rules">1.所有人员每天可投票一次</p>
            <p class="text_rules">2.每成功投票一次，可获得一次抽奖机会</p>
            <p class="text_rules">3.累计成功邀约10人参与投票活动，奖励某某礼品一份</p>
            <p class="text_rules">累计成功邀约30人参与投票活动，奖励某某礼品一份</p>
            <p class="text_rules">两份礼品可兼得</p>
            <p class="text_rules">4.公司员工不参与抽奖及礼品兑换</p>
            <p class="text_rules">5.抽奖截至2020年12月2日</p>
          </div>
          <div>
            <p class="text_title">兑奖要求</p>
            <p class="text_rules">提交真实个人信息，与服务专员联系</p>
            <p class="text_rules">领取所获礼品时需提供身份证明</p>
          </div>
        </div>
        <div class="btn_layer" @click="closeRules">知道了</div>
      </div>
    </div>
    <!-- 获奖记录 -->
    <div class="outer_layer" v-if="showRecord">
      <div class="bg_layer">
        <h2 class="layer_title">获奖记录</h2>
        <div class="layer_record">
          <div class="record_content">
            <p>时间</p>
            <p>奖品</p>
          </div>
          <div class="record_content" v-for="(item, key) in 10" :key="key">
            <p>2020.10.1  10:00:00</p>
            <p>奖品×××××</p>
          </div>
        </div>
        <div class="btn_layer" @click="closeRecord">知道了</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showPopUp: false,
      showRules: false,
      showRecord: false,
      t_rotate: -1,
      timer: null,
    }
  },
  methods:{
    luckyGo(){
      // 转盘转动期间不可再次转动
      if(this.timer !== null){
        return;
      }
      this.timer = setTimeout(()=>{
        console.log('done');
        clearTimeout(this.timer);
        this.timer = null;
        this.showPopUp = true;
      }, 2300);
      // 撤销之前的转动样式
      this.t_rotate = -1; 
      // 1-6随机
      var m = Math.floor(Math.random()*6);
      // 开始转动
      setTimeout(() => { 
        console.log('press go',m);
        this.t_rotate = m;
      }, 100);
      
    },
    openRules(){
      this.showRules = true
    },
    openRecord(){
      this.showRecord = true
    },
    closePopUp() {
      this.showPopUp = false
    },
    closeRules(){
      this.showRules = false
    },
    closeRecord(){
      this.showRecord = false
    }
  }
}
</script>

<style scoped>
  /* 转盘抽奖 */
  .turtable_container {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/turntable/bg_turntable.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .turtable_top{
    width: 100%;
    height: 155.5px;
  }
  .back {
    width: 20.5px;
    height: 18.5px;
    margin-left: 19px;
    margin-top: 21.5px;
  }
  .title {
    width: 100%;
    margin-top: 19px;
    height: 96.5px;
    color: rgb(251, 114, 28);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .title img {
    width: 226px;
    height: 67px;
  }
  .title p {
    font-size: 18px;
  }
  .turtable_bg {
    width: 350px;
    height: 465.5px;
    position: relative;
    margin: 0 auto;
  }
  .img_turntable_bottom {
    position: absolute;
    width: 343px;
    height: 192px;
    top: 287px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .img_turntable {
    position: absolute;
    width: 277px;
    height: 277px;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .img_turntable_circle {
    position: absolute;
    width: 225px;
    height: 225px;
    top: 46px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  @keyframes rotation0{
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(-1800deg);
    }
  }
  .rotate0 {
    animation:rotation0 2s;
  }
  @keyframes rotation60{
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(-1860deg);
    }
  }
  .rotate60 {
    animation:rotation60 2s;
  }
  @keyframes rotation120{
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(-1920deg);
    }
  }
  .rotate120 {
    animation:rotation120 2s;
  }
  @keyframes rotation180{
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(-1980deg);
    }
  }
  .rotate180 {
    animation:rotation180 2s;
  }
  @keyframes rotation240{
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(-2040deg);
    }
  }
  .rotate240 {
    animation:rotation240 2s;
  }
  @keyframes rotation300{
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(-2100deg);
    }
  }
  .rotate300 {
    animation:rotation300 2s;
  }
  .rotate0, .rotate60, .rotate120, .rotate180, .rotate240, .rotate300 {
    animation-fill-mode: both;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  .fade-enter-active{
    /* transition: all .3s; */
    animation: bounce-in .5s;
  }
  /* .fade-enter-active, .fade-leave-active {
    transition: all .3s; 
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  } */
  .img_turntable_go {
    width: 62.5px;
    height: 78px;
    background-image: url(../assets/turntable/img_turntable_go.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 116px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .img_turntable_girl {
    width: 59.5px;
    height: 119px;
    position: absolute;
    top: 250px;
    left: 54px;
  }
  .btn_trophy{
    position: absolute;
    top: 397px;
    left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn_rules {
    position: absolute;
    top: 397px;
    right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn_trophy img, .btn_rules img {
    width: 47px;
    height: 47px;
  }
  .btn_trophy p, .btn_rules p {
    color: rgb(168, 148, 103);
    font-size: 16.065px;
    margin-top: 5px;
  }
  .turtable_bottom {
    color: rgb(168, 148, 103);
    font-size: 12.5px;
    margin: 20px auto 12px;
    text-align: center;
  }

  /* 提示框 */
  .outer_layer {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .bg_reward {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/turntable/img_reward.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
  }
  .bg_reward_apple {
    width: 226.5px;
    height: 271px;
    margin: 168px auto 0px;
    background-image: url(../assets/turntable/img_reward_apple.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    font-size: 17.5px;
    color: rgb(255, 255, 255);
  }
  .bg_reward_apple p {
    margin-bottom: 15px;
  }
  .bg_reward_apple p:nth-child(1){
    padding-top: 114px;
    margin-top: 114px;
  }
  .btn_reward {
    width: 110px;
    height: 36px;
    background-image: url(../assets/turntable/btn_reward.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 215px;
    left: 58px;
    color: rgb(255, 92, 51);
    line-height: 36px;
  }
  .bg_close {
    margin-top: 67.5px;
  }
  .bg_close img {
    width: 40.5px;
    height: 40.5px;
  }

  /* 活动规则 */
  .bg_layer {
    width: 328px;
    height: 525px;
    background-image: url(../assets/turntable/img_rules.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: rgb(102, 102, 102);
    
    position: relative;
  }
  .layer_title {
    font-size: 30.9px;
    color: rgb(232, 77, 47);
    margin-top: 43px;
  }
  .layer_rules {
    padding: 0 18px 0;
    height: 360px;
    overflow-y: auto;
  }
  .text_title {
    font-size: 14px;
    margin-top: 21.5px;
    margin-bottom: 10px;
  }
  .text_rules {
    font-size: 11.5px;
    margin-bottom: 6px;
    line-height: 23px;
  }
  .btn_layer {
    width: 246.5px;
    height: 44px;
    background-image: url(../assets/turntable/btn_yellow.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 464.5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: 25.635px;
    line-height: 44px;
    color: rgb(229, 65, 37);
  }

  /* 获奖记录 */
  .layer_record {
    height: 360px;
    overflow-y: auto;
    padding: 0 18px 0;
    font-size: 12.5px;
  }
  .record_content {
    display: flex;
  }
  .record_content:nth-child(1){
    margin-top: 35px;
  }
  .record_content p {
    flex: 1;
    margin-bottom: 31px;
  }

</style>