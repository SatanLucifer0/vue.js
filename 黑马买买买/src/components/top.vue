<template>
      <div class="header">
        <!-- 1.0 导航栏头部 -->
        <div class="head-top">
            <div class="section">
                <div class="left-box">
                    <span>黑马买买买</span>
                    <a target="_blank" href="#"></a>
                    <a target="_blank" href="#"></a>
                </div>
                <div id="menu" class="right-box">
                    <span style="display: none;">
                        <a href="" class="">登录</a>
                        <strong>|</strong>
                        <a href="" class="">注册</a>
                        <strong>|</strong>
                    </span>
                    <span>
                        <a href="/#/user" class="" @click="touser">会员中心</a>
                        <strong>|</strong>
                        <a>退出</a>
                        <strong>|</strong>
                    </span>
                    <a href="" class="">
                        <i class="iconfont icon-cart"></i>购物车(
                        <span id="shoppingCartCount">
                            <span>4</span>
                        </span>)</a>
                </div>
            </div>
        </div>

        <!-- 2.0 导航条 -->
        <div class="head-nav">
            <div class="section">
                <div id="menu2" class="nav-box menuhd">
                    <ul>
                        <li class="index">
                            <a href="#" class="">
                                <span class="out" style="top: 0px;">首页</span>
                            </a>
                        </li>
                        <li class="news">
                            <a href="#" class="">
                                <span class="out" style="top: 0px;">每日精选</span>
                            </a>
                        </li>
                        <li class="photo">
                            <a href="#" class="">
                                <span class="out" style="top: 0px;">秒杀专区</span>
                            </a>
                        </li>
                        <li class="video">
                            <a href="#" class="">
                                <span class="out" style="top: 0px;">黑马超市</span>
                            </a>
                        </li>
                        <li class="down">
                            <a href="#" class="">
                                <span class="out" style="top: 0px;">会员权益</span>
                            </a>
                        </li>
                        <li class="goods">
                            <a href="" class="router-link-exact-active ">
                                <span class="out" style="top: 0px;">购物商城</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="search-box">
                    <div class="input-box">
                        <input id="keywords" name="keywords" type="text" onkeydown="if(event.keyCode==13){};" placeholder="输入关健字" x-webkit-speech="">
                    </div>
                    <a href="javascript:;">
                        <i class="iconfont icon-search"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        touser(){
            this.$router.push('/user')
        }
    }
}
</script>

<style>

</style>
