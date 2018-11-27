<template>
	<div class="navigator">
		<Row>
			<Col span="17">
				<div class="slider">
				  <Slider v-model="percent" :max="200" @on-change="dropClick"></Slider>
			    </div>
			</Col>
			<Col span="7">

				<div class="dropDown">
					 <Dropdown style="width: 60px;margin: 8px 0 0 7px;" placement="top" @on-click="dropClick">
				        <a href="javascript:void(0)">
				            {{percent}}%
				            <Icon type="ios-arrow-down"></Icon>
				        </a>
				        <DropdownMenu slot="list" >
				            <DropdownItem name="50">50%</DropdownItem>
				            <DropdownItem name="100">100%</DropdownItem>
				            <DropdownItem name="150">150%</DropdownItem>
				            <DropdownItem  name="200">200%</DropdownItem>
				          
				        </DropdownMenu>
			     </Dropdown>
					
			   </div>
				
			</Col>
		</Row>
		

	</div>
</template>
<script>
	export default {
		name: 'navigator',
		data () {
			return {
				percent: 100,

			}
		},
		methods: {
			dropClick (ev) {
				this.percent = parseInt(ev);
				this.$emit('navigatorChange', ev);

			},
			setValue (val) {
				this.percent = val;
			}

		}
	}
</script>
<style lang="less" scoped>
	.navigator {
		width: 200px;
		height: 35px;
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 5;
		background: #f8f8f9;
		padding: 0 3px;
		border-left: 2px solid #dcdee2;
		border-radius: 4px;
	}
</style>