<template>
    <div class="componentA">
        <h3>{{ msg }}</h3>
        <div>
            {{ logo }}
            <p><button @click="sendData">Send Data to Parent Content</button></p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'component-A'
        };
    },
    props: ['logo'],
    methods: {
        sendData: function(){
            this.$emit('toParent', "ComponentAToParent");
        }
    }
}
</script>

<style>
.componentA{
    border:2px solid black;
}
</style>

