#!/usr/bin/bash

cp ./upload/image.png test1.png
cp ./upload/image.png test2.png
cp ./upload/image.png test3.png

gmic -input test1.png \
     -colorblind 1 \
     -output test1.png

gmic -input test2.png \
     -colorblind 2 \
     -output test2.png

gmic -input test3.png \
     -colorblind 3 \
     -output test3.png

rm -r upload
if [ -d download ]; then
     mv test1.png download
     mv test2.png download
     mv test3.png download
else
     mkdir download
     mv test1.png download
     mv test2.png download
     mv test3.png download
fi
