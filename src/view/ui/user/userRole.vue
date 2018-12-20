<template>
  <div>
   <Card>
     <tabChange @tabClick="tabClick" :tabList="tabList"/>
      <Table :columns="columns1" :data="data1" style="height: calc(100vh - 206px);margin-top: 20px"></Table>
   </Card>
     
  </div>
</template>

<script type="text/babel">
import tabChange from '@/view/common/tabChange.vue';
import tables from '@/libs/table.js';
export default {
  name: 'userRole',
  components: {
    tabChange,

  },
  data() {
    return {
      tabList: [
          {
            id: 1,
            name: '全部',
          },
          {
            id: 2,
            name: '已发布',
          },
          {
            id: 3,
            name: '审核中',
          },
          {
            id: 4,
            name: '已拒绝',
          }
      ],
      columns1: tables.userRole,
      data1: [
          {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
          },
          {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
          },
          {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
          },
          {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
          }
      ]
    };
  },
  methods: {
    tabClick(ev) {
      console.log(ev)

    }
  }
};
</script>

<style lang="less" scoped>
 
</style>