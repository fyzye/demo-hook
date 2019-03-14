#!/bin/bash

# chmod +x build.sh

cd .. && git clone $1

cd $2 && npm i

pwd

# 如果在mac上跑本shell脚本，则sed使用下面注释的这三行
# sed -i "" '7 a\ 
# "buildPath":"./docs/","publicPath":"./",
# ' bsy.json 
sed -i '7 a\ "buildPath":"./docs/","publicPath":"./",' bsy.json 

sl build

echo '\n\n打包完毕！\n\n'

git add docs

git commit -m "build: 打包"

git push -u origin master

echo '\n\ngit推送完毕！\n\n'

cd .. && rm -rf $2

echo '\n\n操作成功！您的更新已经成功部署到 git page!'