<template>
 

    <div class="right_area" ref="right" v-if="isContent">
    <!-- <el-dialog :title="`请${dialogTitle}`" :visible="dialogVisible">
        <el-input v-model="dialogText" auto-complete="off"></el-input>
        <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="remove" v-show="dialogTitle.startsWith('编辑')">
            删除{{dialogTitle.substr(2,2)}}
        </el-button>
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="summit">确 定</el-button>
        </div>
    </el-dialog> -->
    <Modal
        v-model="dialogVisible"
        :title="'增加节点'"
        @on-ok="summit"
        @on-cancel="closeDialog">
            <Input v-model="dialogText" placeholder="请输入内容..." style="width: 80%" />
    </Modal>
    <div  v-for="node in nodes"
        :id="node.id"
        :class="node.className"
        ref="nodes"
        :style="node.style"
        >
        <div class="node" v-if="node.text !== 'start' && node.text !== 'end'">
            <div class="text textFilter">{{ node.text }}</div>
            <div  
                :id="node.id + 'node'" 
                class="nodeIcon" 
                 >
               
                <Icon class="deleteIcon" @click="deleteNode(node)"  style="font-size: 20px;" type="md-backspace" />
                <Icon class="unfoldIcon"  style="font-size: 20px;" type="md-arrow-dropdown-circle" />
                <Icon class="addIcon" @click="addNodes(node)"  style="font-size: 20px;" type="md-add-circle" />
            </div>

        </div>
        <div class="node circle" v-if="node.text === 'start'" >
             <div class="text">{{ node.text }}</div>
        </div>
         <div class="node circleEnd" v-if=" node.text === 'end'" >
             <div class="text">{{ node.text }}</div>
        </div>
           

    </div>
   

    <div  class="demo">
        <Button type="primary" @click="saveDatas" style="margin-right: 10px;">保存</Button>
        <Button type="primary" @click="clearAll"  style="margin-right: 10px;">清除</Button>
        <Button type="primary" @click="reload" style="margin-right: 10px;">重现</Button>
        <Button type="primary" @click="addThatNode">新增</Button>
    </div>
    </div>
</template>

<script>
// const DynamicAnchors = ['Left', 'Right', 'Top', 'Bottom']
const DynamicAnchors = []

const connectorStyle = { stroke: '#7AB02C', strokeWidth: 2, joinstyle: 'round' }

const connectorHoverStyle = { stroke: '#5c96bc', strokeWidth: 3 }

const endpointStyle = { fill: 'transparent', stroke: '#7AB02C', radius: 1, strokeWidth: 1 } // 连接线加圆

const endpointHoverStyle = { fill: '#5c96bc', stroke: '#5c96bc', radius: 1, strokeWidth: 1 }

const anEndpoint = {
    connector: 'Flowchart',
    endpoint: 'Dot',
    isSource: true,
    isTarget: true,
    paintStyle: endpointStyle,
    hoverPaintStyle: endpointHoverStyle,
    connectorStyle: connectorStyle,
    connectorHoverStyle: connectorHoverStyle
}
const  overlays = [
    "Arrow", 
    [ "Label", { label:"foo", location:0.25, id:"myLabel" } ]
];

const Common = {
    anchor: 'AutoDefault',
    connector: 'Flowchart',
    endpoint: 'Dot',
    paintStyle: connectorStyle,
    hoverPaintStyle: connectorHoverStyle,
    endpointStyle,
    endpointHoverStyle,
    // overlays
}
 

export default {
    name: 'RightArea',
    props: {
        jsp: {
            type: Object
        },
        pos: {
            type: Array
        }
    },
    data () {
        return {
            isContent: true,
            datas: null,
            dialogVisible: false,
            dialogTitle: '',
            dialogText: '',
            nodes: [],
            info: null,
            rjsp: this.$jsplumb.getInstance({
                Container: 'diagramContainer',
                ConnectionOverlays: [
                    ['Arrow', { location: 1, id: 'arrow', width: 11, length: 11 }],
                    ['Label', { location: 0.3, id: 'label', cssClass: 'jsp-label', events: {dblclick: this.editLabelText} }]
                ],
               
            })
        }
    },
    methods: {
        init () {
            this.jsp.droppable(this.$refs.right, { drop: this._jspDrop })
            this.rjsp.bind('beforeDrop', this._jspBeforeDrop)
            this._fetchData()
        },
        _jspDrop (info) {
            this.info = info
            this.openDialog('输入新建节点的文本')
        },
        _jspBeforeDrop (info) {
            info.targetId = info.dropEndpoint.elementId
            let connections = this.rjsp.getConnections({ source: info.sourceId, target: info.targetId })
            if (connections.length === 0) {  // 检察是否已经建立过连接
                this.info = info
                this.openDialog('输入新建连接的文本')
            } else {
                this.editLabelText(connections[0].getOverlay('label'))
            }
        },
        openDialog (title) {
            this.dialogTitle = title
            this.dialogVisible = true
        },
        closeDialog () {
            this.dialogTitle = ''
            this.dialogText = ''
            this.dialogVisible = false
        },
        editNodeText (info) {
            this.dialogText = info.text
            this.info = info
            this.openDialog('编辑节点的文本')
        },
        editLabelText (info) {
            this.dialogText = info.labelText
            this.info = info.component
            this.openDialog('编辑连接的文本')
        },
        summit () {
            if (this.dialogTitle === '输入新建节点的文本') {
                this.nodes.push(this._createNode(this.info.drag.el, this.info.drop.el))
                this.$nextTick(_ => this._initNode(this.$refs.nodes[this.nodes.length - 1]))
            } else if (this.dialogTitle === '编辑节点的文本') {
                this.info.text = this.dialogText
            } else if (this.dialogTitle === '输入新建连接的文本') {
                console.log(this.info)
                this._addEdge(this.info)
            } else if (this.dialogTitle === '编辑连接的文本') {
                let labelText = this.dialogText
                this.$nextTick(_ => (this.info.getOverlay('label').setLabel(labelText)))
            }
            this.closeDialog()
        },
        saveDatas () {
            this.datas = {
                nodes: this.nodes.map((node, index) => {
                    // node.style = this._getStyle(this.$refs.nodes[index])
                    return node
                }),
                edges: this.rjsp.getAllConnections().map(connection => {
                    return {
                        source: connection.sourceId,
                        target: connection.targetId,
                        labelText: connection.getOverlay('label').labelText
                    }
                })
            }
            console.log(this.rjsp.getAllConnections());
        },
        setStyle(node) {
            return {
                left: node.left,
                top: node.top,
                filter: 'none',
                background: '#fff',
            }

        },
        _getStyle (node) {
            let container = this.$refs.right.getBoundingClientRect()
            let rect = node.getBoundingClientRect()
            return {
                left: rect.left - container.left - node.clientLeft + 'px',
                top: rect.top - container.top - node.clientTop + 'px',
                lineHeight: node.clientHeight + 'px'
            }
        },
        clearAll () {
            // this.jsp.repaintEverything()
            this.rjsp.reset()
            this.nodes = []
        },
        reload () {
            this.clearAll()
            this.rjsp.bind('beforeDrop', this._jspBeforeDrop)
            console.log(this.datas.nodes);
            this.nodes = this.datas.nodes
            // // this._fetchData()
            this.$nextTick(_ => {
                this._initNodes(this.$refs.nodes)
                this._initEdges(this.datas.edges)
                const ends = document.getElementById('endsDefalut')
                setTimeout(() => {
                    ends.style.filter = 'none';

                }, 2000)
                
               
            })
        },
        remove () {
            if (this.dialogTitle === '编辑节点的文本') {
                this._removeNode(this.info)
            } else if (this.dialogTitle === '编辑连接的文本') {
                this._removeEgde(this.info)
            }
            this.closeDialog()
        },
        _removeNode (node) {
            this.rjsp.deleteConnectionsForElement(node.id)
            this.saveDatas()
            this.datas.nodes.splice(this.datas.nodes.findIndex(n => n.id === node.id), 1)
            this.reload()
            
        },
        _removeEgde (egde) {
            this.rjsp.deleteConnection(egde)
            this.saveDatas()
        },
        _addEdge (info) {
            let labelText = this.dialogText
            let c = this.rjsp.connect({ source: info.sourceId, target: info.targetId, }, Common)
            this.$nextTick(_ => c.getOverlay('label').setLabel(labelText))
        },
        _createNode (dragEl, dropEl) {
            let rect = dropEl.getBoundingClientRect()
            return {
                className: dragEl.classList[0],
                id: this.$util.uuid(),
                text: this.dialogText,
                style: {
                    left: this.pos[0] - rect.left - dragEl.clientLeft + 'px',
                    top: this.pos[1] - rect.top - dragEl.clientTop + 'px',
                    lineHeight: dragEl.clientHeight + 'px'
                }
            }
        },
        _initNode (node) {

            // this.rjsp.draggable(node, { constrain: true }) // 添加拖拽
            DynamicAnchors.map(anchor => this.rjsp.addEndpoint(node, anEndpoint, { anchor }))
            this.rjsp.makeTarget(node)
            // node.onclick= (ev) => {
            //     console.log(ev)
            // }
            node.onmouseenter= (ev) => {
                let val = ev.target.innerText
                if (val !== 'start' && val !== 'end') {
                    let vm = document.getElementById(ev.target.id + 'node')
                    const nodes = vm.parentNode;
                    vm.style.opacity = 1;
                    nodes.style.background = 'rgba(0,0,0,0.3)'
                    nodes.children[0].style.filter = 'blur(2px)';
                    
                }

            }
            node.onmouseleave = (ev) => {
                let val = ev.target.innerText
                if (val !== 'start' && val !== 'end') {
                    let vm = document.getElementById(ev.target.id + 'node')
                    const nodes = vm.parentNode;
                    vm.style.opacity = 0;
                    nodes.children[0].style.filter = 'none';
                    nodes.style.background = '#ccc'
                }
               
            }
        },
        _initNodes (nodes) {
            nodes.map(node => this._initNode(node))
        },
        _initEdges (edges) {
            edges.map(edge => this.rjsp.connect(edge, Common).getOverlay('label').setLabel(edge.labelText))
        },
        _fetchData () {
            this.$http.post('treeData').then(res => {
                console.log(res);
                this.nodes = res.data.nodes
                this.$nextTick(_ => {
                    this._initNodes(this.$refs.nodes)
                    this._initEdges(res.data.edges)
                })
            }).catch(err => console.log(err))
        },
        addNode(val) {
            this.nodes.push(val);
            this.$nextTick(_ => this._initNode(this.$refs.nodes[this.nodes.length - 1]))

        },
        addThatNode() {
            console.log(this.nodes);
            console.log(this.$refs.nodes);
            let val =  {
                id: 'node-3',
                className: 'rect',
                style: {
                    left: '50px',
                    paddingTop: '10px'
                },
                text: 'end',
            };
            this.addNode(val);

        },
        nodeIdClick(val) {
            // console.log(val);
        },
        deleteNode(val) {
            this._removeNode(val);

        },
        handleScroll(ev) {
            console.log(ev);

        },
        addNodes(val) {
            // let val =  {
            //     id: 'node-' + new Date().getTime(),
            //     className: 'rect',
            //     style: {
            //         left:  '50px',
            //         top: val.style.top,
            //     },
            //     text: 'end',
            // };
            // this.addNode(val);
            this.dialogVisible = true;

        }
        
        
    },
    mounted () {
        this.init()
        // window.addEventListener('scroll', this.handleScroll, true);
    }
}
</script>

<style lang="less" scoped>
  .right_area {
    position: relative;
    width: 100%;
    // overflow: auto;
    // overflow-x: hidden;
    white-space: nowrap;
  }

  .demo {
    position: fixed;
  }

  .node {
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    text-align: center;
    // cursor: pointer;
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 12px;
    border-radius: 5px;
    .nodeIcon {
        position: relative;
        z-index: 2;
        opacity: 0;

        .deleteIcon {
            cursor: pointer;
            position: absolute;
            right: 6px;
            bottom: 0;
            color: #e8eaec;

        }
        .unfoldIcon {
            cursor: pointer;
            position: absolute;
            right: 31px;
            bottom: 0;
            color: #bdd4eb;

        }
        .addIcon {
            cursor: pointer;
            position: absolute;
            right: 56px;
            bottom: 0;
            color: #fff;

        }

    }
  }

  .textFilter {
    //   filter: blur(2px);
       z-index: 1;

  }


  .item {
    position: relative;
    width: 100%;
    height: 150px;
    /*border-bottom: 1px solid #333;*/
  }

  .center {
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
  }

  .left-area {
    position: relative;
    height: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0;
  }

  .left-area {
    display: inline-block;
    border: 1px solid #333;
    width: 20%;
  }


  .square {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 1px solid #333;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .circle {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: text;
    // border: 4px solid red;
    font-size: 14px;
    text-align:center;
    background:rgb(60, 150, 255);
    color: #fff;
    box-shadow: 0px 0px 0px 5px rgba(60,150,255,0.1);
     .text {
        margin-top: 2px;
    }

  }
  .circleEnd {
      position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: text;
    // border: 4px solid red;
    font-size: 14px;
    text-align:center;
    background: #ccc;
    color: #fff;
    box-shadow: 0px 0px 0px 5px rgba(60,150,255,0.1);
     .text {
        margin-top: 2px;
    }

  }

  .start {
    position: absolute;
    width: 54px;
    height: 50px;
    border-radius: 50%;
    box-sizing: border-box;
    font-weight: 600;
    
    
   

  }
  .endsDefalut {
    position: absolute;
    width: 58px;
    height: 50px;
    border-radius: 50%;
    box-sizing: border-box;
    padding-left: 6px;
    font-weight: 600;
   

  }
  

  .rect {
    position: absolute;
    width: 100px;
    height: 50px;
    // border: 1px solid #333;
    box-sizing: border-box;
    border-radius: 5px;
    background: #ccc;
    // background: rgba(0,0,0,0.3);
    cursor: text;
    
                
  }

//   .diamond {
//     position: absolute;
//     top: 25px;
//     width: 100px;
//     height: 72px;
//     background: #fff url(../QQ截图20170609173054.png) 0 0 no-repeat;
//     -webkit-background-size: 100px 72px;
//     background-size: 100px 72px;
//     box-sizing: border-box;
//   }


</style>
