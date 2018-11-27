import router from '@/router/router.js'
const app = {
	state: {
		activeName: '', // 当前选择菜单
		openNames: [], // 菜单展开
		tagList: [
		    {
		    	id: 1,
		    	name: 'homeMain',
		    	title: '首页'
		    },
		], // 当前打开的标签页
		checkedTag: 'homeMain', // 当前选中的标签
		keepPage: [], // 需要缓存的页面
		lockingType: 0, // 是否锁屏
		zIndex: -1, // 锁屏显示
		lockingTop: '-200px',
		menuList: [
            {
	            title: '系统管理',
	            name: 'users',
	            icon: '&#xe64c;',
	            children: [
	                {
	                    title: '基本资源',
	                    name: 'hosts',
	                    children: [
	                        {
	                            path: '/userMessage',
	                            name: 'userMessage',
	                            title: '基本资料',
	                            component: 'components/user/userMessage'
	                            
	                        }
	                    ]
	                },
	                {
	                    title: '用户管理',
	                    path: '/user',
	                    name: 'user',
	                    component: 'components/user/user'
	                },
	                {
	                    title: '操作审计',
	                    path: '/action',
	                    name: 'action',
	                    component: 'components/user/action',
	                },
	                {
	                    title: '角色管理',
	                    path: '/userRole',
	                    name: 'userRole',
	                    component: 'components/user/userRole',
	                }
	            ]
	        },

	]

	},
	mutations: {
		setlocking (state, val) {
			if (val === '1') {
				state.lockingType = 1000
			    state.zIndex = 1000
			    setTimeout(() => {
			    	state.lockingTop = '20%'
			    }, 1500)
			} else {
				state.lockingType = 0
			    state.lockingTop = '-200px'
			    setTimeout(() => {
			    	state.zIndex = -1
			    }, 1500)
			}
			

		},
		setActiveName (state, name) { // 设置选择当前菜单
			state.activeName = name
		},
		setOpenNames (state, name) {
			if (name !== null && name !== undefined && name !== '') {
				const str = state.openNames.indexOf(name)
				console.log(str)
				if (str === -1) {
					state.openNames.push(name)
				}
			}

		},
		setAllOpenNames(state, val) {// 关闭菜单 更新展开数组
			state.openNames = val

		},
		setOpenNamesList (state, val) { // 设置当前展开的菜单
			state.menuList.forEach(res => {
				if (res.children instanceof Array) {
					res.children.forEach(menu => {
						if (menu.children instanceof Array && menu.children.length > 0) {
							menu.children.forEach(menuSub => {
								if (menuSub.name === val.name) {
									const str = state.openNames.indexOf(res.name)
									const str1 = state.openNames.indexOf(menu.name)
									if (str === -1) {
										state.openNames.push(res.name)
									}
									if (str1 === -1) {
										state.openNames.push(menu.name)
									}
									
								}

							})

						} else {
							if (menu.name === val.name) {
								const str2 = state.openNames.indexOf(res.name)
								if (str2 === -1) {
										state.openNames.push(res.name)
								}
							}

						}
					})
				}

			})

			state.openNames = state.openNames.slice(0, state.openNames.length);
			

		},
		setTagList (state, val) { // 增加 tag 标签
			const list = val.split(',')
			let isVal = 0
			if (list[0] !== null && list[0] !== undefined && list[0] !== '') {
				state.tagList.forEach(res => {
					if (res.name === list[0]) {
						isVal++
					}
				})
				if (isVal === 0) {
					state.tagList.push({id: state.tagList.length + 1, name: list[0], title: list[1]})
				}
			}
		},
		deleteTag(state, value) { // 删除 一项 Tag标签
			let result = [];
			state.tagList.forEach((res, index) => {
				if(res.id !== value.id) {
					result.push(res)
				} else {
					if (index > 1) {
						if (res.name === state.checkedTag) {
							const _tag = state.tagList[index - 1]
							state.checkedTag = _tag.name
							value._that.$router.push(_tag.name)
							console.log(_tag)
							state.activeName = _tag.name + ',' + _tag.title
						}
					   
					} else {
						state.checkedTag = 'homeMain'
						state.activeName = ''
						value._that.$router.push('home')
					}
				}
			})
			state.tagList = result
		},
		setCheckedTag (state, name) { // 设置当前选择 Tag
			state.checkedTag = name

		},
		closeTags(state, name) {

			let result = [
			    {
			    	id: 1,
			    	name: 'homeMain',
			    	title: '首页'
			    }
			];
			state.tagList.forEach(res => {
				if (res.name === state.checkedTag && res.name !== 'homeMain') {
					result.push(res)
				}
				
			})
			state.tagList = result

		},
		closeAllTags (state) {
			state.tagList = [
				{
			    	id: 1,
			    	name: 'homeMain',
			    	title: '首页'
			    }
		    ]
		    state.activeName = ''
		    state.checkedTag = 'homeMain'

		},
		// 动态添加全局路由
	    updateDefaultRouter (state, routes) {
	      router.addRoutes(routes);
	      state.menuRouter = routes;
	    },
	    // 动态添加路由 不保存
	    updateRouter (state,routes) {
	      router.addRoutes(routes);
	    },
	    // 添加菜单
	    setMenu (state, value) {
	    	state.menuList = value

	    }
	},
	actions: {
	    setRoutePageName (context, to) {
			if (to.name !== context.state.checkedTag) {
				context.state.checkedTag = to.name
				context.state.activeName = to.name + ',' + to.meta.title
				context.commit('setOpenNamesList', to)
			}
	    }
	}
}

export default app;