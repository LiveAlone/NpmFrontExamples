<template lang="pug">
    el-container#app
        div this is ready to menu content
        el-container
            el-header#header
                div this is content header
            el-main#main-body
                div this is content main body
                router-view
</template>

<script>
export default {
    
}
</script>
