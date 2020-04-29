<template>
  <el-row class="row" type="flex" justify="center" :gutter="20">
    <el-col v-for="o in 7" :key="o" :span="4">
      <identity :role="role" :key-char="keys[o-1]" :id="o-1"></identity>
    </el-col>
  </el-row>
</template>

<script>
  import Identity from './Identity';
  import {TeammatesKeys, EnemiesKeys} from "@/utils/KeyboardOperations";

  export default {
    name: "Team",
    components: {Identity},
    props: {
      role: String
    },
    computed: {
      keys() {
        return this.role === 'teammate' ? TeammatesKeys : EnemiesKeys
      }
    }
  }
</script>

<style>
  .row {
    border: #1fab89 1px solid;
  }
</style>
