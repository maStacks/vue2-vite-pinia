<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import {mapState} from 'pinia'
import {user} from "@/store/modules/user";

export default {
  name: 'Dashboard',
  computed: {
    ...mapState(user, ['name'])
  },
  created(){
    
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
