<template>
    <div>
        <div class="inputFocus"  
            :style="{width: (divWidth + 'px'), border: `1px solid ${borderColor}`}" 
            @mouseenter="mouseEnterDiv" 
            @mouseleave="mouseleaveDiv">
            <input id="input" ref="input" 
            v-model="inputValue" 
            @input="onInput"
            class="inputSearch" 
            :style="{height: (inputHeight + 'px')}"   
            :placeholder="inputInitData" />
            <Icon class="icon" type="md-search" size="23" @click="onSearch" />
        </div>

    </div>
</template>
<script>
export default {
    name: 'inputSearch',
    props: {
        inputHeight: {
            type: Number,
            default: 33,

        },
        borderColor: {
            type: String,
            default: '#ccc'
        },
    },
    data () {
        return {
            inputInitData: '',
            divWidth: 50,
            inputValue: '',

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
            this.divWidth = 205;
            this.$refs.input.focus();

        },
        onSearch() {
            this.$emit('onSearch', this.inputValue)
        },
        onInput() {
            this.$emit('onInput', this.inputValue)
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
    width: 50px;
    border-radius: 15px;
    cursor: pointer;
    // border: 1px solid #ccc;
    padding-left: 13px;
    .inputSearch {
        // outline: none;
        border: 0;
        height: 33px;
        width: calc(100% - 38px);
        // background-color: #ccc;
        border-radius: 10px;
       
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
// .inputFocus:hover {
//      border: 1px solid red;
// }
</style>

