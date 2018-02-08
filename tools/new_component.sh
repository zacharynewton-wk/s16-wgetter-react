#!/bin/bash

CNAME="$1"
if [ -z $CNAME ]; then
    echo "Component Name required."
    exit
fi
cd ./src
DIR="."
COMP_DIR="$DIR/$CNAME"
if [ -d "$COMP_DIR" ]; then
    echo ""
    printf "Component directory $COMP_DIR exists, replace with new component? (yes/no) "
    read confirmation
    if [ $confirmation != "yes" ]; then
        exit
    fi
    rm -rf "$COMP_DIR"
fi
mkdir "$COMP_DIR"
JSX="$COMP_DIR/$CNAME.js"
touch "$JSX"
SCSS="$COMP_DIR/$CNAME.scss"
touch "$SCSS"
JSTEST="$COMP_DIR/$CNAME.js"
touch "$JSTEST"

LOWER_CNAME=$(echo "$CNAME" | awk '{print tolower($0)}')
FIRST_LOWER_CNAME="$(echo ${CNAME:0:1} | tr '[:upper:]' '[:lower:]')${CNAME:1}"
SNAKE_CNAME=$(echo "$FIRST_LOWER_CNAME" | sed 's/\([A-Z]\)/-\1/g' | awk '{print tolower($0)}')

cat > "$JSX" << JSX
import React, { Component } from 'react';
import './${CNAME}.css';

class ${CNAME} extends Component {
  render () {
    return (
      <div className="${CNAME}">
      </div>
    );
  }
}

export default ${CNAME};
JSX

cat > "$SCSS" << SCSS
.${CNAME} {
}
SCSS

cat > "$JSTEST" << JS
import React from 'react';
import ReactDOM from 'react-dom';
import ${CNAME} from './${CNAME}';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<${CNAME} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
JS

echo '''
'${CNAME}' created successfully. Import it using

import '${CNAME}' from "'./src/${CNAME}/${CNAME}';
'''

cd ..