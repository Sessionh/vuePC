<template>
    <div>
        <div class="tab" :style="{width: (tabWidth * tabList.length + 'px')}">
            <div class="tab_title" v-for="item in tabList" key="item.id"  @click="tabClick(item)">
                <div class="context" :style="{color: item.id === changeThat ? '#2077ff' : '#666'}">
                    {{item.name}}
                </div>
                <div class="underline" v-show="item.id === changeThat">
                    <div class="lines" :style="{width: (linesWidth + '%')}">
                    </div>
                </div>
            </div>
        </div>
        <div class="orWidth" :style="{width: ((tabWidth * tabList.length -50 ) + 'px')}">

        </div>

    </div>
   
</template>
<script>
export default {
    name: 'tabChange',
    props: {
        tabList: {
            type: Array,
            default: [],
        },
    },
    data () {
        return {
            tabWidth: 100,
            linesWidth: 100,
            changeThat: 1,
        }
    },
    methods: {
        tabClick (ev) {
         
            this.$emit('tabClick', ev);
           
             if ( this.linesWidth === 5) {
                this.linesWidth = 100

            } else {
                this.linesWidth = 5
            }

            setTimeout(() => {
                this.changeThat = ev.id
                setTimeout(() => {
                    this.linesWidth = 100

                }, 100)

            }, 100)
            
           
            
            

        }

    }
}
</script>
<style lang="less" scoped>
.tab {
    display: flex;
    // justify-content: center;

    
  
    .tab_title {
        padding-left: 0px; 
        cursor: pointer;
        .context {
            font-size: 15px;
            padding: 5px 20px 10px 20px;
        }

        .underline {
            text-align: center;
            width: 100%;
            display:block;
            .lines {
                margin:0 auto;
                height: 2px;
                padding: 0px;
                background: #2077ff;
                transition: width .1s ease-out, opacity .1s ease;

            }
        }
    }
}

.orWidth {
    // width: 400px;
    height: 1px;
    background: #beb7b7;
    transform: scaleY(0.5);
    
}


</style>


