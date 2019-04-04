<template>
  <div class="login">
    <div class="login-warpper">
      <div class='input-box mb20'>
        <div class='input-label'>账号</div>
        <div class="page-section">
          <div class="input-case">
            <input class="input" value=''  v-model="usernameInput" placeholder="请输入账号"/>
          </div>
        </div>
      </div>
      <div class='input-box mb20'>
        <div class='input-label'>密码</div>
        <div class="page-section">
          <div class="input-case">
            <input class="input" type='password'  minlength="6" v-model="pwdInput" placeholder="请输入密码"/>
          </div>
        </div>
      </div>
    </div>
    <div class='button-warpper'>
      <button type="primary"  class='login-button' @click='doLogin'>登录</button>
      <!--<button type="text" class='register-text' @click='registerToClick'>注册</button>-->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    doLogin () {
      this.$http.get('/mock')
        .then((res) => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang='scss' scoped>
  .login-warpper{
    padding-left: rpx(60);
    padding-right: rpx(60);
    margin-top: rpx(300);
    height: auto;
    overflow: hidden;
    margin-bottom: rpx(40);
  }
  /* input */
  .input-box{
    width: 100%;
    margin-left:auto;
    margin-right: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /*border-bottom: 2rpx() solid #dedede;*/
  }
  .input-case{
    border-bottom: rpx(2) solid #DCDCDC;
    padding: rpx(20) rpx(30);
  }
  .input-box > .input-label{
    margin-right: rpx(10);
    color: #333;
    font-size: rpx(36);
    line-height: rpx(32);
  }
  .input{
    color: #333;
    font-size: rpx(32);
    line-height: rpx(32);
    text-align: left;
  }
  .button-warpper{
    width: 80%;
    margin-left:auto;
    margin-right: auto;
    display: flex;
    /* justify-content: space-between; */
    align-items: flex-end;
  }
  .login-button{
    margin-top: 0;
    margin-bottom: 0;
    width: rpx(260);
    height: rpx(80);
    line-height: rpx(80);
  }
  .register-text{
    display: inline-block;
    color: #00BFFF;
    margin-right: rpx(28);
  }
</style>

