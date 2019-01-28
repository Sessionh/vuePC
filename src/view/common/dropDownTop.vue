<template>
	<div class="popup">
		<div class="dropDownTop">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
    name: 'dropDownTop',
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="stylus" scoped>
.dropDownTop
	min-width 100px
	display inline-block
	// padding 8px 8px
	background-color #fff
	position relative
	border-radius 10px
	
.dropDownTop:after, .dropDownTop:before
	border solid transparent
	content ' '
	height 0
	top 100%
	position absolute
	width 0
.dropDownTop:after
	border-width 10px
	border-bottom-color #fff
	left 10px
	top -20px
		
</style>