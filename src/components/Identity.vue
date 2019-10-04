<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }">
    <div :style="bannerStyle"></div>
    <div class="contain">
      <el-input class="input" size="medium" v-model="attack">
      </el-input>
      <el-input class="input" size="medium" v-model="defense">
      </el-input>
      <el-row>
        <el-button icon="el-icon-refresh-right" plain circle></el-button>
        <el-button :type="buttonType" icon="el-icon-check" plain circle></el-button>
      </el-row>
    </div>
  </el-card>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Identity",
    data() {
      return {
        attack: 0,
        defense: 0
      }
    },
    props: {
      title: String,
      id: Number,
      role: String
    },
    mounted() {
    },
    computed: {
      bannerStyle: function () {
        return this.role === 'teammate' ?
            {
              height: '37px',
              'background-color': '#c6f1d6',
              'border-bottom': '1px solid #EBEEF5'
            } :
            {
              height: '37px',
              'background-color': '#ff8080',
              'border-bottom': '1px solid #EBEEF5'
            }
      },
      buttonType: function () {
        return this.role === 'teammate' ? 'primary' : 'danger'
      },
      ...mapState({
        entity(state) {
          return state.currentFlow
        }
      })
    }
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 100%;
  }

  .banner {
    height: 37px;
    background-color: #ff8080;
    border-bottom: 1px solid #EBEEF5;
  }

  .contain {
    padding: 20px;
  }

  .input input {
    text-align: right;
  }
</style>
