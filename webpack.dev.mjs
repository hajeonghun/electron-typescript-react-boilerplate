import {merge} from 'webpack-merge';
import common from './webpack.common.mjs'

export default merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: '127.0.0.1',
    port: 3000,
  },
})
