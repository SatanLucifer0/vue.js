
<template>

<div>
  <!-- 上面上搜索的框 -->
  <search></search>

  <!-- 显示路由的标签 -->
  <router-view></router-view>
</div>

</template>


<script>

import search from './components/search'

export default {
    components:{
      search
    }
}
</script>

<style>

</style>
