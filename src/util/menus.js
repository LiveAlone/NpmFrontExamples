export default [
    // 菜单数据结构, 默认二级菜单类型, main item, sub items 集合配置方式
    {
        index: 'webpack',
        icon: 'menu',
        name: 'webpack',
        children:[
            {index: '/webpack_official_docs', icon: 'menu', name: '官方文档'},
            {index: '/webpack_examples', icon: 'menu', name: '实例Demo'}
        ]
    },
    {
        index: "vue",
        icon: 'menu',
        name: 'vue',
        children:[
            {index: '/vue_official_docs', icon: 'menu', name: '官方文档'},
            {index: '/vue_examples', icon: 'menu', name: '实例Demo'}
        ]
    },
    {
        index: "pug",
        name: "pug",
        children:[]
    },
    {
        index: "eslint",
        name: "eslint",
        children: []
    }
]