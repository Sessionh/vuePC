<template>
   <div>
		<Card>
			<div class="role_header">
			<div class="header_left">
				<TabChange @tabClick="tabClick" :tabList="tabList"/>
			</div>
			<div class="header_right">
				<InputSearch  @onSearch="onSearch"/>
			</div>
			</div>
			<Table :columns="columns" :data="data1" style="height: calc(100vh - 206px);margin-top: 20px"></Table>
		</Card>
     
  </div>
</template>

<script type="text/babel">
import tables from '@/libs/table.js';
export default {
  name: 'userRole',
  components: {
  },
  data() {
    return {
      searchValue: '',
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
          },
          
      ],
      columns: tables.userRole(this),
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
    edit(type, val) {
      const num = 2;
      let str = /^[0-9]{0,1}$/
      // console.log(str.test(num));
      if (str.test(num)) {
        let str = 3;


      }
    
      
    },
    tabClick(ev) {

    },
    onSearch (ev) {
      console.log(ev)
      this.searchValue = ev

    },
  }
};
</script>

<style lang="less" scoped>

.role_header {
  position: relative;
  height: 40px;
  .header_left {
    position: absolute;
    left: 0;
  }
  .header_right {
    position: absolute;
    right: 0;

  }
}
 
</style>