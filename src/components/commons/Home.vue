<template lang="pug">
    section#home
        p 欢迎适用
        p: strong 使用中有任何问题, 请联系Me
        router-link(to='/main'): el-button(type='primary') 管理进入
</template>

<script>
export default {
    
}
</script>

<style>
    section#home{
        text-align: center;
        margin-top: 100px;
    }
</style>

