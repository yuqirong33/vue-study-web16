<template>
  <div>
    <KForm :model="userInfo" :reles="rules" ref="loginForm">
      <!--用户名-->
      <KFormItem lable="用户名" prop="username">
        <KInput v-model="userInfo.username" placeholder="请输入用户名"/>
      </KFormItem>
      <!--密码-->
      <KFormItem lable="密码" prop="username">
        <KInput type="password" v-model="userInfo.password" placeholder="请输入密码"/>
      </KFormItem>
       <!--提交按钮-->
       <KFormItem>
         <button @click="login">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from "@/components/form/KInput.vue";
import KFormItem from "@/components/form/KFormItem.vue";
import KForm from "@/components/form/KForm.vue";
import Notice from "@/components/Notice.vue";
export default {
  data() {
    return {
      userInfo: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    KInput,
    KFormItem,
    KForm
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate(valid => {
        const notice = this.$create(Notice, {
          title: "社会你杨哥喊你来搬砖",
          message: valid ? "请求登录!" : "校验失败!",
          duration: 2000
        });
        notice.show();
        // if (valid) {
        //   alert("submit");
        // } else {
        //   console.log("error submit!");
        //   return false;
        // }
      });
    }
  }
};
</script>

