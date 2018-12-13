
let echart = {}

echart.getOptions = (vm) => {
    let symbolSize = 10;
    let data = [
        ['1970-01-01 03:02:01', 5],
        ['1970-02-01 04:02:01', 20],
        ['1970-03-01 03:02:01', 24], 
        ['1970-04-01 03:02:01', 30], 
        ['1970-05-01 03:02:01', 40], 
        ['1970-06-01 03:02:01', 23], 
        ['1970-07-01 03:02:01', 12]
    ];
    let data1 = [
        ['1970-01-01 03:02:01', 3], 
        ['1970-02-01 04:02:01', 15], 
        ['1970-03-01 03:02:01', 24], 
        ['1970-04-01 03:02:01', 9], 
        ['1970-05-01 03:02:01', 30], 
        ['1970-06-01 03:02:01', 21], 
        ['1970-07-01 03:02:01', 50]
    ];
    let dataV = []
    dataV = vm.data;
    return {
        title: {
            text: '历史任务执行情况',
            textStyle: {
                color: '#0081C6'
            }
        },
        tooltip: {
            trigger: 'axis',
    //                       formatter: function (params) {
    //                           return 'X: ' + params[0].data[0] + '<br>Y: ' + params[0].data[1];
    //                       }
        },
        legend: {
            right: 10,
            top: 0,
            itemGap: 16,
            itemWidth: 18,
            itemHeight: 10,
            data: [{
                name: '执行成功(个)',
                // 强制设置图形为圆。
                icon: 'circle',
                // 设置文本为红色
                textStyle: {
                    color: 'green'
                }}, {
                name: '总数(个)',
                icon: 'circle',
                textStyle: {
                    color: '#3399ff'
                }}
            ],
            textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            left: 30,
            right: 30, // 设置网格左右距离
            bottom: 80
        },
        xAxis: {
            min: '1970-01-01 03:02:01',
            max: '1970-12-01 03:02:01',
            type: 'time',
            axisLine: {onZero: false},
            splitLine: {
                show: false
            },
        },
        yAxis: {
            min: -30,
            max: 60,
            type: 'value',
            axisLine: {onZero: false}
        },
        dataZoom: [
            {
                type: 'slider',
                xAxisIndex: 0,
                filterMode: 'none',
                end: 60
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                filterMode: 'none' // 过滤数据
            }
        ],
        series: [
            {
                id: 'a',
                name: '执行成功(个)',
                type: 'line',
                smooth: true, // 平滑处理
                itemStyle: {
                    color: 'green' // 线 颜色
                },
                symbolSize: symbolSize,
                data: dataV,
                label: { // 图形上的文本标签
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#000',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12
                        }
                    }
                }
            },
            {
                id: 'a1',
                name: '总数(个)',
                type: 'line',
                smooth: true, // 平滑处理
                itemStyle: {
                    color: '#3399ff' // 线 颜色
                },
                symbolSize: symbolSize,
                data: data1
            }
        ]
    } 
}




export default echart;