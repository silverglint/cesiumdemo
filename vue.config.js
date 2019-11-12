const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
let cesiumSource = './node_modules/cesium/Source';
let cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
    configureWebpack: {
        output: {
            sourcePrefix: ' ' // 1
        },
        amd: { // 2
            toUrlUndefined: true
        },
        resolve: {
            alias: {

            }
        },
        plugins: [ // 4
            new CopyWebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers'}]),
            new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets'}]),
            new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets'}]),
            new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'ThirdParty/Workers'}]),
            new webpack.DefinePlugin({ // 5
                CESIUM_BASE_URL: JSON.stringify('')
            })
        ],
        module: {
        }
    }
};

