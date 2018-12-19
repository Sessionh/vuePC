<template>
    <div>
        <div class="inputFocus" @mouseenter="mouseEnterDiv" @mouseleave="mouseleaveDiv">
            <input id="input" ref="input" class="inputSearch" :style="{width: (inputWidth + 'px')}" v-model="value"  :placeholder="inputInitData" />
            <Icon class="icon" type="md-search" size="23" />
        </div>

    </div>
</template>
<script>
export default {
    name: 'inputSearch',
    data () {
        return {
            inputInitData: '',
            value: '',
            inputWidth: ''

        }
    },
    methods: {
        mouseleaveDiv (ev) {
            this.$refs.input.blur();
          

        },
        mouseEnterDiv (ev) {
            setTimeout(() => {
                this.inputInitData = 'search...'

            }, 100)
            this.inputWidth = 165;
             this.$refs.input.focus();

        }

    }
}

</script>
<style lang="less" scoped>

input::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999;
}
input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999;
}

.inputFocus {
    background: white;
    // width: 130px;
    border-radius: 10px;
    cursor: pointer;
    .inputSearch {
        // outline: none;
        border: 0;
        width: 15px;
        height: 36px;
        // background-color: #ccc;
        border-radius: 10px;
        padding-left: 10px;
        color: rgb(90, 73, 73)
    }
    .inputSearch:focus {
        outline: none;
    }
    .icon {
        margin-right: 10px;
        color: rgb(113, 113, 238);
    }

}
.inputFocus:hover .inputSearch{
    width: 165px;
}
</style>

