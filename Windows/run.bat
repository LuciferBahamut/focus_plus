start runbis.bat
if not exist "%cd%\node_modules" (
    npm install
    start npm start
) else (
    start npm start
)