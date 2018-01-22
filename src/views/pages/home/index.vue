<template>
  <div>
    <c-input type="textarea" v-model="value1" ></c-input>
    <c-search class="m-t-md" v-model="value2">
      <c-search-dropdown slot="dropdown" style="height: 60px"></c-search-dropdown>
    </c-search>
    <c-list class="m-t-md">
      <c-list-item v-for="(item, index) in list" :key="index">
        <div>
          <c-tag :text="item.tag"></c-tag>
          <span>
            <a class="a" href="">{{ item.name }}</a>
          </span>
          <span class="f-r">{{ item.time | formatTime }}</span>
        </div>
        <h2 class="">
            <a class="a" href="">{{ item.title }}</a>
        </h2>
        <div>
            <img :src="item.avatar">
            <p>{{ item.msg }}</p>
        </div>
      </c-list-item>
    </c-list>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data () {
    return {
      value1: 'asd',
      value2: '',
      list: [
        { title: '1', tag: 'html', msg: '1...', time: '1516520362', name: '1a', avatar: '' },
        { title: '2', tag: 'css', msg: '2...', time: '1516520262', name: '2a', avatar: '' },
        { title: '3', tag: 'js', msg: '3...', time: '1516519362', name: '3a', avatar: '' },
        { title: '4', tag: 'js', msg: '4...', time: '1516420362', name: '4a', avatar: '' },
        { title: '5', tag: 'js', msg: '5...', time: '1516320362', name: '5a', avatar: '' }
      ]
    }
  },
  computed: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
