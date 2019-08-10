<template>
  <div id="player">
    <h2 class="title">飞鸿听雪</h2>
    <div class="search">
      <input type="text" v-model.trim="songName" @keyup.enter="search" />
      <button @click="search">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songName: "神话"
    };
  },
  methods: {
    search() {
      // 做一个非空判断,,,就是空和空格都不跳转  在输入v-model处加修饰符 trim
      if (this.songName == "") {
        this.$message({
          message: "请输入歌名",
          type: "warning"
        });
        return;
      }
      this.$router.push(`/results/${this.songName}`);
    }
  }
};
</script>

<style>
</style>
