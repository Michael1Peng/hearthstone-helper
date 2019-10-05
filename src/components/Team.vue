<template>
  <el-row class="row" type="flex" justify="center" :gutter="20">
    <el-col v-for="o in 7" :key="o" :span="4">
      <identity :role="role" :id="o"></identity>
    </el-col>
  </el-row>
</template>

<script >
  import Identity from './Identity';

  export default {
    name: "Team",
    components: {Identity},
    props: {
      role: String
    },
    mounted() {
    }
  }
</script>

<style>
  .row {
    border: #1fab89 1px solid;
  }
</style>
