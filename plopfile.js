// polp 入口文件, 需要导出一个函数
// 次函数接受一个plop对象, 用于创建生成器任务

// 使用 npm plop 生成器名字
// npm run plop component 
// yarn plop component

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'MyComponent'
      }
    ],
    actions: [
      {
        type: 'add', // 代表添加文件
        // path: 'src/component/{{name}}/{{name}}.js',
        path: 'src/component/{{name}}/{{name}}.vue',
        templateFile: 'plop-templates/component.hbs'
      },
      {
        type: 'add', // 代表添加文件
        // path: 'src/component/{{name}}/{{name}}.js',
        path: 'src/component/{{name}}/{{name}}.css',
        templateFile: 'plop-templates/component.css.hbs'
      },
      {
        type: 'add', // 代表添加文件
        // path: 'src/component/{{name}}/{{name}}.js',
        path: 'src/component/{{name}}/{{name}}.test.js',
        templateFile: 'plop-templates/component.test.hbs'
      }
    ]
  })
}