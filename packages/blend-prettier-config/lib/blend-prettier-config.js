/*
 * @Author: your name
 * @Date: 2020-08-20 14:46:47
 * @LastEditTime: 2020-08-20 14:48:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /blend/packages/blend-prettier-config/lib/blend-prettier-config.js
 */
'use strict';

module.exports = {
    printWidth: 80, //换行字符串阈值
    singleQuote: true, //用单引号
    tabWidth: 4, //缩进字符
    useTabs: false, //使用tab缩进
    jsxBracketSameLine: false, //jsx是否另起一行
    semi: true, //句末分号
    bracketSpacing: true, //对象括号之间留有空隙
    eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验trailingComma: 'all', //(all || es5) 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
    proseWrap: 'never', //默认值(preserve)。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    endOfLine: 'lf', //结尾使用\n，保持linux和macos风格
    overrides: [
        //覆盖文件风格，针对不同文件单独设置
        {
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
        {
            files: 'document.ejs',
            options: {
                parser: 'html',
            },
        },
    ],
};
