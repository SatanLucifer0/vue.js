<template>
      <div class="el-row">
        <div class="el-col el-col-24">
            <div class="comp">
                <div class="tmpl routeanimate">
                    <div class="section">
                        <div class="location">
                            <span>当前位置：</span>
                            <a href="/index.html">首页</a> &gt;
                            <a href="/user/center/index.html">会员中心</a>
                        </div>
                    </div>
                    <div class="section clearfix">
                        <div class="left-260">
                            <div class="bg-wrap">
                                <div class="avatar-box">
                                    <a href="/user/center/avatar.html" class="img-box">
                                        <i class="iconfont icon-user-full"></i>
                                    </a>
                                    <h3>

                                        ivanyb

                                    </h3>
                                    <p>
                                        <b>注册会员</b>
                                    </p>
                                </div>
                                <div class="center-nav">
                                    <ul>
                                        <li>
                                            <h2>
                                                <i class="iconfont icon-order"></i>
                                                <span>订单管理</span>
                                            </h2>
                                            <div class="list">
                                                <p>
                                                    <a href="#/user/list" class="">
                                                        <i class="iconfont icon-arrow-right"></i>交易订单</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <h2>
                                                <i class="iconfont icon-user"></i>
                                                <span>账户管理</span>
                                            </h2>
                                            <div class="list">
                                                <p>
                                                    <a href="#/site/member/center" class="router-link-exact-active ">
                                                        <i class="iconfont icon-arrow-right"></i>账户资料</a>
                                                </p>
                                                <p>
                                                    <a href="#/site/member/center" class="router-link-exact-active ">
                                                        <i clrouter-linkss="iconfont icon-router-linkrrow-right"></i>头像设置</a>
                                                </p>
                                                <p>
                                                    <a href="#/site/member/center" class="router-link-exact-active ">
                                                        <i class="iconfont icon-arrow-right"></i>修改密码</a>
                                                </p>
                                                <p>
                                                    <a href="javascript:void(0)">
                                                        <i class="iconfont icon-arrow-right"></i>退出登录</a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="right-auto">
                            <div class="bg-wrap" style="min-height: 765px;">
                                <div class="sub-tit">
                                    <ul>
                                        <li class="selected">
                                            <a href="javascript:;">个人中心</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="center-head clearfix">
                                    <div class="img-box">
                                        <i class="iconfont icon-user-full"></i>
                                    </div>
                                    <div class="list-box">
                                        <h3>欢迎您~ ivanyb</h3>
                                        <ul>
                                            <li>组别：注册会员</li>
                                            <li>手机：13987654321</li>
                                            <li>Email:ivanyb1@qq.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="center-info clearfix"></div>
                                <div class="center-tit">
                                    <span>
                                        <a href="/user/order-list.html">更多..</a>
                                    </span>
                                    <h3>
                                        <i class="iconfont icon-order"></i>我的订单</h3>
                                </div>
                                <div class="center-info clearfix">
                                    <ul>
                                        <li>已完成订单：0个</li>
                                        <li>待完成订单：2个</li>
                                    </ul>
                                </div>
                            </div>
                        </div> -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // 只要加了网址后缀就能进入用户中心,,,所以在这里我们在vue实例总最早的生命周期钩子里判断是否有登录
    // beforeCreate() {
    //   this.$axios.get(`site/account/islogin`).then(res=>{
    //     console.log(res)
    //     if(res.data.code=='nologin'){
    //       this.$message.error('请先登录')
    //       this.$router.push('/login')
    //       return
    //     }
    //   })
    // },

    
    // 这种情况下在慢网速情况下,,还是会在直接加后缀的情况下会进入路由的相应模版,,
    // 这种情况下   引入vue路由组件里的  导航守卫



}
</script>

<style>

</style>>