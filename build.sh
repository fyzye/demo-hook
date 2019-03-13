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

pwd 

git add docs

git commit -m "build: 打包"

git push -u origin master

cd .. && rm -rf $2

