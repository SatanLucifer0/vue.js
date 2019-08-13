<template>
  <div>
    <div class="section">
        <div class="location">
            <span>当前位置：</span>
            <a href="/index.html">首页</a> &gt;
            <a href="/login.html">会员登录</a>
        </div>
    </div>
    <div class="section">
        <div class="wrapper">
            <div class="bg-wrap">
                <div class="nav-tit">
                    <a class="selected" href="javascript:;">账户登录</a>
                    <i>|</i>
                    <a href="/register.html">免费注册</a>
                </div>

                <div id="loginform" name="loginform" class="login-box">
                    <div class="input-box">
                        <input id="txtUserName" name="txtUserName" type="text" placeholder="用户名/手机/邮箱" maxlength="50" v-model.trim="username">
                    </div>
                    <div class="input-box">
                        <input id="txtPassword" name="txtPassword" type="password" placeholder="输入登录密码" maxlength="16" v-model.trim="password">
                    </div>
                    <div class="btn-box">
                        <input id="btnSubmit" name="btnSubmit" type="submit" value="立即登录" @click="tologin">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:'',
    }
  },
  methods:{
    tologin(){
      if(this.username==''||this.password==''){
        this.$message.warning('输入的账号或密码为空')
      }
      this.$axios.post(`site/account/login`,{
        user_name:this.username,
        password:this.password
      }).then(res=>{
        
        if(res.data.status==0){
          this.$message.success('登录成功')
          this.$router.push('/index')
        }else{
          this.$message.error(res.data.message)
        }
        
      })
    }
  }
}
</script>

<style>

</style>>