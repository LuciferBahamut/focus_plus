#!/usr/bin/bash

mv ./files/image.png ./

gmic -input image.png \
     -colorblind 2 \
     -output image.png

mv ./image.png ./files 