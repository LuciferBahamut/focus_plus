if not exist "%cd%\node_modules" (
    npm install
    start npm start
) else (
    start npm start
)

cd .\server
if not exist "%cd%\node_modules" (
    npm install
    if not exist "%cd%\files" (
    mkdir files
    )
    start npm start
) else (
    if not exist "%cd%\files" (
    mkdir files
    )
    start npm start
)