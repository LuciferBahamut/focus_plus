if not exist "%cd%\node_modules" (
    start npm install
) else (
    start npm start
)
cd .\server
if not exist "%cd%\node_modules" (
    start npm install
)
if not exist "%cd%\files" (
    mkdir files
)
start npm start