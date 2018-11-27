<template>
    <div>
        <!-- <button @click="butClick(1)">点击</button>
         <button @click="butClick(2)">点击1</button> -->
      <toolbar/>
        <div class="main-content" :style="{height: (editorHeight + 'px')}">
            <div id="itempannel">
                <ul>
                    <li class="getItem" data-shape="k-means" data-type="node" data-size="170*34">
                        <span class="pannel-type-icon"></span>K 均值聚类
                    </li>
                    <li class="getItem" data-shape="random-forest" data-type="node" data-size="170*34">
                        <span class="pannel-type-icon"></span>随机森林
                    </li>
                    <li class="getItem" data-shape="PS-SMART" data-type="node" data-size="170*34">
                        <span class="pannel-type-icon"></span>PS-SMART 分类
                    </li>
                    <li class="getItem" data-shape="read-data-base" data-type="node" data-size="170*34">
                        <span class="pannel-type-icon"></span>读数据表
                    </li>
                    <li className="getItem" data-shape="Bayes" data-type="node" data-size="170*34">
                        <span class="pannel-type-icon"></span>朴素贝叶斯
                    </li>


                    
                </ul>
            </div>
            <div id="detailpannel">
                <div data-status="node-selected" class="pannel" id="node_detailpannel">
                    <div class="pannel-title">模型详情</div>
                    <div class="block-container">
                        名称:  <Input v-model="pannelVlaue" @on-blur="onBlur" style="width: 120px;"/>
                    </div>
                </div>
                <div data-status="group-selected" class="pannel" id="node_detailpannel">
                    <div class="pannel-title">群组详情</div>
                    <div class="block-container">
                        名称:  <Input v-model="pannelVlaue" @on-blur="onBlur" style="width: 120px;"/>
                    </div>
                </div>
                <div data-status="canvas-selected" class="pannel" id="canvas_detailpannel">
                    <div class="pannel-title">画布</div>
                    <div class="block-container">
                       <Checkbox  v-model="pannelSelect" @on-change="canvasChange">画布</Checkbox>
                    </div>
                </div>
            </div>
            <div class="minimapTitle">导航器</div>
            <div id="minimap"></div>
            <navigator @navigatorChange="navigatorChange"/>
            <div id="page"></div>


            <div id="contextmenu">
                <div data-status="node-selected" class="menu">
                    <div data-command="copy" class="command">
                        <span>复制</span>
                        <span>copy</span>
                    </div>
                    <div data-command="delete" class="command">
                        <span>删除</span>
                        <span>delete</span>
                    </div>
                </div>

                <div data-status="edge-selected" class="menu">
                    <div data-command="delete" class="command">
                      <span>删除</span>
                      <span>delete</span>
                    </div>
                </div>

                <div data-status="group-selected" class="menu">
                    <div data-command="copy" class="command">
                        <span>复制</span>
                        <span>copy</span>
                    </div>
                    <div data-command="delete" class="command">
                        <span>删除</span>
                        <span>delete</span>
                    </div>
                    <div data-command="unGroup" class="command">
                        <span>解组</span>
                        <span>unGroup</span>
                    </div>
                </div>

                <div data-status="canvas-selected" class="menu">
                    <div data-command="undo" class="command">
                        <span>撤销</span>
                        <span>undo</span>
                    </div>
                    <div data-command="redo" class="command">
                        <span>重做</span>
                        <span>redo</span>
                    </div>
                    <div data-command="pasteHere" class="command">
                        <span>粘贴</span>
                        <span>pasteHere</span>
                    </div>
                </div>

                <div data-status="multi-selected" class="menu">
                    <div data-command="copy" class="command">
                        <span>复制</span>
                        <span>copy</span>
                    </div>
                    <div data-command="paste" class="command">
                        <span>粘贴</span>
                        <span>paste</span>
                    </div>
                    <div data-command="addGroup" class="command">
                        <span>归组</span>
                        <span>addGroup</span>
                    </div>
                    <div data-command="delete" class="command">
                        <span>删除</span>
                        <span>delete</span>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import G6Editor from '@antv/g6-editor';
    import Editor from './component/Editor.vue';
    import toolbar from './component/toolbar.vue';
    import navigator from './component/navigator.vue';
    
    export default {
        name: 'hostTwo',
        components: {
            toolbar,
            navigator

        },
        extends: Editor,
        data() {
            return {
                pannelVlaue: '', // 修改node 
                msg: '设置',
                editor: '',
                pannelSelect: false,
                inputingLabel: false,
                flow: '',
                value: {
                    edges: [
                        {
                            id: "de78a7c7",
                            index: 3,
                            source: "c4e20589",
                            sourceAnchor: 1,
                            target: "7ed2580f",
                            targetAnchor: 0,
                        },
                        {
                            id: "8ef89cf7",
                            index: 4,
                            source: "c4e20589",
                            sourceAnchor: 1,
                            target: "75ee11e6",
                            targetAnchor: 0,
                        }

                    ],
                    nodes: [
                        {
                            id: "c4e20589",
                            index: 0,
                            label: "开始",
                            shape: "k-means",
                            size: "170*34",
                            type: "node",
                            x: 210,
                            y: 60,
                            style: {                 // 关键形样式（优先级高于color）
                                fill: 'red',
                                stroke: 'blue'
                            },
                        },
                        {
                            id: "7ed2580f",
                            index: 1,
                            label: "节点1",
                            shape: "random-forest",
                            size: "170*34",
                            type: "node",
                            x: 108,
                            y: 206,
                        },
                        {
                            id: "75ee11e6",
                            index: 2,
                            label: "节点2",
                            shape: "random-forest",
                            size: "170*34",
                            type: "node",
                            x: 358,
                            y: 208,
                        }
                    ]
                }
            }
        },
        methods: {
            butClick(index) { // 测试保存数据
                const data = {
                    nodes: [{
                        shape: "customNode",
                        id: "node1",
                        x: 50,
                        y: 100
                    }, 
                    {
                        shape: "customNode",
                        id: "node2",
                        x: 250,
                        y: 100
                    }
                    ],
                };


                if (index === 1) {
                    // this.page.read(this.value)
                     this.page.read(data)

                } else {
                    // this.page.read(data)

                    // this.page.add('guide', {
                    //   shape: 'tag',
                    //   nodeId: 'node1',
                    //   label: '这是 node1'
                    // });
                    
                    let list = [
                       {
                            id: 'node1',
                            x: 200,
                            y: 300,
                            label: '节点1',
                            parent: 'group1',
                            size: '60*60'
                       },
                       {
                            id: 'node2',
                            x: 100,
                            y: 300,
                            label: '节点2',
                            parent: 'group1',
                            size: '60*60'
                       },
                    ]

                    list.forEach(res => {
                        this.page.add('node',{
                            id: res.id,
                            x: res.x,
                            y: res.y,
                            label: res.lable,
                            parent: res.parent,
                            size: '60*60',
                          }
                         );
                    })
                    
                   
                   

                }
               
                
            },
            canvasChange(data) {
                this.toggleGrid(data)
            },
            onBlur() { // 失去焦点
                let value = this.pannelVlaue;
                if (value !== null && value !== '') {
                    this.updateGraph('label', value);
                    this.pannelVlaue = '';
                }
            },
            navigatorChange(num) { // 缩放比例
                let result1 = num / 100;
                this.changeZoom(result1);

            },
            initFlow() {
                const flow = G6Editor.Flow;

                flow.registerGuide('tag', {
                    draw(item) {
                        console.log(item)
                        const group = item.getGraphicGroup();
                        const model = item.getModel();
                        const {
                            nodeId,
                            label
                        } = model;
                        const graph = item.getGraph();
                        const node = graph.find(nodeId);
                        console.log(node)
                        const nodeBox = node.getBBox();
                        const dy = 32;
                        const labelMargin = [8, 16];
                        const labelShape = group.addShape('text', {
                            attrs: {
                                id: 222,
                                x: nodeBox.centerX,
                                y: nodeBox.minY - dy - 18,
                                text: label,
                                fill: '#333',
                                textAlign: 'center'
                            }
                        });

                        const labelBox = labelShape.getBBox();
                        const backRect = group.addShape('path', {
                            attrs: {
                                path: [
                                    ['M', labelBox.minX - labelMargin[1], labelBox.minY - labelMargin[0]],
                                    ['L', labelBox.maxX + labelMargin[1], labelBox.minY - labelMargin[0]],
                                    ['L', labelBox.maxX + labelMargin[1], labelBox.maxY + labelMargin[0]],
                                    ['L', labelBox.minX - labelMargin[1], labelBox.maxY + labelMargin[0]],
                                    ['Z']
                                ],
                                stroke: 'blue'
                            }
                        });
                        return backRect;
                    }
                });
                // 注册模型卡片基类
                flow.registerNode('model-card', {
                    draw(item) {
                        console.log(item)
                        const group = item.getGraphicGroup();
                        const model = item.getModel();
                        const width = 184;
                        const height = 40;
                        const x = -width / 2;
                        const y = -height / 2;
                        const borderRadius = 4;
                        const keyShape = group.addShape('rect', {
                            attrs: {
                                x,
                                y,
                                width,
                                height,
                                radius: borderRadius,
                                fill: 'white',
                                stroke: '#CED4D9'
                            }
                        });
                        // 左侧色条
                        group.addShape('path', {
                            attrs: {
                                path: [
                                    ['M', x, y + borderRadius],
                                    ['L', x, y + height - borderRadius],
                                    ['A', borderRadius, borderRadius, 0, 0, 0, x + borderRadius, y + height],
                                    ['L', x + borderRadius, y],
                                    ['A', borderRadius, borderRadius, 0, 0, 0, x, y + borderRadius]
                                ],
                                fill: this.color_type
                            }
                        });
                        // // 类型 logo
                        group.addShape('image', {
                            attrs: {
                                img: this.type_icon_url,
                                x: x + 16,
                                y: y + 12,
                                width: 20,
                                height: 16
                            }
                        });
                        // 名称文本
                        const label = model.label ? model.label : this.label;
                        group.addShape('text', {
                            attrs: {
                                text: label,
                                x: x + 52,
                                y: y + 13,
                                textAlign: 'start',
                                textBaseline: 'top',
                                fill: 'rgba(0,0,0,0.65)'
                            }
                        });
                        // 状态 logo
                        group.addShape('image', {
                            attrs: {
                                img: this.state_icon_url,
                                x: x + 158,
                                y: y + 12,
                                width: 16,
                                height: 16
                            }
                        });
                        return keyShape;
                    },
                    // 设置锚点
                    anchor: [
                        [0.5, 0], // 上面边的中点
                        [0.5, 1] // 下边边的中点
                    ]
                });

                // k 均值聚类
                flow.registerNode('k-means', {
                    label: 'k 均值聚类',
                    color_type: '#1890FF',
                    type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
                    state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
                    // 设置锚点
                    anchor: [
                        [0.5, 0, {
                            type: 'input'
                        }], // 上面边的中点
                        [0.5, 1, {
                            type: 'output'
                        }] // 下边边的中点
                    ]
                }, 'model-card');

                // 随机森林
                flow.registerNode('random-forest', {
                    label: '随机森林',
                    color_type: '#9254DE',
                    type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
                    state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
                    // 设置锚点
                    anchor: [
                        [0.5, 0, {
                            type: 'input'
                        }],
                        [0.5, 1, {
                            type: 'output'
                        }]
                    ]
                }, 'model-card');

                // PS-SMART 分类
                flow.registerNode('PS-SMART', {
                    label: 'PS-SMART 分类',
                    color_type: '#1890FF',
                    type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
                    state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
                    // 设置锚点
                    anchor: [
                        [0.5, 0, {
                            type: 'input'
                        }],
                        [0.33, 1, {
                            type: 'output'
                        }],
                        [0.66, 1, {
                            type: 'output'
                        }]
                    ]
                }, 'model-card');

                // 朴素贝叶斯
                flow.registerNode('Bayes', {
                    label: '朴素贝叶斯',
                    color_type: '#9254DE',
                    type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
                    state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/uZVdwjJGqDooqKLKtvGA.svg',
                    // 设置锚点
                    anchor: [
                        [0.5, 0, {
                            type: 'input'
                        }],
                        [0.5, 1, {
                            type: 'output'
                        }]
                    ]
                }, 'model-card');

                // 读数据表
                flow.registerNode('read-data-base', {
                    label: '读数据表',
                    color_type: '#FAAD14',
                    type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
                    state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
                    // 设置锚点
                    anchor: [
                        [0.5, 1, {
                            type: 'output'
                        }]
                    ]
                }, 'model-card');
                this.flow = flow

            },
            initOnPage() {
                const page = this.page;
               page.changeAddEdgeModel({shape:"flow-polyline"})
                page.on('afterchange', ev => {
                    // console.log(ev)
                });
                // 输入锚点不可以连出边
                page.on('hoveranchor:beforeaddedge', ev => {
                    if (ev.anchor.type === 'input') {
                        ev.cancel = true;
                    }
                });
                page.on('dragedge:beforeshowanchor', ev => {
                    // 只允许目标锚点是输入，源锚点是输出，才能连接
                    if (!(ev.targetAnchor.type === 'input' && ev.sourceAnchor.type === 'output')) {
                        ev.cancel = true;
                    }
                    // 如果拖动的是目标方向，则取消显示目标节点中已被连过的锚点
                    if (ev.dragEndPointType === 'target' && page.anchorHasBeenLinked(ev.target, ev.targetAnchor)) {
                        ev.cancel = true;
                    }
                    // 如果拖动的是源方向，则取消显示源节点中已被连过的锚点
                    if (ev.dragEndPointType === 'source' && page.anchorHasBeenLinked(ev.source, ev.sourceAnchor)) {
                        ev.cancel = true;
                    }
                });

                page.on('node:mouseenter', ev => {
                    console.log(ev.item.id)
                    const node = page.find(ev.item.id)
                    const nodeBox = node.getBBox();
                    const dy = 32
                    page.changeAddEdgeModel({
                        shape: 'flow-polyline'
                    });
                    page.add('node',{
                        id: '2222',
                        x: nodeBox.centerX,
                        y: nodeBox.minY - dy - 8,
                        label: '节点2',
                        parent: 'group1',
                        size: '60*60',
                        shape: 'flow-circle',
                      }
                    );
                  

                    // page.add('guide', {
                    //     shape: 'tag',
                    //     nodeId: 'node1',
                    //     label: '这是 node1'
                    // });

                    // page.update(ev.item, {
                    //   color: 'red',

                    // });
                })
                page.on('node:mouseleave', ev => {
                    page.remove('2222')
                })

            }

        },
      
    mounted() {
       this.initG6();
       this.initFlow();
       this.$nextTick(() => {
           this.initOnPage()
       })
    },
    created () {
        const height = document.body.clientHeight;
        this.editorHeight = height - 162;
    }
}
</script>

<style lang="less" scoped>
    @import './component/css/modelFlowEditor.less';
    #page {
        background: #fff;
        min-height: 350px;
        margin-left: 200px; 
        margin-right: 200px;
        height: 100%;
       
    }
    .main-content {
        position: relative;
    }

    #minimap {
        width: 200px;
        height: 176px;
        position: absolute;
        bottom: 20px;
        right: 0px;
        z-index: 3;
    }
    .minimapTitle {
        width: 200px;
        height: 32px;
        position: absolute;
        bottom: 196px;
        right: 0px;
        z-index: 3;
        border-top: 1px solid #DCE3E8;
        border-bottom: 1px solid #DCE3E8;
        background: #EBEEF2;
        color: #000;
        line-height: 28px;
        padding-left: 12px;

    }

</style>
