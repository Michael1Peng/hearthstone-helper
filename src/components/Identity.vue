<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }">
    <div :style="bannerStyle"></div>
    <div class="contain">
      <el-input
          class="input"
          size="medium"
          ref="attack"
          v-model="entity.attack"
          v-on:input="changeFocus('attack')">
      </el-input>
      <el-input
          class="input"
          size="medium"
          ref="defense"
          v-model="entity.life"
          v-on:input="changeFocus('defense')">
      </el-input>
      <el-row>
        <el-button icon="el-icon-refresh-right" plain circle></el-button>
        <el-button :type="buttonType" icon="el-icon-check" plain circle></el-button>
      </el-row>
    </div>
  </el-card>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  /**
   * @emits changeDefense This event means we change this identity's life, then we should
   *                      move focus to next identity's attack.
   */

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
      this.$store.watch(
          state => state.nextFocus,
          (value, oldValue) => {
            if (value.id === Number(this.id) && value.team === this.role) {
              this.$refs[value.position].focus();
            }
          },
          {
            deep: true
          }
      );
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
      entity: function () {
        return this.getEntity(this.role, this.id)
      },
      ...mapState([
        'nextFocus'
      ]),
      ...mapGetters([
        'getEntity'
      ])
    },
    methods: {
      changeFocus(position) {
        this.$store.dispatch('changeFocus', {id: this.id, position, team: this.role})
      }
    }
  }
</script>

<style>
  .box-card {
    width: 100%;
  }

  .contain {
    padding: 20px;
  }

  .input input {
    text-align: right;
  }
</style>
