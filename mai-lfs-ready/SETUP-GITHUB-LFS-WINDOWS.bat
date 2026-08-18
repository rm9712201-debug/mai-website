@echo off
setlocal

echo ==========================================
echo  MAI WEBSITE - GitHub LFS setup
 echo ==========================================

echo.
echo 1) Install Git LFS if you do not have it.
echo    https://git-lfs.com/
echo.
echo 2) Open Git Bash in this folder and run:
echo.
echo    git lfs install
 echo    git init
 echo    git lfs track "*.mp3"
echo    git add .gitattributes
 echo    git add .
echo    git commit -m "Initial website with original audio via Git LFS"
echo    git branch -M main
 echo    git remote add origin YOUR_GITHUB_REPOSITORY_URL
 echo    git push -u origin main
 echo.
echo IMPORTANT: Replace YOUR_GITHUB_REPOSITORY_URL with your actual GitHub repo URL.
echo.
pause
