// const { override, fixBabelImports, addLessLoader } = require('customize-cra');
import { override, fixBabelImports, addLessLoader } from 'customize-cra';
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
    }),
);