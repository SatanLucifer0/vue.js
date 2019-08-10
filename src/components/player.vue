<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" :src="alPic" alt />
    </div>
    <div class="right">
      <div class="title">
        <img src="../assets/img/tag.png" alt />
        <span>{{songName}}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{singerName}}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{alName}}</span>
      </div>
      <aplayer
        autoplay
        showLrc
        :music="{
        title: songName,
        artist: singerName,
        src: songUrl,
        pic: alPic,
        lrc:lrc
     }"
      />
    </div>
  </div>
</template>

<script>
// 导入歌词组件
import Aplayer from "vue-aplayer";

export default {
  name: "player",
  components: {
    Aplayer
  },
  data() {
    return {
      // 歌曲名字
      songName: "",
      // 歌手名字
      singerName: "",
      // 专辑名字
      alName: "",
      // 专辑封面
      alPic: "",
      // 歌曲的路径
      songUrl: "2.MP3",
      //   歌词
      lrc:''
    };
  },
  created() {
    let id = this.$route.params.id;
    // console.log(id);
    this.$axios.get(`/song/detail?ids=${id}`).then(res => {
      console.log(res.data.songs);
      this.songName = res.data.songs[0].name;

      //这里是自己直接把名字拼好再赋值给data里的数据
      var str = "";
      for (var i = 0; i < res.data.songs[0].ar.length; i++) {
        str += res.data.songs[0].ar[i].name + "|";
      }
      str = str.substr(0, str.length - 1);
      this.singerName = str;
      this.alName = res.data.songs[0].al.name;
      this.alPic = res.data.songs[0].al.picUrl;
    });
    // 获取歌曲的url
    this.$axios.get(`/song/url?id=${id}`).then(res => {
      // console.log(res);
      this.songUrl = res.data.data[0].url;
    });

    // 获取歌词
    this.$axios.get(`lyric?id=${id}`).then(res => {
      
      // console.log(res);
      this.lrc=res.data.lrc.lyric
      
      
      
      
      
    });
  }
};
</script>

<style>
</style>
