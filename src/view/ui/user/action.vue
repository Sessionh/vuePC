<template>
    <Table :columns="columns1" :data="data1"  style="height: calc(100vh - 116px)"></Table>
</template>
<script>
    export default {
    	name: 'action',
        data () {
            return {
                height: 300,
                columns1: [
                    {
                        title: '凯撒的',
                        key: 'name'
                    },
                    {
                        title: 'e脸上',
                        key: 'age'
                    },
                    {
                        title: '临时道路',
                        key: 'address'
                    }
                ],
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
            }
        },
        computed: {
          

        },
        created () {
            
        }
    }
</script>