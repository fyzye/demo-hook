#!/bin/bash

# chmod +x build.sh

git clone $1

npm i

sed -i "" '7 a\ 
"buildPath":"./docs/","publicPath":"./",
' bsy.json 

sl build

git add docs

git commit -m "build: 打包"

git push -u origin master

rm -rf $2
