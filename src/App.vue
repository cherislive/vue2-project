<template>
<transition>
  <router-view></router-view>
</transition>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
  },
  mounted () {
    this.getUserInfo() // 获取用户信息
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
