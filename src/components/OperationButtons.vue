<template>
  <div>
    <el-row type="flex" justify="space-between" style="margin-top: 20px">
      <el-col v-for="o in 5" :key="o" style="display: flex;">
        <el-button plain style="margin: auto" @click="saveFlow(o-1)">保存存档{{o}}</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between" style="margin-top: 20px">
      <el-col v-for="o in 5" :key="o" style="display: flex;">
        <el-button type="success" plain style="margin: auto" @click="changeFlow(o-1)">读取存档{{o}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "OperationButtons",
    methods: {
      ...mapMutations([
        "saveFlow",
        "changeFlow"
      ])
    }
  }
</script>

<style scoped>

</style>
