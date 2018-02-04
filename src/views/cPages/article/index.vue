<template>
  <div>
    <div>
      <el-button icon="el-icon-plus" type="success" size="mini" @click="toFun">添加</el-button>
      <el-button icon="el-icon-delete" type="danger" size="mini">删除</el-button>
    </div>
    <div>
      <el-table ref="singleTable" :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column sortable property="title" label="标题"></el-table-column>
        <el-table-column prop="sort" label="标签" width="120"
          :filters="filters"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.sort === '家' ? 'primary' : 'success'" close-transition>{{ scope.row.sort }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column sortable property="push" label="发布日期" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.push | parseTime }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable property="type" label="类型" width="120">
          <template slot-scope="scope">
            <span>{{ type[scope.row.type] }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable property="state" label="状态" width="120">
          <template slot-scope="scope">
            <span>{{ state[scope.row.state] }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="m-t-md" background layout="prev, pager, next" :total="pages.total" :page-size="pages.size" @current-change="currentChangeFun"></el-pagination>
    </div>
  </div>
</template>

<script>
import { articleList } from '@/api/article'

export default {
  name: 'cArticle',
  components: {},
  data () {
    return {
      currentPage: 1,
      tableData: [],
      pages: {
        size: 10,
        index: 1,
        total: 0
      },
      filters: [
        {
          text: 'js',
          value: 'JavaScript'
        }, {
          text: 'html',
          value: 'Html'
        }
      ],
      type: ['正常', '封闭'],
      state: ['上架', '下架']
    }
  },
  computed: {},
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    filterTag (value, row) {
      return row.classify === value
    },
    currentChangeFun (val) {
      articleList({ pageSize: this.pages.size, pageIndex: val }).then(response => {
        this.tableData = response.data.code === 200 ? response.data.data : []
        this.pages.total = response.data.total
      }).catch(error => {
        console.log(error)
      })
    },
    toFun () {
      this.$router.push('articleSave')
    }
  },
  mounted () {
    this.currentChangeFun(this.currentPage)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
