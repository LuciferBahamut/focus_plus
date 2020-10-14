#!/usr/bin/bash

cp $1.png test1.png
cp $1.png test2.png
cp $1.png test3.png

gmic -input test1.png \
     -colorblind 1 \
     -output test1.png

gmic -input test2.png \
     -colorblind 2 \
     -output test2.png

gmic -input test3.png \
     -colorblind 3 \
     -output test3.png
