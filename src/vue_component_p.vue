<template>
    <div>
        {{ parentMsg }}
        <component-A :logo="logoMsg" @toParent="componenta"></component-A>
        <div> split </div>
        <component-B @toParent="componentb"></component-B>    
    </div>
</template>

<script>
import A from '@/vue_component_ca.vue';
import B from '@/vue_component_cb.vue';
export default {
    data(){
        return {
            logoMsg: 'ParentMsgToConpenentAContent',
            parentMsg: 'none'
        };
    },
    components: {
         "component-A": A,
         "component-B": B
    },
    methods: {
        componenta: function(data){
            this.parentMsg = data;
        },
        componentb: function(data){
            // 通过 父组件方式， 实现兄弟节点之间的数据传递方式
            this.logoMsg = data;
        }
    }
}
</script>

<style>
</style>
