<template>
  <div class="comment-wrapper">
    <div class="items">
      <div class="item" v-for="comt in list" :key="comt.time">
        <div class="left">
          <img :src="comt.user.avatarUrl" alt="">
        </div>
        <div class="right">
          <div class="top">
            <span class='user'>{{comt.user.nickname}}:</span>
            <span class='content'>{{comt.content}}</span>
          </div>
          <div class="bottom">
            <div class="time">{{comt.time | formatTime}}</div>
            <div class="like-wrapper">
                <span>👍</span>({{comt.likedCount}})
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
    name:"comment",
    data(){
      return{
        list:[]
      }
    },
    created() {
      let id=this.$route.params.id;
      console.log(id);
      
      this.$axios.get(`/comment/hot?id=${id}&type=0`).then(res=>{
    
        console.log(res.data);
        this.list=res.data.hotComments
         
      })
    },
    filters:{
      formatTime(value){
        return moment(value).format('YYYY年MM月DD日');
      }
    }

}
</script>

<style>

</style>
