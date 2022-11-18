#!/bin/bash
if [ $fileExtname = .html ]; then
  explorer.exe $url || true
else
  node $file
fi
