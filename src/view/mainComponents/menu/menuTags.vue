<template>
	<div class="tags">

		<div class="content"  ref="scrollCon">
			<div  ref="scrollBody" class="scrollDiv" @DOMMouseScroll="handleScroll" @mousewheel="handleScroll" :style="{left: (tagBodyLeft + 'px')}">
			    <template v-for="item in tagList">
			     	<Tag type="dot"
			     	    @on-close="tagClose(item)"
			     	    @click.native="tagClick(item)"
				     	:name="item.id" 
				     	:closable="item.name === 'homeMain' ? false : true" 
					    :color="item.name === checkedTag  ? 'warning': 'default'"
					    >{{item.title}}</Tag>
			     </template>
				   
			</div>
		</div>

		<div class="tagSelect" @mouseleave="butMouseout">

			<div class="but" @mouseenter="butHover" >
       	 		标签选项<Icon class="icon" :style="{transform: 'rotateZ(' + iconZ + 'deg)'}" type="md-arrow-dropup" size="18" />
       	 	</div>
	        <ul v-show="hoverShow">
	       	    <li @click="closeTags">关闭其他</li>
	       	    <li @click="closeAllTags">关闭全部</li>
	        </ul>
	      
	    </div>
		
	</div>

	
	
	
</template>
<script>
	export default {
		name: 'menuTags',
		data () {
			return {
				tagBodyLeft: 0,
				hoverShow: false,
				iconZ: 180,
			}
		},
		computed: {
			tagList () {
				return this.$store.state.app.tagList
			},
			checkedTag () {
				return  this.$store.state.app.checkedTag
			}

		},
		methods: {
			tagClose (value) { // 关闭一个标签
				const _this = this;
				this.$store.commit('deleteTag', {item: value, _that: _this})
				this.$store.commit('setOpenNamesList', value)
			},
			tagClick (item) { // 标签点击事件
				const name  = item.name + ',' + item.title
				console.log(item.name)
				this.$store.commit('setActiveName', name)
				this.$store.commit('setCheckedTag', item.name)
				this.$store.commit('setOpenNamesList', item)
				if (item.name === 'homeMain') {
					this.$router.push('home')
				} else {
					this.$router.push(item.name)
				}
				

			},
			closeTags () { // 关闭 其他标签
				this.$store.commit('closeTags')
			},
			closeAllTags () { // 关闭 全部标签
				this.$store.commit('closeAllTags', this)
				

			},
			handleScroll (e) { // 鼠标滚动
				let type = e.type;
		        let delta = 0;
		        if (type === 'DOMMouseScroll' || type === 'mousewheel') {
		          delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40;
		        }

				let left = 0;
				if (delta > 0) {
					left = Math.min(0, this.tagBodyLeft + delta);
				} else {
					if (this.$refs.scrollCon.offsetWidth - 100 < this.$refs.scrollBody.offsetWidth) {
						if (this.tagBodyLeft < -(this.$refs.scrollBody.offsetWidth - this.$refs.scrollCon.offsetWidth + 100)) {
							left = this.tagBodyLeft;
						} else {
							left = Math.max(this.tagBodyLeft + delta, this.$refs.scrollCon.offsetWidth - this.$refs.scrollBody.offsetWidth - 100);
						}
					} else {
						this.tagBodyLeft = 0;
					}
				}
				this.tagBodyLeft = left;
			},
			butHover () {
				this.hoverShow = true;
				this.iconZ = 0;
			},
			butMouseout () {
				this.hoverShow = false;
				this.iconZ = 180;
			}
		}
	}
</script>
<style lang="stylus" scoped>
    .tags
    	position relative
    	height 40px
    	
		.content
			// box-sizing border-box
			height 100%
			overflow hidden
			background #f0f0f0
			position relative
			z-index 10
			// box-shadow  0px 3px 5px #dcdee2
			box-shadow   0 5px 5px -2px #c5c8ce
			.scrollDiv
				position absolute
				z-index 5
				padding 2px 5px
				white-space nowrap
				transition left .3s ease
		.tagSelect
			position absolute
			background-color #fff
			height 40px
			width 100px
			top 0
			right 0
			z-index 12
			box-shadow -3px 0 15px -3px #c5c8ce
			.but
				width 73px
				margin 7px 0 8px 14px
				padding 2px 0 2px 4px
				background-color #2b85e4
				border-radius 3px
				border 1px solid #2b85e4
				color #fff
				cursor pointer
				.icon
					margin-top -1px
			ul
				text-align center
				background-color #fff
				cursor pointer
				li
					list-style none
				li:nth-child(1)
					padding 5px 0
				li:nth-child(1):hover
					background-color #f8f8f9
				li:nth-child(2)
					padding 5px 0
				li:nth-child(2):hover
					background-color #f8f8f9
						
</style>