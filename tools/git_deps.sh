#!/bin/bash

DEPENDENCIES="https://github.com/Workiva/web-skin.git"
if [ ! "$0" = "./tools/git_deps.sh" ]; then
  echo "Please run './tools/git_deps.sh' from the project directory."
  exit
fi
PROJECT_DIR="`pwd`"

DIR="$PROJECT_DIR/deps"
if [ ! -d "$DIR" ]; then
  echo "Creating deps directory"
  mkdir "$DIR"
fi

for dep in "$DEPENDENCIES"; do
  dir=$(echo "$dep" | sed -E 's/.*\/([^\/]+)\.git$/\1/')
  echo "$DIR/$dir"
  [ -d "$DIR" ] && echo "Yes"
  if [ -d "$DIR/$dir" ]; then
    echo "Pulling $dir"
    cd "$DIR/$dir"
    git pull
    # cd "$DIR"
    cd "$PROJECT_DIR"
  else
    echo "Cloning $dir"
    git clone "$dep" "$DIR/$dir"
  fi
  rm "$PROJECT_DIR/node_modules/$dir"
  ln -s "$DIR/$dir" "$PROJECT_DIR/node_modules/$dir"
done

# symlink web-skin.min.css into src/lib
rm $PROJECT_DIR/src/lib/web-skin.min.css
ln -s $DIR/web-skin/dist/css/web-skin.min.css $PROJECT_DIR/src/lib/web-skin.min.css
