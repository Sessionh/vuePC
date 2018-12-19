<template>
	<div ref="main" class="main">
		<div class="header">
			<div class="logo">
				<img  src="./image/logo.png"/>
			</div>
			<div class="backLogin" @click="backLogin">
				 <i class="iconfont headerLeft-icon icon">&#xe668;</i>注销
			</div>
			<div class="userImg" @mouseenter="mouseEnterUser" @mouseleave="mouseleaveUser">
				<div class="content">
					<div class="img col">
						<img src="./image/logs3.jpg"/>
					</div>
					<div class="title col">
						admin
					</div>
					<div class="menuIcon col">
						 <div class="iconfont headerLeft-icon icon" :style="{transform: 'rotateZ(' + iconZ + 'deg)'}">&#xe65c;</div>
					</div>
				</div>

				<div class="popup" v-show="popupShow">
					<ul>
						<li>个人中心</li>
					</ul>
				</div>
			</div>
			<div class="fullScreen" @click="fullScreenClick">
			   <Tooltip :content="fullScreenType ? '退出全屏': '全屏'" placement="bottom">
		             <i class="iconfont headerLeft-icon icon" v-html="fullScreenType ? '&#xe826;' : '&#xe673;'"></i>
		         
		             <!-- <i class="iconfont icon-full_screen"></i> -->
		        </Tooltip>
			</div>
			<div class="lockScreen">
				  <Tooltip content="锁屏" placement="bottom">
		             <i class="iconfont headerLeft-icon icon" @click="lockClick">&#xe653;</i>
		        </Tooltip>
			</div>

			<div class="message">
				  <Tooltip content="消息" placement="bottom">
		             <Badge dot>
				        <Icon type="ios-notifications-outline icon" size="26"></Icon>
				    </Badge>
				    <!-- <Icon type="ios-notifications-outline icon" size="26"></Icon> -->
		        </Tooltip>
			</div>
		</div>
		<div class="contentMain">
			<div class="mainLeft" :style="{width: (menuWidth + 'px')}">
				<div class="menuController" @click="menuClick">
					<Icon type="md-menu" size="18" class="icon" />
				</div>
				<div class="menu" :style="{overflow: menuShow ? 'auto':'visible'}">
					<mainMenu v-show="menuShow"/>
					<menuHide v-show="!menuShow" />	
				</div>
			
			</div>
			<div class="mainRight" :style="{marginLeft: (menuWidth + 'px')}">
				<menuTags/>
				<div class="contentView">
					<keep-alive  :include="keepPage">
                        <!-- <transition name="page">
                            <router-view/>
                        </transition> -->
                        <router-view/>
						
					</keep-alive>
				</div>
			</div>
			
		</div>
		<locking ref="locking"/>
	</div>
</template>
<script>
import mainMenu from "./mainComponents/menu/menu.vue";
import menuHide from "./mainComponents/menu/menuHide.vue";
import menuTags from "./mainComponents/menu/menuTags.vue";
import locking from "./common/locking.vue";
export default {
    name: "mainHome",
    components: {
        mainMenu,
        menuHide,
        menuTags,
        locking
    },
    data() {
        return {
            msg: this.$store.state.app.name,
            menuWidth: 220, // 菜单宽度
            menuShow: true,
            popupShow: false, // 个人中心 控制显示
            iconZ: 0, // 控制旋转动画效果
            fullScreenType: false, // 是否切换全屏
        };
    },
    computed: {
        keepPage() {
            return this.$store.state.app.keepPage;
        }
    },
    methods: {
        initMain() {
            // this.$router.push('homeMain')
        },
        menuClick() {
            if (this.menuShow) {
                this.menuWidth = 60;
                this.menuShow = false;
                // setTimeout(() => {
                //     this.menuShow = false;
                // }, 250);
            } else {
                this.menuWidth = 220;
                 setTimeout(() => {
                    this.menuShow = true;
                }, 250);
            }
        },
        backLogin() {
            // 退出登陆
            sessionStorage.removeItem("jaxUserName");
            // this.$router.go(0);
            this.$router.go(0);
            
        },
        mouseEnterUser() {
            this.popupShow = true;
            this.iconZ = 180;
        },
        mouseleaveUser() {
            this.popupShow = false;
            this.iconZ = 0;
        },
        fullScreenClick() {
            // 全屏
            this.FullScreen();
            this.fullScreenType = this.fullScreenType ? false : true;
        },
        FullScreen() {
            let main = document.body;
            if (this.fullScreenType) {
                
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                
            } else {
                if (main.requestFullscreen) {
                    main.requestFullscreen();
                } else if (main.mozRequestFullScreen) {
                    main.mozRequestFullScreen();
                } else if (main.webkitRequestFullScreen) {
                    main.webkitRequestFullScreen();
                } else if (main.msRequestFullscreen) {
                    main.msRequestFullscreen();
                }
                
            }
                
        },
        onEscBack() {
            // 监听退出
        },
        lockClick() {
            // 锁屏
            this.$refs.locking.setBoxValue(1000);
            sessionStorage.setItem("locking", 1);
        },
           
    },
    created() {
    },
    watch: {
        $route(to) {
            this.$store.dispatch("setRoutePageName", to);
        }
    },
    destroyed() {
        window.onresize = function() {};
    }
};
</script>
<style  lang="stylus" scoped>
@import './common/common.styl';
@import './css/main.styl';

// .page-enter-active, .page-leave-active {
//   transition: opacity .5s;
// }
// .page-enter-active {
//   transition: opacity .6s;
// }
// .page-enter, .page-leave-to {
//   opacity: 0;
// }
</style>