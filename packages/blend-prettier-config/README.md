# blend-prettier-config

blend-react 开发及其模板项目使用的 _prettier_ 配置规则。

## 如何使用

1. 安装 `blend-prettier-config`、`prettier`、`prettier-eslint` 为开发依赖包

```bash
// NPM
> npm i prettier prettier-eslint blend-prettier-config --save-dev
// Yarn
> yarn add prettier prettier-eslint blend-prettier-config --dev
```

2. 添加或编辑 _ESLint_ 配置文件 (`.prettierrc.js`)，将 `blend-prettier-config` 添加到配置中

```javascript
module.exports = {
    ...require('blend-prettier-config'),
};
```

## 推荐使用的开发环境

使用下述方案，可强化开发体验：

1. 在保存代码文件时，自动对部分语法和编写习惯进行修复
2. 在 `git commit` 之前，自动对部分语法和编写习惯进行修复

需要使用 _VS Code (Visual Studio Code)_ ，以下是完整的配置方案：

1. 下载安装 _VS Code_ : https://code.visualstudio.com/download
2. 在 _VS Code_ 中安装以下扩展:
    - [_ESLint_](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [_Prettier_](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. 安装 `husky` 以及 `lint-staged` 为开发依赖包

```bash
// NPM
> npm i eslint eslint-config-blend-react  husky lint-staged --save-dev
// Yarn
> yarn add eslint eslint-config-blend-react  husky lint-staged --dev
```

4. 在项目根目录中创建名为 `.vscode` 的目录，并在该文件夹内创建名为 `settings.json` 的文件，其内容为：

```json
{
    "editor.rulers": [80, 120],
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "eslint.codeActionsOnSave.mode": "problems",
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "javascript.validate.enable": false,
    "typescript.validate.enable": true,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

5. 在项目根目录中创建名为 `.eslintrc.js` 的文件，其内容为：

```javascript
module.exports = {
    // ...
    root: true,
    extends: ['blend-react'],
    // ...
};
```

6. 修改 `package.json`，添加以下内容

```json
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{js,jsx,cjs,mjs,ts,tsx}": [
            "eslint --fix",
            "prettier --write"
        ],
        "*.{json,md,css,less,sass,scss}": [
            "prettier --write"
        ]
    }
```

7. 重启 _VS Code_
