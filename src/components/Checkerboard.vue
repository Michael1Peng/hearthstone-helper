<template>
  <el-container>
    <el-header>
      <b>Hearthstone Helper</b>
    </el-header>
    <el-main>
      <Team/>
    </el-main>
  </el-container>
</template>

<script>
  import Team from './Team';

  export default {
    name: "Checkerboard",
    components: {
      Team
    }
  }
</script>

<style>
  .el-header {
    color: #1fab89;
    line-height: 60px;
    font-size: 1.5em;
    border: 1px solid #eee
  }
</style>