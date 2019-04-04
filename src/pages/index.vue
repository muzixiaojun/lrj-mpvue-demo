<template>
  <div @click="clickHandle">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter" class="counter">去往Vuex示例页面</a>
    {{count}}
    <button @click="del">--</button>
    <button @click="add">++</button>
    {{counts}}
    <button @click="dels">--</button>
    <button @click="adds">++</button>
    <button @click="go">测试那妞</button>
    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import { userLogin } from '@/utils/api'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },
  components: {
    card
  },
  computed: {
    count () {
      console.log(this.$store)
      return this.$store.state.counter.count
    },
    counts () {
      console.log(this.$store)
      return this.$store.state.count.count
    }
  },
  methods: {
    go () {
      console.log(this.$router)
      this.$router.push('/pages/counter')
    },
    bindViewTap () {
      console.log(1)
      // const url = './test'
      // if (mpvuePlatform === 'wx') {
      //   console.log(22)
      //   mpvue.switchTab({ url })
      // } else {
      //   console.log(333)
      //   mpvue.navigateTo({ url })
      // }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    add () {
      this.$router.push('/pages/login')
      this.$store.commit('increment')
    },
    del () {
      userLogin(111).then(res => {
        console.log(2222)
      })
      this.$store.commit('decrement')
    },
    adds () {
      console.log(this)
      this.$store.commit('increments')
    },
    dels () {
      this.$store.commit('decrements')
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="scss">
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  .userinfo-avatar {
    border: 2px saddlebrown solid;
  }
}

.userinfo-avatar {
  width: rpx(128);
  height: rpx(128);
  margin: rpx(20);
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
