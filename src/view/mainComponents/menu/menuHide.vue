<template>
	<div class="menuHide">
		<ul class="menuUl">
			<li class="iconLi" v-for="item in menuList">
				<div class="sub">
					 <i class="iconfont icon" v-html="item.icon"></i>
				</div>
				<div class="drops" v-if="item.children instanceof Array && item.children.length > 0">
					<dropDownBox>
						<ul class="menuSubUl1">
							<template v-for="itemMenu in item.children">
								<li  v-if="itemMenu.children instanceof Array && itemMenu.children.length > 0">
									<div class="menuTitle">
									    {{itemMenu.title}}
									    <i class="iconfont icon">&#xe631;</i>
									</div>
									<div class="menuSub">
										<dropDownBox>
											<ul class="menuSubUl2">

												<li v-for="itemMenuSub in itemMenu.children">
													<div class="menuSubLi" @click="menuClick(itemMenuSub)">{{itemMenuSub.title}}</div>
												</li>
											</ul>
										</dropDownBox>
									</div>
								</li>


								<li v-else>
									<div class="menuTitle"  @click="menuClick(itemMenu)">{{itemMenu.title}}</div>
								</li>
							</template>
						</ul>
					</dropDownBox>
				</div>
				
			</li>
			
		</ul>
	</div>
</template>
<script>
	import dropDownBox from '../../common/dropDownBox.vue';
	export default {
		name: 'menuHide',
		components: {
			dropDownBox,
		},
		data () {
			return {
				
			}
		},
		computed: {
			menuList () {
				return this.$store.state.app.menuList
			},
		},
		methods: {
			menuClick (val) { // 菜单点击
			console.log(val)
				let name = val.name + ',' + val.title
				this.$store.commit('setTagList', name);
				this.$store.commit('setActiveName', name);
				this.$store.commit('setCheckedTag', val.name);
				this.$store.commit('setOpenNamesList', val);
				this.$router.push(val.name)

			},

		}
	}
</script>
<style lang="stylus" scoped>
	.menuHide
		width 60px
		color #fff
		.menuUl
			list-style-type none
			padding-top 10px
			.iconLi
				text-align center
				position relative
				margin 10px 0
				.sub
					margin auto
					width 36px
					// height 36px
					border-radius 5px
					cursor pointer
					.icon
						font-size 22px
					
					    
				.drops
					position absolute
					left 73px
					top 0
					z-index 20
					display none
					
			.iconLi:hover .sub
				background-color #2d8cf0
			.iconLi:hover .drops
				display inline
			
					
		
</style>