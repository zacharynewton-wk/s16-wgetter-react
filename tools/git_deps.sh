#!/bin/bash

DEPENDENCIES="https://github.com/Workiva/web-skin.git"
DIR="node_modules"
if [ ! -d "$DIR" ]; then
  echo "Creating src/deps directory"
  mkdir "$DIR"
fi

cd $DIR

for dep in "$DEPENDENCIES"; do
  dir=$(echo "$dep" | sed -E 's/.*\/([^\/]+)\.git$/\1 /')
  [ -d "deps" ] && echo "Yes"
  if [ -d "$dir" ]; then
    echo "Pulling $dir"
    cd "$dir"
    git pull
    cd ..
  else
    echo "Cloning $dir"
    git clone "$dep"
  fi
done
cd ../src/lib

ln -s ../../node_modules/web-skin/dist/css/web-skin.min.css
