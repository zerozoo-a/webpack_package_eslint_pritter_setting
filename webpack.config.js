const path=require("path");
const mmm=require("@pmmmwh/react-refresh-webpack-plugin");

module.exports={
    name:"wordChainGame",
    mode:"development",
    devtool:"eval",
    resolve:{
        extensions:[".js",".jsx"]
    },
    entry:{
        app:["./client"],
    },
    module:{
        rules:[{
            test: /\.jsx?/,
            loader:"babel-loader",
            options:{
                presets:[
                    "@babel/preset-env",
                    "@babel/preset-react"
                ],
            plugins:[
                "@babel/plugin-proposal-class-properties",
                "react-refresh/babel"
                ]
            },
        }]
    },
    plugins:[
        new mmm()
    ],
    output:{
        filename:"app.js",
        path:path.join(__dirname,"dist"),
        publicPath: '/dist/',
    },
    devServer:{
        publicPath:'/dist',
        hot:true,

    },
};