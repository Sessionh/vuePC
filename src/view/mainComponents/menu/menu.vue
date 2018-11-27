<template>
	<div>
		<Menu ref="sideMenu" :active-name="activeName" :open-names="openNames"  @on-select="onSelectMenu" @on-open-change="onOpenChange" width="auto" theme="dark">
	        <Submenu :name="item.name" v-for="item in menuList" :key="item.name">
	            <template slot="title" >
	                <i class="iconfont" v-html="item.icon"></i>
	                {{item.title}}
	            </template>
	            <template v-for="itemMenu in item.children">
		            <Submenu :name="itemMenu.name"   v-if="itemMenu.children instanceof Array && itemMenu.children.length > 0">
		                <template slot="title">{{itemMenu.title}}</template>
		                <MenuItem :name="menuName(itemMenuSub)" v-for="itemMenuSub in itemMenu.children" :key="itemMenuSub.name">{{itemMenuSub.title}}</MenuItem>
		            </Submenu>
		            <MenuItem  v-else  :name="menuName(itemMenu)">{{itemMenu.title}}</MenuItem>
		        </template>
	        </Submenu>
	    </Menu>
	</div>
</template>
<script>
	export default {
		name: 'mainMenu',
		data () {
			return {

			}
		},
		computed: {
			menuList () {
				return this.$store.state.app.menuList
			},
			activeName () { // 当前选择菜单
				return this.$store.state.app.activeName
			},
			openNames () { // 当前打开子菜单项
				return this.$store.state.app.openNames
			},
		},
		methods: {
			onSelectMenu (name) {

				this.$store.commit('setTagList', name);
				const result = name.split(',')
				this.$store.commit('setCheckedTag', result[0]);
				this.$router.push(result[0])

			},
			onOpenChange (value) {
				console.log(value)
				this.$store.commit('setAllOpenNames', value);
			},
			menuName (itemMenu) {
				return itemMenu.name + ',' + itemMenu.title

			}
		},
		updated () {
	      this.$nextTick(() => {
	        if (this.$refs.sideMenu) {
	          this.$refs.sideMenu.updateOpened();
	        }
	      });
	    }
	}
</script>