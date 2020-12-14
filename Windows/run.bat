if exist "%cd%\node_modules" (
    start npm start
) else (
    npm install
    start npm start
)

cd .\server
if exist "%cd%\files" (
    if exist "%cd%\node_modules" (
    start npm start
    ) else (
    npm install
    start npm start
    )
) else (
    mkdir files
    if exist "%cd%\node_modules" (
    start npm start
    ) else (
    npm install
    start npm start
    )
)