#!/usr/bin/bash

cp ./upload/image.png image1.png
cp ./upload/image.png image2.png
cp ./upload/image.png image3.png

gmic -input image1.png \
     -colorblind 1 \
     -output image1.png

gmic -input image2.png \
     -colorblind 2 \
     -output image2.png

gmic -input image3.png \
     -colorblind 3 \
     -output image3.png

sleep 2

rm -r upload
zip images.zip image1.png image2.png image3.png

if [ -d ../public/Download ]; then
     mv images.zip ../public/Download
else
     mkdir ../public/Download
     mv images.zip ../public/Download
fi

rm image1.png image2.png image3.png