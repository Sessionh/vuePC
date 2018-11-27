<template>
	<div id="toolbar">
      <i data-command="undo" class="command iconfont icon-undo" title="撤销"></i>
      <i data-command="redo" class="command iconfont icon-redo" title="重做"></i>
      <div class="hr"></div
      <i data-command="copy" class="command iconfont icon-copy-o" title="复制"></i>
      <i data-command="paste" class="command iconfont icon-paster-o" title="粘贴"></i>
      <i data-command="delete" class="command iconfont icon-delete-o" title="删除"></i>
      <div class="hr"></div>
      <i data-command="zoomIn" class="command iconfont icon-zoom-in-o" title="放大"></i>
      <i data-command="zoomOut" class="command iconfont icon-zoom-out-o" title="缩小"></i>
      <i data-command="autoZoom" class="command iconfont icon-fit" title="适应画布"></i>
      <i data-command="resetZoom" class="command iconfont icon-actual-size-o" title="实际尺寸"></i>
      <span class="hr"></span>
      <i data-command="toBack" class="command iconfont icon-to-back" title="层级后置"></i>
      <i data-command="toFront" class="command iconfont icon-to-front" title="层级前置"></i>
      <span class="hr"></span>
      <i data-command="multiSelect" class="command iconfont icon-select" title="多选"></i>
      <i data-command="addGroup" class="command iconfont icon-group" title="成组"></i>
      <i data-command="unGroup" class="command iconfont icon-ungroup" title="解组"></i>
    </div>
</template>
<script>
	export default {
		name: 'toolbar',
		data () {
			return {

			}
		},
		methods: {

		}
	}
</script>
<style lang="less" scoped>
    @import './css/toolbar.less';
	#toolbar {
        width: 100%;
        background: #fff;
        position: relative;
        z-index: 2;
        overflow: hidden;
        height: 42px;
        box-shadow: 0px 4px 8px #e8eaec;
        padding-left: 10px;
        .command {
            padding: 2px 5px;
            margin: 6px;
            float: left;

        }
        .hr {
        	float: left;
        	height: 18px;
        	width: 1px;
        	background: #E9E9E9;
        	margin: 11px 3px 0 3px;
        	
        }
        .command:hover {
            cursor: pointer;
            border: 1px solid #e8eaec;
            margin: 5px;
            border-radius: 2px;
            

        }

    }

    #toolbar *::before{
      font-size: 16px !important;
    }
    #toolbar .disable{
      color: rgba(0,0,0,0.25);
    }
    #toolbar .icon-select.disable{
      background: #EEEEEE;
    }
    #toolbar .separator{
      margin: 4px;
      border-left: 1px solid #E9E9E9;
    }
    #toolbar .disable:hover{
      cursor: default;
      border: 1px solid rgba(2,2,2,0);
    }



	
</style>