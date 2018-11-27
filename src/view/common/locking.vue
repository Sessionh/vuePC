<template>
	<div class="locking" :style="{boxShadow: `0 0 0 ${boxValue}px rgba(0,0,0,0.5) inset`, zIndex: zIndex}">
		<div class="deblocking" ref="deblocking" :style="{top: lockingTop}">
			<i class="iconfont">&#xe613;</i>
			<!-- <div class="userName">admin</div> -->
			<div class="input">
				<input class="inputContent" placeholder="请输入登陆密码"/>
				<button class="butSubmit" @click="deblocking">解锁</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'locking',
		data () {
			return {
				// boxValue: 0,
				// zIndex: -1,

			}
		},
		computed: {
			boxValue () {
				return this.$store.state.app.lockingType
			},
			zIndex () {
				return this.$store.state.app.zIndex
			},
			lockingTop () {
				return this.$store.state.app.lockingTop
			}

		},
		methods: {
			setBoxValue (val) {
				this.$store.commit('setlocking', '1')
			},
			setPasswordShow () { // 动画
				this.$refs.deblocking.style.top = '20%'
			},
			deblocking () { // 解锁
				this.$store.commit('setlocking', 0)
				sessionStorage.setItem('locking', 0)
			},


		}
	}
</script>
<style lang="stylus" scoped>
	.locking {
		width 100%
		height 100vh
		position absolute
		top 0
		left 0
		// z-index 1000
		// box-shadow 0 0 0 80px rgba(0,0,0,0.5) inset
        transition box-shadow 3s ease
        .deblocking {
        	position absolute
        	left calc(50% - 100px)
        	top -200px
        	transition top .3s ease
        	.iconfont {
        		color #fff
        		font-size 80px
        		margin-left 61px
        	}
        	.userName {
        		font-size 24px
        		margin-left 68px
        		margin-top -15px
        		color #fff
        	}
        	.input {
        		.inputContent {
        			width 200px
        			height 40px
        		    background rgba(0,0,0,.15)
    				border 1px solid rgba(255,255,255,.15)
    				outline none
    				border-radius 5px
    				font-size 14px
    				color #fff
    				padding 0 4px
        	    }
        	    
        	    .inputContent:focus {
        	    	// box-shadow: 0 0 0 2px rgba(255,255,255,.15)
	    			background rgba(0,0,0,.2)
        	    }
        	    .butSubmit {
        	    	font-size 15px
        	    	padding 7px 20px
        	    	cursor pointer
        	    	outline none
        	    	background rgba(0,0,0,.3)
        	    	border 1px solid rgba(255,255,255,.15)
        	    	color #c5c8ce
        	    	margin-left -1px
        	    }
        	    .butSubmit:hover {
        	    	background rgba(0,0,0,.4)
        	    }

        	}
        	
        	
        }
        

	}
	
	input::-webkit-input-placeholder {
        color #c5c8ce
        text-align center
    }
		
</style>