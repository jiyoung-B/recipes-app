const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.js", // 진입(시작) 파일
    output: {
        path: path.join(__dirname, "dist"), // 번들 파일 저장 위치
        filename: "app.bundle.js" // 기본 파일명 : main.js
    },
    module: { // 각 파일에 대한 세부적인 번들링 작업 정의 (바벨로 트랜스파일링 하라. 까지만 근데 기능올라가면 더 써야해)
        rules: [{ test: /\.js$/,  // .js로 끝나는 파일에 대한 규칙 정의
            exclude: /node_modules/, loader: "babel-loader" }] // babel-loader로 번들한다 es6은 es5로 낮추는 보조도구를 이용해라
    },
    devServer: { // 서버 구동시 관련 내용 설정(start 명령어를 썼을 때 어떻게 내용들을 띄울 것인지.)
        static: path.join(__dirname, 'dist'),
        open: true,     // 자동으로 브라우저 실행
        hot: true,      // 수정사항 발생시 브라우저에 즉시 반영
    },
    plugins: [
        new HtmlWebpackPlugin({ // dist 안에 index.html 자동 생성
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};
