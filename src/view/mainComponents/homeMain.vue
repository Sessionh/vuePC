
<template>
   <div>
       <Card style="height: calc(100vh - 116px)">
           <Row type="flex" justify="space-between">
            <Col span="5" class="colClass">
            <Card class="cardClass" :padding="0">
            <Row>
                <Col span="9">
                <div class="countLeft" style="background-color: #0278AE;">
                    <Icon type="ios-monitor-outline" size="40" style="color: #FFFFFF;margin-bottom: 3px;"></Icon>
                    <br>
                    <span class="spanHost">业务主机数</span>
                </div>
                </Col>

                <Col span="15">
                <div class="countRight" style="background-color: #2baee9; padding-top: 30px;">
                    <span class="countSpan">3</span>
                    <br>
                    <span style="color: #FFFFFF">Agent正常：2</span>
                    <br>
                    <span style="color: #FFFFFF">Agent未安装：1</span>

                </div>
                </Col>
            </Row>
            </Card>
            </Col>

            <Col span="5"  class="colClass">
            <Card class="cardClass" :padding="0">
            <Row>
                <Col span="9">
                <div class="countLeft" style="background-color: #194769;">
                    <Icon type="clipboard" size="40" style="color: #FFFFFF;margin-bottom: 3px;"></Icon>
                    <br>
                    <span class="spanHost">常用作业数</span>
                </div>
                </Col>

                <Col span="15">
                <div class="countRight" style="background-color: #FA9856;padding-top: 50px;">
                    <span class="countSpan">0</span><br>
                </div>
                </Col>
            </Row>
            </Card>
            </Col>


            <Col span="5"  class="colClass">
            <Card class="cardClass" :padding="0">
            <Row>
                <Col span="9">
                <div class="countLeft" style="background-color: #D6C481;color: #FFFFFF">
                    <Icon type="calendar" size="40" style="color: #FFFFFF;margin-bottom: 3px;"></Icon>
                    <br>
                    <span class="spanHost">本月执行任务数</span>
                </div>
                </Col>

                <Col span="15">
                <div class="countRight" style="background-color: #4AA6B5;padding-top: 20px;">
                    <span class="countSpan">30</span>
                    <br>
                    <span style="color: #FFFFFF">执行中：0</span>
                    <br>
                    <span style="color: #FFFFFF">成功：28</span>
                    <br>
                    <span style="color: #FFFFFF">失败：2</span>
                </div>
                </Col>
            </Row>
            </Card>
            </Col>

            <Col span="5">
            <Card class="cardClass" :padding="0">
            <Row>
                <Col span="9">
                <div class="countLeft" style="background-color: #597FCA">
                    <Icon type="ios-alarm-outline" size="40" style="color: #FFFFFF;margin-bottom: 3px;"></Icon>
                    <br>
                    <span class="spanHost">定时任务数</span>
                </div>
                </Col>

                <Col span="15">
                <div class="countRight" style="background-color: #5AC8D8;padding-top: 30px;">
                    <span class="countSpan">0</span>
                    <br>
                    <span style="color: #FFFFFF">启动：0</span>
                    <br>
                    <span style="color: #FFFFFF">暂停：0</span>
                </div>
                </Col>
            </Row>
            </Card>
            </Col>

        </Row><br>

        <Row>
            <Col>
                <div class="echatDiv">
                <Echats ref="echarts" :options="options"  style="width: 100%"></Echats>
                </div>
            </Col>
        </Row>
        <button @click="ButClick()">点击</button>

       </Card>
   </div>

</template>
<script>
   import Echats from 'vue-echarts';
   import echartData from './echart.js';
   import {index} from './index';
   export default {
       components: {
           Echats
       },
       mixins: [index],
       computed: {
           options() {
               return echartData.getOptions(this)
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
   .cardClass {
      height: 150px;
      width: 100%;
      margin-right: 10px;
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
      color: #FFFFFF;
   }
   .echarts {
      height: 350px;
      width: 100%;
   }
   .colClass {
      margin-right: 10px;
   }

</style>