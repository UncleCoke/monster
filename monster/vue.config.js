const webpack = require('webpack');
module.exports = {
    publicPath: '/monster',
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 2019,
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changOrigin: true
            }
        }
    }
};