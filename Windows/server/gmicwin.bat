move .\files\image.png .\
gmic -input image.png -colorblind 1 -output image1.png
gmic -input image.png -colorblind 2 -output image2.png
gmic -input image.png -colorblind 3 -output image3.png
7za a -t7z images.zip *.png
move .\images.zip .\files\
del image.png
del image1.png
del image2.png
del image3.png