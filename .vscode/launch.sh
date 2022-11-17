#!/bin/bash
r=${1:(-5)}
if [ $r = .html ]; then #  this is the snag
    #export BROWSER=wslview
    explorer.exe "http://127.0.0.1:3000/$1"
else
    # do something txt-ish
    echo node $1
fi
