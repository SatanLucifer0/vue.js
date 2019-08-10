<template>
  <div class="result-wrapper my-results">
    <div class="song" v-for="item in list" :key="item.id" @dblclick="toComment(item)">
      <div class="name">
        <span class="iconfont icon-play" @click="toplay(item)"></span>
        {{item.name}}
        <span
          class="iconfont icon-editmedia"
          v-if="item.mvid!=0"
          @click="toMv(item.mvid)"
        ></span>
      </div>
      <div class="singer">{{item.artists | formatName}}</div>
      <div class="album">《{{item.album.name}}》</div>
      <div class="time">{{item.duration | formatTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resuils",
  data() {
    return {
      list: []
    };
  },
  methods: {
    getData() {
      let songName = this.$route.params.songName;
      this.$axios
        .get(`https://autumnfish.cn/search?keywords=${songName}`)
        .then(res => {
          console.log(res.data.result.songs);
          this.list = res.data.result.songs;
        });
    },
    toplay(item) {
      this.$router.push(`/player/${item.id}`);
    },
    toMv(mvid) {
      this.$router.push(`/mv/${mvid}`);
    },
    toComment(item) {
      this.$router.push(`/comment/${item.id}`);
    }
  },
  created() {
    this.getData();
  },
  watch: {
    "$route.params.songName"() {
      this.getData();
    }
  },
  filters: {
    formatName(value) {
      let str = "";
      for (let i = 0; i < value.length; i++) {
        str += value[i].name + "|";
      }
      str = str.substr(0, str.length - 1);
      return str;
    },
    formatTime(value) {
      let sec = Math.round(value / 1000);
      let min = parseInt(sec / 60);
      sec = sec % 60;
      sec = sec.toString().padStart(2, "0");
      return min + ":" + sec;
    }
  }
};
</script>

<style>
.my-results {
  width: 1080px;
  margin: 50px auto;
}
</style>
