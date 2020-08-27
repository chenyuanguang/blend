const fs = require('fs');
export default () => {
    const assets = JSON.parse(fs.readFileSync('../sync.build.json', 'utf-8'));
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
