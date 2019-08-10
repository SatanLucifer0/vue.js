<template>
  <div class="video">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <span class="title">{{songName}}</span>
      <span class="artist">{{singerName}}</span>
    </div>
    <video  :src="mvUrl" controls></video>
  </div>
</template>

<script>
export default {
  name:'mv',
  data(){
    return{
      // 歌手名字
      singerName:"",
      // 歌曲名字
      songName:"",
      // mv地址
      mvUrl:""
    }
  },
  created() {
    let mvid=this.$route.params.mvid;
    this.$axios.get("/mv/detail?mvid="+mvid).then(res=>{
      // console.log(res);
       this.songName = res.data.data.name;
        // 拼接歌手
        let str = "";
        for(let i = 0; i < res.data.data.artists.length; i++){

           str += res.data.data.artists[i].name + "|";
        }
        str = str.substr(0,str.length - 1);
        this.singerName = str;

        // 优先挑一个高清的
        // 数据返回的是一个对象,,不是数组不能用遍历数组的for循环,,用对象
        let max = 0;
        for(let key in res.data.data.brs){
            if( key > max ){
                max = key;
             }
        }
        this.mvUrl = res.data.data.brs[max];
      })
      
   
  },
}
</script>

<style>
</style>
