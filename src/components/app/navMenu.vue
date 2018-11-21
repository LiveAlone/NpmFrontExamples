<template lang="pug">
  el-aside#aside
    el-menu
      el-submenu(v-for='menu in menus' :key="menu.index" :index="menu.index")
        template(slot='title')
          i(:class='`el-icon-${menu.icon}`')
          span {{ menu.name }}
        el-menu-item(v-for="item in menu.children" :key="item.index" :index="item.index")
          template(slot='title')
            i(:class='`el-icon-${item.icon}`')
            span {{ item.name }}
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
export default {
    props: ['menus']
}
</script>

<style>
  #aside{
  }
</style>
