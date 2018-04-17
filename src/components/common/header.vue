<template>
<div class="clearfix">
  <div class="fl">
    <h1 class="site-logo">数知科技</h1>
    <span class="site-intro">产业链录入系统</span>
  </div>
  <div class="fr mod-header-fn">
    <span v-if="userInfo.nickname">{{userInfo.nickname}}</span>&nbsp;&nbsp;
    <button type="danger" size="small" @click="tryLogoOut">退出</button>
  </div>
</div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  mounted () {
  },
  methods: {
    ...mapMutations([
      'OUT_LOGIN' // 登陆成功后保存用户信息
    ]),
    tryLogoOut () {
      this.OUT_LOGIN()
      this.$router.push('/login')
    }
  }
}
</script>
<style>
</style>
