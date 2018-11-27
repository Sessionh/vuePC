<template>
	<div>
		<div class="container passwordInput" ref="passwordInput">
		    <input id="input" type="text" title="请输入密码" class="input"/>
		    <label class="border" :for="labelFor">
		    	<div class="lableTitle">密码</div>
		    </label>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'inputMain',
		props: {
			labelFor: {
				type: String
			}

		},
		data () {
			return {

			}
		},
		methods: {

		}
	}
</script>
<style lang="stylus" scoped>
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
	    
	
</style>