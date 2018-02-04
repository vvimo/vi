<template>
  <div class="container p-t-sm p-b-sm">
    <el-row :gutter="24">
      <el-col :span="17">
        <c-list class="h-list">
          <c-list-item class="h-list-item p-sm m-b-xs" v-for="(item, index) in list" :key="index">
            <div v-if="item.photo !== ''" class="h-list-photo f-l m-r-sm">
              <router-link to="">
                <img :src="item.photo">
              </router-link>
            </div>
            <div class="h-list-info">
              <span class="f-r">
                <c-icon class="icon-time"></c-icon>{{ item.push | formatTime }}
              </span>
              <p>
                <router-link class="h-list-title" :to="{ name: 'info', params: { id: item.id } }">
                  {{ item.title }}
                </router-link>
              </p>
              <p class="m-t-xs t-ell h-list-msg">
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
      </el-col>
      <el-col :span="7">
        <div class="h-user p-t-md">
          <div class="h-user-bg p-t-xs">
            <div class="h-user-photo">
              <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1945343878,3655021699&fm=58">
            </div>
            <div class="h-user-info p-t-lg p-l-sm p-r-sm p-b-sm">
              <a href="" style="font-size: 16px; color: #666">vvimo</a>
              <br>
              <span style="color: #aaa">25岁</span>
              <el-row :gutter="8" class="m-t-sm p-t-sm p-l-xs p-r-xs" style="border-top: 1px solid #f3f3f3" align="left">
                <el-col :span="8">
                  <span style="color: #aaa; font-size: 12">文章</span>
                  <br>
                  <a href="" style="font-size: 14px; color: 666; line-height: 24px">12</a>
                </el-col>
                <el-col :span="8">
                  <span style="color: #aaa; font-size: 12">文章</span>
                  <br>
                  <a href="" style="font-size: 14px; color: 666; line-height: 24px">12</a>
                </el-col>
                <el-col :span="8">
                  <span style="color: #aaa; font-size: 12">文章</span>
                  <br>
                  <a href="" style="font-size: 14px; color: 666; line-height: 24px">12</a>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="h-user-time">
          <ul>
            <li :class="index == 0 ? 'active' : ''" v-for="(item, index) in time" :key="index">
              <span>{{ item.name }}</span>
              <p v-for="(node, nIndex) in item.node" :key="nIndex">{{ node.name }}</p>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { articleList } from '@/api/article'

export default {
  name: 'home',
  components: {},
  data () {
    return {
      value1: 'asd',
      value2: '',
      list: [],
      pages: {
        size: 10,
        index: 1,
        total: 0
      },
      time: [{
        name: '2018',
        node: [{
          name: 'XX项目圆满上线'
        }, {
          name: 'XXXXXX项目圆满上线'
        }]
      }, {
        name: '2017',
        node: [{
          name: 'XX项目圆满上线'
        }, {
          name: 'XXXXXX项目圆满上线'
        }]
      }, {
        name: '2016',
        node: [{
          name: 'XX项目圆满上线'
        }, {
          name: 'XXXXXX项目圆满上线'
        }]
      }, {
        name: '2015',
        node: [{
          name: 'XX项目圆满上线'
        }, {
          name: 'XXXXXX项目圆满上线'
        }]
      }]
    }
  },
  computed: {},
  methods: {
    currentChangeFun (val) {
      articleList({
        pageSize: this.pages.size,
        pageIndex: val
      }).then(response => {
        this.list = response.data.code === 200 ? response.data.data : []
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.currentChangeFun(1)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
