<template>
<div class="loginPage">
  <button @click="tryLogin">Login</button>
</div>
</template>
<script>
import {sendLogin} from '@/service/getData'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.initState()
  },
  methods: {
    ...mapMutations([
      'RECORD_USERINFO' // 登陆成功后保存用户信息
    ]),
    initState () {
    },
    // 登录form提交
    async tryLogin (formName) {
      let res = await sendLogin()
      this.RECORD_USERINFO(res.data) // 标记登录 存入store
      this.$router.push('/index')
    }
  }
}
</script>
<style>
</style>
