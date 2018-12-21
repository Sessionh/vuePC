
<template>
   <div>
       <div class="homes">
            <div class="leftHome">
                <div class="homeUser">
                    <div class="leftHome_center">
                        <div>
                            <img class="user_img" src="../image/homeLogo.png"/>
                        </div>
                        
                        <div class="user_name">
                            Brandon Jhon
                        </div>
                        <div class="user_icon">
                            <div class="icon1">
                                  <i class="iconfont">&#xe665;</i>
                            </div>
                             <div class="icon2">
                                <i class="iconfont">&#xe659;</i>

                            </div>
                             <div class="icon3">
                                <i class="iconfont icon_3">&#xe62e;</i>

                            </div>
                        </div>

                        </div>
                
                </div>

                <div class="homeList"> 
                    <ul>
                        <li>My Activity</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
                

            </div>
            <div class="rightHome">
                <div class="home_title">
                    <div class="home_title_left">
                        <div class="title_top">
                            Dashboard
                        </div>
                        <div>
                            See the progress and decline
                        </div>
                        
                       
                    </div>
                    <div class="search">
                         <InputSearch borderColor="#fff"/>
                    </div>
                   
                   

                </div>
                <div>

                    <Row type="flex" justify="space-between">
                        <Col span="5"  class="colClass" v-for="item in cardList" :key="item.id">
                            <Card  class="cardClass" :padding="0" :style="{background:  item.color}">
                                <div class="context">
                                    <div class="context_title">
                                        {{item.title}}
                                        
                                    </div>
                                    <div class="context_number">
                                         <ICountUp
                                            :startVal="startVal"
                                            :endVal="item.num"
                                            :decimals="decimals"
                                            :duration="duration"
                                            :options="optionsNum"
                                            @ready="onReady"
                                        />
                                    </div>

                                </div>
                               
                            </Card>
                        </Col>

                        

                    </Row><br>

                    <Card>
                        <Row>
                            <Col>
                                <div class="echatDiv">
                                <Echats ref="echarts" :options="options"  style="width: 100%;"></Echats>
                                </div>
                            </Col>
                        </Row>

                    </Card>
                    
                 </div>

            

            </div>

       </div>
       
        

   </div>

</template>
<script>
import Echats from 'vue-echarts';
import echartData from './echart.js';
import {index} from '@/mixins/mixin_table.js';
import ICountUp from 'vue-countup-v2';
export default {
    components: {
        Echats,
        ICountUp,
    },
    mixins: [index],
    data: function () {
        return {
            //    options: echartData.getOptions(this),
            startVal: 0,
            decimals: 0,
            duration: 2,
            optionsNum: {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            },
            data: [
                    ['1970-01-01 03:02:01', 5],
                    ['1970-02-01 04:02:01', 20],
                    ['1970-03-01 03:02:01', 24], 
                    ['1970-04-01 03:02:01', 30], 
                    ['1970-05-01 03:02:01', 40], 
                    ['1970-06-01 03:02:01', 23], 
                    ['1970-07-01 03:02:01', 55]
            ],
            value: '',
            inputInitData: '',
            cardList: [
                {
                    id: 1,
                    title: 'Steem Dollar',
                    num: 421980,
                    color: 'linear-gradient(to right, rgb(87, 202, 87), rgb(179, 247, 179))'
                },
                {
                    id: 2,
                    title: 'Steem Power',
                    num: 92300,
                    color: 'linear-gradient(to right, rgb(187, 139, 233),rgb(221, 196, 245))'
                },
                {
                    id: 3,
                    title: 'Saving',
                    num: 2388,
                    color: 'linear-gradient(to right,   rgb(243, 141, 82), rgb(243, 176, 137))'
                },
                {
                    id: 4,
                    title: 'File see',
                    num: 4899,
                    color: 'linear-gradient(to bottom,  #3b548f, #6a81b6)'
                }
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

        },
        onReady(instance, CountUp) {
            const that = this;
            // instance.update(that.endVal + 100);
        }
      
    },
    computed: {
        options() {
            return echartData.getOptions1(this)
        }

    },
    mounted () {
        this.$nextTick(() => {
            this.init();

        })
        
    },
    destroyed () {
        window.onresize = function () {
            
        };
    }
}

</script>

<style lang="less" scoped>
.homes {
    display: flex;
    height: calc(100vh - 116px);
    width: 100%;
    // color: #6a81b6;
    .leftHome {
        width: 280px;
        height: 100%;
        background: white;
        box-shadow: 3px 0 20px -10px black;
        margin-right: 10px;
        .homeUser {
            width: 100%;
            height: 260px;
            background: #eeeeee;
            position: relative;
            .leftHome_center {
                width: 130px;
                height: 140px;
                // background: white;
                text-align: center;
                position: absolute;
                left: calc(50% - 65px);
                top: 25%;
                .user_img {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: wheat;
                    padding: 2px;

                  
                }
                .user_name {
                    padding: 3px 0 0 0;
                    font-size: 18px;
                    font-weight: 500;
                }
                .user_icon {
                    display: flex;
                    padding-top: 5px;
                    // background-image: linear-gradient(to right , #5e9ae9, #7AFFAF);
                    .iconfont {
                        color: #5e9ae9;
                        font-weight: 600;
                        cursor: pointer;
                    }
                    .icon1 {
                        flex: 1;

                    }
                    .icon2 {
                        flex: 1;

                    }
                    .icon3 {
                        flex: 1;
                        .icon_3 {
                            font-size: 15px;
                        }
                        
                        

                    }
                }

            }
           
           

        }

        .homeList {
            padding: 10px;
            ul {
                list-style-type: none;
            }
        }
        

    }
    .rightHome {
        flex: 1;
        padding: 10px;
        height: 100%;
        
        // background: green;
        .home_title {
            height: 40px;
            // background: wheat;
            margin-bottom: 20px;
            position: relative;
            .home_title_left {
               

                .title_top {
                    font-size: 23px;
                    font-weight: 700;
                }
                .title_bottom {
                    font-weight: 700;
                }


            }
            .search {
                position: absolute;
                right: 0;
                top: 25%;
            }

        }
    }

}


.cardClass {
    height: 150px;
    width: 100%;
    margin-right: 10px;
    border-radius: 10px;
    position: relative;

    .context {
        position: absolute;
        top: 25%;
        left: 20px;
        color: white;
       
        .context_title {
            font-size: 20px;

        }
        .context_number {
            font-size: 28px;
           
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

        }

    }
   
}
.countLeft {
    height:150px;
    text-align: center;
    padding-top: 40%;
}
.countRight {
    text-align: center;
    height: 150px;
}
.countSpan {
    text-align: center;
    color: #FFFFFF;
    font-size: 35px;
    font-weight: 700;
}

.spanHost {
    font-size: 14px;
    font-weight: 500;
    color:#FFFFFF;
}
.echarts {
    height: 350px;
    width: 100%;
}
.colClass {
    // margin-right: 10px;
}

 .iCountUp {
    font-size: 18px;
    color: #4d63bc;
  }

</style>