<template lang="pug">
    el-container#app
        navMenu
        el-container
            el-header#header
                div 这个是容器标题内容
            el-main#main-body
                div 这个是具体的内容模块
                router-view
</template>

<script>
import NavMenu from '@/components/app/navMenu.vue'

export default {
    components:{NavMenu}
}
</script>
