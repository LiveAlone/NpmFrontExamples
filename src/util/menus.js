export default [
    // 菜单数据结构, 默认二级菜单类型, main item, sub items 集合配置方式
    {
        index: 'webpack',
        icon: 'menu',
        name: 'webpack',
        children:[
            {index: '/official_docs', icon: 'menu', name: '官方文档'},
            {index: '/examples', icon: 'menu', name: '实例Demo'}
        ]
    },
    {
        index: "vue",
        icon: 'menu',
        name: 'vue',
        children:[
            {index: '/official_docs', icon: 'menu', name: '官方文档'},
            {index: '/examples', icon: 'menu', name: '实例Demo'}
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