export const index = {
    data: function () {
        return {
         //    options: echartData.getOptions(this),
            data: [
                 ['1970-01-01 03:02:01', 5],
                 ['1970-02-01 04:02:01', 20],
                 ['1970-03-01 03:02:01', 24], 
                 ['1970-04-01 03:02:01', 30], 
                 ['1970-05-01 03:02:01', 40], 
                 ['1970-06-01 03:02:01', 23], 
                 ['1970-07-01 03:02:01', 12]
            ]
        };
    },
    methods: {
        toggleShow (val) {
            console.log(val)
            console.log(this)
        },
        init () {
            let _self = this;
            setTimeout(() => {
                window.onresize = function () {
                    _self.$refs.echarts.resize();
                };
            }, 400);
        },
        ButClick () {
            this.toggleShow(11);
            this.data.push(['1970-08-01 03:02:01', 50])

        }
    }
}