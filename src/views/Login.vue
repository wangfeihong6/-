<template>
    <div class="main">
      <div class="login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
          <el-form-item label="账号" prop="loginId">
    <el-input type="text" v-model="ruleForm.loginId" autocomplete="off"></el-input>
  </el-form-item>
      <el-form-item label="密码" prop="loginPwd">
    <el-input type="password" v-model="ruleForm.loginPwd" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">取消</el-button>
  </el-form-item>
</el-form>
      </div>

    </div>
</template>

<script>
export default {
 data() {
      //验证账号的方法
     var validateloginId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        }else{
            callback()
            
        }
      };
      //验证密码的方法
      var validateloginPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else{
          callback()
        }
      };
     
      return {
        //表单数据
        ruleForm: {
          //登录名
          loginId:'',
          //登录密码
          loginPwd:'',
        },
        //表单验证数据
        rules: {
          //验证账号
          loginId: [
            { validator: validateloginId, trigger: 'blur' }
          ],
          //验证密码
          loginPwd: [
            { validator: validateloginPwd, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      //表单提交方法
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.$router);
            this.$router.push('./layout')
          } else {
           alert('输入账号密码')
            return false;
          }
        });
      },
      //表单重置方法
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped lang='scss'>
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login{
    width: 460px;
    height: 220px;
    border: 1px solid #ccc;
  }
}
</style>