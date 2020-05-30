<template>
  <div class="login" :style="style">
    <div class="nav_h1">用户登录</div>
    <div class="nav_center">
      <input type="number" placeholder="请输入手机号" v-model="modelLogin"/>
      <input type="password" placeholder="请输入密码" v-model="modelRegister"/>
    </div>
    <div class="btn_login" @click="login">登录</div>
    <div class="btn_register">注册</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        backgroundImage:
          "url(" + require("../../assets/login_background.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      modelLogin:'',
      modelRegister:''
    };
  },
  methods:{
      login(){
          let {modelLogin,modelRegister} = this
          // 手机号校验
          if(modelLogin == ''){
              return Notify({ type: 'danger', message: '手机号不能为空,请重新输入!' });
          }
      }
  }
};
</script>

<style lang="less" >
.login {
  width: 100%;
  height: 100%;
  background: url("/src/assets/login_background.jpg");
  background-size: 100%;
  overflow: hidden;
  padding-top: 30%;
  padding-left: 15px;
  padding-right: 15px;
  .nav_h1 {
    color: #fff;
    font-size: 26px;
    width: 100%;
    text-align: center;
    letter-spacing: 6px;
  }
  .nav_center {
    padding-top: 20px;
    padding-bottom: 30px;
    input {
      background: transparent;
      border: none;
      width: 100%;
      text-align: center;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 25px;
      color: #fff;
      font-size: 15px;
      margin-top: 20px;
    }
  }
  .btn_login{
      width: 100%;
      height: 40px;
      border-radius: 20px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      background-color: #3C82FF;
  }
  .btn_register{
      width: 100%;
      height: 40px;
      border-radius: 20px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      background-color: #FF8EA8;
      margin-top: 20px;
  }
}

input::-webkit-input-placeholder {
  color: pink;
}
</style>