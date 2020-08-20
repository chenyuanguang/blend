/*
 * @Author: chenyuanguang
 * @Date: 2020-08-19 19:00:53
 * @LastEditTime: 2020-08-20 14:24:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blend/packages/eslint-config-blend-react/lib/eslint-config-blend-react.js
 */
'use strict';

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2019,
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        amd: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        // eslint忽略和prettier冲突的校验
        'prettier',
    ],
    plugins: ['react', 'react-hooks'],
    rules: {
        quotes: [2, 'single'], //字符串必须使用单引号
        semi: [2, 'always'], //语句强制分号结尾(可选)
        indent: [2, 4, { SwitchCase: 1 }], //缩进风格
        eqeqeq: 2, //必须使用全等
        curly: [2, 'all'], //必须使用 if(){} 中的{}
        camelcase: 2, //强制驼峰法命名

        'consistent-this': [2, 'that'], //this别名
        'no-unused-vars': [1], //不能有声明后未被使用的变量或参数
        'no-alert': 0, //禁止使用alert confirm
        'no-new': 0,
        'no-undef': 0,
        'react/jsx-uses-react': 1, //针对react相关Dom变量处理
        'react/jsx-uses-vars': 1,

        'no-var': 'error', // 禁止使用 var
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        'react-hooks/rules-of-hooks': 1,
        'react-hooks/exhaustive-deps': 1,

        'react/jsx-indent': [2, 4, { indentLogicalExpressions: true }],
        'react/prop-types': 0,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            plugins: [
                '@typescript-eslint', //使用的插件，是个npm包
            ],
            extends: ['plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                //指定ts语言的规则
                project: './tsconfig.json',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            rules: {
                '@typescript-eslint/no-explicit-any': [0],
                // 优先使用 interface 而不是 type
                '@typescript-eslint/consistent-type-definitions': [
                    'error',
                    'interface',
                ],
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/explicit-module-boundary-types': 0,
                '@typescript-eslint/indent': [2, 4, { SwitchCase: 1 }],
            },
        },
    ],
};
