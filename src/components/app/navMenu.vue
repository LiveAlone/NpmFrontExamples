<template lang="pug">
  el-aside#aside
    el-menu
      el-submenu(index=1)
        template(slot='title')
          i(class='el-icon-menu')
          span 导航一
        el-menu-item(index=1)
          template(slot="title")
          span Webpack
        el-menu-item(index=2)
          template(slot='title')
          span Vue
      el-submenu(index=2)
        template(slot='title')
          i(class='el-icon-menu')
          span 导航二
        el-menu-item(index=1)
          template(slot="title")
          span Angular
        el-menu-item(index=2)
          template(slot='title')
          span ReactJs
</template>

<script>

</script>

<style>
  #aside{
  }
</style>
