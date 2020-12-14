cd .\server
if not exist "%cd%\files" (
    mkdir files
)
if not exist "%cd%\node_modules" (
    npm install
    start npm start
) else (
    start npm start
)