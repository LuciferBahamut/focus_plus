if not exist "%cd%\node_modules" (
    start npm install
)
cd .\server
if not exist "%cd%\node_modules" (
    start npm install
)
if not exist "%cd%\files" (
    mkdir files
)

start npm start
cd ..
start npm start