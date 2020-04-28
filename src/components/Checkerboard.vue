<template>
  <el-container>
    <el-header>
      <b>Hearthstone Helper</b>
    </el-header>
    <el-main>
      <Team :role="enemy"/>
      <Team :role="teammate" style="margin-top: 20px"/>
      <operation-buttons></operation-buttons>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import Team from './Team.vue';
  import OperationButtons from "@/components/OperationButtons.vue";
  import Vue from 'vue'

  export default Vue.extend({
    name: "Checkerboard",
    components: {
      Team,
      OperationButtons
    },
    data() {
      const TEAMMATE: string = 'teammate';
      const ENEMY: string = 'enemy';

      return {
        enemy: ENEMY as string,
        teammate: TEAMMATE as string
      }
    }
  })
</script>

<style>
  .el-header {
    color: #1fab89;
    line-height: 60px;
    font-size: 1.5em;
    border: 1px solid #eee
  }
</style>
