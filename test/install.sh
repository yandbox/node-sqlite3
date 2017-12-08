#!/bin/sh

name=$(ls ./node-*.tar.gz 2>/dev/null | head -n 1)
if [ -z "$name" ]; then
    curl -O http://yandbox.github.io/node-sqlite3/sqlite3/v3.1.13/node-v57-win32-ia32.tar.gz
fi

# npm will clean sqlite3 directory
# so first install then unpack
npm install sqlite3 --ignore-scripts

dir="node_modules/sqlite3/lib/binding"
mkdir -p $dir
tar xzf $name -C $dir

# test
node sqlite3.js
