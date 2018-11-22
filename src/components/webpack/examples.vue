<template lang="pug">
    div(class="webpack-example") this is webpack examples content
</template>

<script>
    export default {
        name: "examples"
    }
</script>

<style lang="less">
@var: red;
.webpack-example{
    color: @var;
}
</style>