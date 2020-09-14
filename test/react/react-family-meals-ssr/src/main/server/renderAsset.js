import request from '@src/utils/request';

const fs = require('fs');
const path = require('path');
export default () => {
    const assets = JSON.parse(
        fs.readFileSync(
            path.resolve(process.cwd(), './sync.build.json'),
            'utf-8'
        )
    );
    return {
        css: assets
            .map((i) => {
                if (/\.css$/.test(i)) {
                    return `<link rel="stylesheet" type="text/css" href="/${i}" />`;
                }
                return '';
            })
            .join(''),
        js: assets
            .map((i) => {
                if (/\.js$/.test(i)) {
                    return `<script type="text/javascript"  src="/${i}"></script>`;
                }
                return '';
            })
            .join(''),
    };
};
