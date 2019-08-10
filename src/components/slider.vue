<template>
  <div class="block">
    <el-carousel height="400px" class='myslider'>
      <el-carousel-item v-for="(item,index) in list" :key="index">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'slider',
  data() {
    return {
      list:[],
      imageUrl:''
    };
  },
  created() {
    axios.get("https://autumnfish.cn/banner")
    .then(res=>{
      console.log(res);
      this.list=res.data.banners
      
    })
  },
};
</script>

<style>
  .myslider{
    height: 400px;
    margin: 50px auto;
  }
</style>
