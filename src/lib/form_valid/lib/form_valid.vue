<template>
  <div>
    <div class="userinfo">
      <span>账号：</span>
      <input type="text" v-model="name">
    </div>
    <div class="userinfo">
      <span>数字密码：</span>
      <input type="text" v-model="password" @input="onKeyup">
    </div>
    <div>
      <a-button class="buttoncl" @click="login">登录</a-button>
    </div>
  </div>
</template>

<script>
import message from '../commons/Message/message'
export default {
  props: {
    min: Number,
    type: {
      type: String,
      default: 'string'
    }
  },
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    onKeyup() {
      if (this.type === 'number') {
        if (this.min >= 0) {
          this.password = this.password.replace('-','')
        }
        this.password = this.password.replace(/^(0+)|[^\d]+/g,'')
      }
    },
    login () {
      if (!this.name || !this.password) {
        message({ type: "warn", text: "请输入完整信息" });
        return
      }
      this.$emit('login', {name: this.name, password: this.password})
    }
  }
}
</script>

<style>
.userinfo{
  margin: 10px 0
}
.userinfo span {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.buttoncl{
  border: 1px solid #eee;
  padding: 8px 23px;
  display: inline-block;
  margin-top:20px;
  color:#fff;
  background-color:#0c9fee
}

</style>