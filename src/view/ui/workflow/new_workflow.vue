<template>
  <div class="workflow">
    <!-- <left-area :jsp="jsp" @update-pos="updatePosition"></left-area> -->
    <flows :jsp="jsp" :pos="pos"></flows>
  </div>
</template>

<script>
import flows from './component/jspFlow.vue'

export default {
    components: {
        flows,
    },
    data () {
        return {
            jsp: this.$jsplumb.getInstance(),
            pos: [0, 0]
        }
    },
    methods: {
        updatePosition (pos) {
            this.pos = pos
        }
    }
}
</script>

<style lang="less" scoped>
    .workflow {
        padding: 20px;
        height: calc(100vh - 206px);
        width:  100%;
        display: flex;

    }
   
</style>
