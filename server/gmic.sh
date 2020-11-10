#!/usr/bin/bash

mv ./files/image.png ./

cp ./image.png image1.png
cp ./image.png image2.png
cp ./image.png image3.png

gmic -input image1.png \
     -colorblind 1 \
     -output image1.png

gmic -input image2.png \
     -colorblind 2 \
     -output image2.png

gmic -input image3.png \
     -colorblind 3 \
     -output image3.png

zip images.zip image.png image1.png image2.png image3.png

mv ./images.zip ./files

rm image.png image1.png image2.png image3.png