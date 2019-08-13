<template>
  <div>
     <!-- 顶部 -->
     <top></top>

     <router-view></router-view>>
     <!-- 底部 -->
     <bottom></bottom>
  </div>
</template>

<script>
import top from './components/top.vue'
import bottom from './components/bottom.vue'

export default {
  components:{
    top,
    bottom
  }
}
</script>

<style>

</style>
