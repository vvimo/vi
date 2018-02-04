<template>
  <div>
    <div class="c-screen m-t-sm m-b-sm">
      <div class="container">
        <c-search style="line-height: 30px"></c-search>
        <ul class="m-t-sm" style="overflow: hidden">
          <li class="f-l clearfix" v-for="(item, index) in classfily" :key="index">
            <span class="m-r-md pointer" :style="index === action ? 'color: #2d8cf0' : ''" @click="classfilyFun(index)">{{ $t(item) }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div style="background: #f2f2f2">
      <div class="container p-t-sm p-b-sm">
        <c-list style="overflow: hidden; margin: 0 -8px">
          <c-list-item class="p-sm m-b-xs" v-for="(item, index) in list" :key="index" style="overflow: hidden; background: #fff;">
            <div style="width: 72px; height: 72px; overflow: hidden" v-if="item.photo !== ''" class="f-l m-r-sm">
              <a href="">
                <img :src="item.photo" style="height: 100%">
              </a>
            </div>
            <div style="min-height: 72px; font-size: 12px; color: #aaa">
              <span class="f-r">
                <c-icon class="icon-time"></c-icon>{{ item.time }}
              </span>
              <p>
                <a href="" style="font-size: 16px">{{ item.title }}</a>
              </p>
              <p class="m-t-xs t-ell" style="font-size: 14px">
                {{ item.profile === '' ? '...' : item.profile }}
              </p>
              <p class="m-t-xs">
                <span>
                  {{ item.classfily }} - {{ item.tag }}
                </span>
                <span class="m-l-xs">
                  <c-icon class="icon-visible"></c-icon>{{ item.read }}
                </span>
                <span class="m-l-xs">
                  <c-icon class="icon-like"></c-icon>{{ item.read }}
                </span>
              </p>
            </div>
          </c-list-item>
        </c-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'datum',
  components: {},
  data () {
    return {
      action: 0,
      classfily: ['classfily.all', 'classfily.plane', 'classfily.ui', 'classfily.webpage', 'classfily.illustration'],
      list: [
        {
          photo: '',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: '无论是在BAT还是创业小公司，都随时可能接到从0开始的新项目，那么作为负责新项目的主设OR独立设计师，我们应该从何开启工作呢？安卓要用Roboto，安卓系统原生字体。'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: '',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112',
          profile: ''
        }
      ]
    }
  },
  computed: {},
  methods: {
    classfilyFun (index) {
      this.action = index
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
