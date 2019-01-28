<template>
	<div>
		基本信息
        <button @click="demoBut">点击</button>

		<div class="divs">
			<span class="a1">CSS3 Animations</span>
			
		</div>

	</div>
</template>
<script>
export default {
    name: 'userMessage',
    data () {
        return {

        }
    },
    methods: {
        demoBut() {

        }
    }
}
</script>

<style lang="less" scoped>

.divs{
    position:absolute;
    top:50%;
    left:50%;
    overflow:hidden;
    width:300px;
    height:150px;
    margin:-75px 0 0 -150px;
    border:3px solid #eee;
    background:#e0e0e0;
    span{
        display:block;
        height:50px;
        font:bold 14px/50px Georgia;
    }
}

.a1{
    transform:translate(60px);
    animation:orDiv 2s ease-out forwards;
}

@keyframes orDiv{
    0%{transform:translate(0);opacity:0;}
    50%{transform:translate(30px);opacity:1;}
    70%{transform:translate(35px);opacity:1;}
    100%{transform:translate(60px);opacity:0;}
}



</style>
