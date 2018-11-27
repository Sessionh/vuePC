<template>
	<div class="login">
		<div class="content">
			<div class="header">
				欢迎登陆后台系统
			</div>
			<div class="loginInput">
				<div class="inputLeft">
					<div class="container userInput" ref="userInput">
					    <input id="input" title="请输入账号" class="input">
					    <label class="border" for="input">
					    	<div class="lableTitle">账号</div>
					    </label>
					</div>
				</div>

				<div class="icon">
					<div  class="imgLeft_Right col">
						<div class="iconfont">&#xe669;</div>
					</div>
					<div ref="imgMain" class="iconMain col">
						<img class="img" src="./image/admin.png"/>
					</div>
					<div class="imgLeft_Right col">
						<div class="iconfont">&#xe669;</div>
					</div>
				</div>

				<div class="inputRight">
					<div class="container1 passwordInput" ref="passwordInput">
					    <input id="input1" type="text" title="请输入密码" class="input1"/>
					    <label class="border1" for="input1">
					    	<div class="lableTitle1">密码</div>
					    </label>
					</div>
				</div>
				
			</div>
			<div class="loginBut">
				<div class="authCode" v-show="loginTransitionShow">
					<input placeholder="输入验证码" class="authCodeInput"/>
					<dropDownTop>
						<div class="popupBoxContent">
							<canvas class="canvas" width="120" height="40" ref="canvas"></canvas>
							<i class="iconfont" title="刷新" @click="popupBoxRefresh">&#xe688;</i>

						</div>
					</dropDownTop>
				</div>
				<div class="submit" v-show="loginTransitionShow">
					<input @click="login" class="subInput" type="button" value="登陆"/>
				</div>
				<div ref="progressBar" class="progressBar">
					<div ref="barContent" class="barContent">
						
					</div>
				</div>
			  
			</div>
		</div>
	</div>
</template>
<script>
	import inputMain from './common/InputMain.vue'
	import dropDownTop from './common/dropDownTop.vue'
	import Util from '../libs/util.js'
	export default {
		name: 'login',
		components: {
			inputMain,
			dropDownTop

		},
		data () {
			return {
				loginTransitionShow: true

			}
		},
		methods: {
			popupBoxRefresh () {
				this.initData();

			},
			login() {
				const _user = this.$refs.userInput.style
				const _pass = this.$refs.passwordInput.style
				const _bar = this.$refs.progressBar.style
				const _barContent = this.$refs.barContent.style
				const _imgMain = this.$refs.imgMain.style
				_user.opacity = 0
				_user.marginLeft = '18px'
				_pass.opacity = 0
				_pass.marginRight = '18px'
				// this.initData()

				setTimeout(() => {
					this.loginTransitionShow = false
					_bar.zIndex = 1
					_bar.top = '-60px'
					_barContent.width = '100%'
					_imgMain.bottom = '50px'
				}, 300)

				setTimeout(() => {
					this.loginTransitionShow = true
					_bar.zIndex = -1
					_bar.top = '-10px'
					_barContent.width = '0%'
					_imgMain.bottom = '0'
					_user.opacity = 1
					_user.marginLeft = '0'
					_pass.opacity = 1
					_pass.marginRight = '0'
					sessionStorage.setItem('jaxUserName', 'admin')
					Util.getRouterChildren(this);
				}, 3000)

			},
			initData () {
				let value = '';
	            //3.填充背景颜色,颜色要浅一点
	            let w=120;
	            let h=40;
	            let ctx=this.$refs.canvas.getContext("2d");
	            ctx.fillStyle='#fff';
	            ctx.fillRect(0,0,w,h);
	            //4.随机产生字符串
	            let pool="ABCDEFGHIJKLIMNOPQRSTUVWSYZ1234567890";

	            for(let i=0;i<4;i++){
	                let c=pool[rn(0,pool.length)];//随机的字
	                let fs=rn(23,40);//字体的大小
	                let deg=rn(-30,30);//字体的旋转角度
	                ctx.font=fs+'px Simhei';
	                ctx.textBaseline="top";
	                ctx.fillStyle=rc(80,150);
	                ctx.save();
	                ctx.translate(30*i+15,15);
	                ctx.rotate(deg*Math.PI/180);
	                ctx.fillText(c,-10,-10);
	                ctx.restore();
	                value = value + c
	            }
	            console.log(value)

	            for(let i=0;i<20;i++){
	                let c=pool[rn(0,pool.length)];//随机的字
	                let fs=9;//字体的大小
	                let deg=rn(-30,30);//字体的旋转角度
	                ctx.font=fs+'px Simhei';
	                ctx.textBaseline="top";
	                ctx.fillStyle='#808695';
	                ctx.save();
	                ctx.translate(rn(0, 132),rn(-2, 42));
	                ctx.rotate(deg*Math.PI/180);
	                ctx.fillText(c,-10,-15);
	                ctx.restore();
	            }
	            //5.随机产生干扰线,干扰线的颜色要浅一点
	            for(let i=0;i<3;i++){
	                ctx.beginPath();
	                ctx.moveTo(rn(0,w),rn(0,h));
	                ctx.lineTo(rn(0,w),rn(0,h));
	                // ctx.strokeStyle=rc(180,230);
					// ctx.bezierCurveTo(110,50,60,40,60,25);
	                ctx.strokeStyle='#808695';
	                // ctx.closePath();
	                ctx.stroke();
	            }

	            	//1.新建一个函数产生随机数
	            function rn(min,max){
	                return  parseInt(Math.random()*(max-min)+min);
	            }
	            //2.新建一个函数产生随机颜色
	            function rc(min,max){
	                let r=rn(min,max);
	                let g=rn(min,max);
	                let b=rn(min,max);
	                return `rgb(${r},${g},${b})`;
	            }

			},
		},
		mounted: function () {
		    this.$nextTick(() => {
		        this.initData()
		    })
		},
		create () {
			// this.initData()
		}
	}
</script>
<style lang="stylus" scoped>
    input::-webkit-input-placeholder {
        color #c5c8ce
        text-align center
    }
    .login
    	width 100%
    	height 100vh
    	background-image url(./image/login.jpg) 
    	.content
    		height 400px
    		width 700px
    		position absolute
    		left calc(50% - 350px)
    		top calc(50% - 220px)
    		.header
    			// border 1px solid green
    			height 150px
    			width 100%
    			text-align center
    			font-size 30px
    			font-weight 700
    			padding-top 50px
    			color #fff
    		.loginInput
    			height 150px
    			width 100%
    			position relative
    			z-index 1
    			.icon
    				position absolute
    				left 250px
    				width 200px
    				height 100px
    				top 20px
    				.col
    					display inline-block
    					vertical-align middle
    				.imgLeft_Right
    					width 25%
    					height 100px
    					padding-top 18px
    					color #fff
    					.iconfont
    						transform rotate(90deg)
    						font-size 20px
    						
    				.iconMain
    					width 50%
    					height 100px
    					position relative
    					bottom 0
    					transition bottom 1s ease 
    					.img
    						width 96px
    						height 96px
    					
    			.inputLeft
    				position absolute
    				left 0
    				top 20px
    				.userInput
    		    	    transition margin-left 1s ease-out, opacity 1s ease
    			.inputRight
    				position absolute
    				right 0
    				top 20px
	    			.passwordInput
	    				transition margin-Right 1s ease-out, opacity 1s ease	
    		   
				/**/
	    				
    		.loginBut
    			// border 1px solid yellow
    			height 100px
    			width 100%
    			position relative
    			.popup
    				position absolute
    				bottom -58px
    				z-index 2
    				.popupBoxContent
    					width 135px
    					position relative
    					.canvas
    						border-radius 5px
    					.iconfont
    						position absolute
    						right 0
    						bottom 0
    						font-size 17px
    						cursor pointer
    						transform rotate(160deg)
    					.iconfont:hover
    						color blue	
    						
    				
    			.submit
    				position absolute
    				left 360px
    				.subInput
    					padding 7px 30px
    					border-radius 5px
    					border 1px solid rgba(255,255,255,.15)
    					background #ef4300
    					box-shadow 0 15px 30px 0 rgba(255,255,255,.25) inset, 0 2px 7px 0 rgba(0,0,0,.2)
    					color #fff
    					font-size 15px
    					font-weight 600
    					cursor pointer
    					outline none
    				.subInput:hover
    					box-shadow  0 10px 23px 0 rgba(255,255,255,.25) inset
    					
    			.authCode
    				position absolute
    				left 250px
	    			.authCodeInput
	    				width 100px
	    				height 39px
	    				background rgba(0,0,0,.15)
	    				border 1px solid rgba(255,255,255,.15)
	    				outline none
	    				border-radius 5px
	    				font-size 14px
	    				color #fff
	    				padding 0 2px
	    			.authCodeInput:focus
	    				 box-shadow 0 0 0 2px rgba(255,255,255,.15)
	    				 background rgba(0,0,0,.3)
	    		.progressBar
	    			width 180px
	    			height 7px
	    			background black
	    			position absolute
	    			top -10px
	    			left 260px
	    			border-radius 5px
	    			z-index -1
	    			transition top 1s ease
	    			.barContent
	    				height 100%
	    				width 0%
	    				background #ccc
	    				border-radius 5px
	    				transition width 1s ease
	    				
			
.container
		height 40px
		width 248px
		position relative
		opacity 1
		.input
			margin 5px 0 0 56px
			height 30px
			border none
			outline none
			color #fff
			background none
			font-size 14px
			width 188px
			position relative
			z-index 3
	.border
		position absolute
		left 0
		right 0
		top 0
		bottom 0 
		border 1px solid  rgba(255,255,255,.15)
		background rgba(0,0,0,.15)
		border-radius 5px
		.lableTitle
			border-right 1px dotted  #fff
			width 40px
			margin 10px 0 0 10px
			padding 0 5px 
			color #fff
	
	.input:focus + .border
	    box-shadow 0 0 0 2px rgba(255,255,255,.15)
	    background rgba(0,0,0,.3)

.container1
		height 40px
		width 248px
		position relative
		opacity 1
		.input1
			margin 5px 0 0 56px
			height 30px
			border none
			outline none
			color #fff
			background none
			font-size 14px
			width 188px
			position relative
			z-index 3
	.border1
		position absolute
		z-index 0
		left 0
		right 0
		top 0
		bottom 0 
		border 1px solid  rgba(255,255,255,.15)
		background rgba(0,0,0,.15)
		border-radius 5px
		.lableTitle1
			border-right 1px dotted  #fff
			width 40px
			margin 10px 0 0 10px
			padding 0 5px 
			color #fff
	
	.input1:focus + .border1
	    box-shadow 0 0 0 2px rgba(255,255,255,.15)
	    background rgba(0,0,0,.3) 
	
</style>