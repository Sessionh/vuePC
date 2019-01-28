<template>
	<div class="popup">
		<div class="popupBox">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
    name: 'dropDownBox',
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="stylus" scoped>
.popupBox
    min-width 100px
    display inline-block
    // padding 8px 8px
    background-color rgba(0,0,0,.5)
    position relative
    border-radius 10px
    
.popupBox:after, .popupBox:before
    border solid transparent
    content ' '
    height 0
    top 100%
    position absolute
    width 0
.popupBox:after
    border-width 10px
    border-right-color rgba(0,0,0,.5)
    left -20px
    top 10px
.popupBox
    ul
        padding 13px 0
        list-style-type none
        // border 1px solid red
        li
            white-space nowrap
            position relative
            font-size 13px
            text-align left
            .menuSub
                position absolute
                left calc(100% + 17px)
                top -4px
                display none
        li:hover .menuSub
                display inline
        li:hover .menuTitle
            cursor pointer
            color #ff9900
        li .menuSubLi:hover
            cursor pointer
            color #ff9900
    .menuSubUl2 
        position relative
        left -20px
        font-size 15px
        li  
            .menuSubLi
                padding 5px 40px 5px 60px
    .menuSubUl1 li .menuTitle
        padding 5px 40px 5px 40px
        .icon
            font-size 13px
                  
		
</style>