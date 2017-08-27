var path = require("path");
var _path = require("path");

var webpack = require('webpack'); 
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		build:"./src/js/root.js"
	},
	output:{
		path: path.resolve(__dirname, './src'),
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:["style-loader","css-loader"],
				exclude:"/node_modules/"
			},
			{
				test:/.js$/,
				loader:["react-hot-loader","babel-loader?presets[]=es2015&presets[]=react"],
				
				exclude:"/node_modules/",
				include:_path.resolve(__dirname,"src/js")
			}
		]
	},
	devServer:{
		contentBase: path.join(__dirname, "src"),
        port: 8080,
		//hot:true,
		inline:true
	},
	resolve:{
		extensions:['*','.js','.css','.jsx'] //自动补全识别后缀 .2不再支持'',改为'*'
	},
	plugins: [  
      	new webpack.LoaderOptionsPlugin({  
          // test: /\.xxx$/, // may apply this only f  
          	options: {  
            // babel: {  
            //     //presets: ['es2015', 'stage-0', 'react'],  
            //     plugins: ['transform-runtime', ['import', {  
            //       libraryName: 'antd',  
            //       style: 'true' // or true  
            //     }]]  
            // }  
          	}  
        }),
        new webpack.HotModuleReplacementPlugin() 
        // new htmlWebpackPlugin({     //建成html文件
        // 	title:"ReactNews",
        // 	chunks:["build"]
        // })
    ]
}