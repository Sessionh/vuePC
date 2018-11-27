<template>
</template>
<script>
	import G6Editor from '@antv/g6-editor';
	export default {
		name: 'editor',
		data () {
			return {
				selectedModel: {}, // 当前选中项数据模型
			    curZoom: 1, // 当前缩放比率
			    minZoom: 0.5, // 最小缩放比率
			    maxZoom: 2, // 最大缩放比率
			    page: '',
			    editor: '', 
			    editorHeight: 400,
			}
		},
		methods: {
			initG6() {
				// 生成 G6 Editor 编辑器
				const bodyHeight = document.body.clientHeight;
                const height = (bodyHeight - 162);
				const editor = new G6Editor();
				const minimap = new G6Editor.Minimap({
					container: 'minimap',
					height: 160,
					width: 200
				});
				const toolbar = new G6Editor.Toolbar({ //工具栏
					container: 'toolbar'
				});
				const contextmenu = new G6Editor.Contextmenu({
					container: 'contextmenu'
				});
				const itempannel = new G6Editor.Itempannel({
					container: 'itempannel'
				});
				const detailpannel = new G6Editor.Detailpannel({
					container: 'detailpannel'
				});
				const page = new G6Editor.Flow({
					graph: {
						container: 'page',
						height: this.editorHeight,
					},
					align: {
						grid: true
					},
					noEndEdge: false,
					edgeResizeable: false
				});
				page.on('afteritemselected', ev => {
					this.selectedModel = ev.item.getModel();
				});
				page.on('afterzoom', ev => {
					this.selectedModel = ev.updateMatrix[0];
				});
				editor.add(minimap);
				editor.add(toolbar);
				editor.add(contextmenu);
				editor.add(itempannel);
				editor.add(detailpannel);
				editor.add(page);
				this.page = page;
				this.editor = editor;

			},
			toggleGrid(ev) { // 画布改变
				if (ev) {
					this.page.showGrid();
				} else {
					this.page.hideGrid();
				}
			},
			 updateGraph(key, value) {
			    this.editor.executeCommand(() => {
			      const selectedItems = this.page.getSelected();
			      selectedItems.forEach(item => {
			        const updateModel = {};
			        updateModel[key] = value;
			        this.page.update(item, updateModel);
			      });
			    });
			},
			changeZoom(zoom) { // 修改缩放比例
			    const page = this.page;
			    page.zoom(zoom);
			},
			
		},
		
	}
</script>
