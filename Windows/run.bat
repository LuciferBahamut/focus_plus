if not exist "%cd%\node_modules" (
    npm install
)
cd .\server
if not exist "%cd%\node_modules" (
    npm install
)
if not exist "%cd%\files" (
    mkdir files
)

start npm start
cd ..
start npm start