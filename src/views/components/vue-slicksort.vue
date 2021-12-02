<template>
  <div class="root">
    <SlickList lockAxis="y" v-model="items" tag="ul" class="slick">
      <SlickItem v-for="(item, index) in items" :index="index" :key="index" tag="li" class="slickitem">
        {{ item }}
      </SlickItem>
    </SlickList>
  </div>
</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort';
export default {
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']
    }
  },
  components:{
    SlickItem,
    SlickList
  }
}
</script>

<style>
.slick .slickitem:not(:nth-child(1)){
  border-top: 0;
}
.slickitem{
  height: 1rem;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  border: 1px solid black;
  box-sizing: border-box;
}
</style>