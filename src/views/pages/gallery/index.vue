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
          <c-list-item class="f-l clearfix m-xs" v-for="(item, index) in list" :key="index" style="width: 192px; overflow: hidden; border-radius: 4px; background: #fff">
            <div>
              <img :src="item.photo" style="width: 100%">
            </div>
            <div class="p-xs" style="font-size: 12px; color: #aaa">
              <p>
                <a href="" style="color: #2d8cf0; font-size: 14px">{{ item.title }}</a>
              </p>
              <p class="m-t-xs">{{ item.classfily }} - {{ item.tag }}</p>
            </div>
            <div class="p-xs" style="border-top: 1px solid #f2f2f2">
              <p align="center" style="font-size: 12px; color: #aaa">
                <span class="f-l">
                  <c-icon class="icon-visible"></c-icon>{{ item.read }}
                </span>
                <span class="m-l-xs">
                  <c-icon class="icon-like"></c-icon>{{ item.read }}
                </span>
                <span class="f-r">
                  <c-icon class="icon-time"></c-icon>{{ item.time }}
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
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
        }, {
          photo: 'http://img.zcool.cn/community/01e8d25a68003ca80120a123826589.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
          title: '2017游戏网页设计',
          classfily: '网页',
          tag: '游戏/娱乐',
          time: '1天前',
          read: '112'
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
