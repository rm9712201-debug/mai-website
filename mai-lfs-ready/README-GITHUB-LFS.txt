MAI WEBSITE - GitHub LFS

This package keeps the original MP3 files without re-encoding them.
The .gitattributes file makes Git LFS track every .mp3 file.

WINDOWS STEPS
1. Install Git for Windows if needed.
2. Install/initialize Git LFS:
   git lfs install
3. Open Git Bash inside this folder.
4. Run:
   git init
   git lfs track "*.mp3"
   git add .gitattributes
   git add .
   git commit -m "Initial website with original audio via Git LFS"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main

IMPORTANT
- Do not upload the ZIP to GitHub. Extract this folder first, then push the folder as a Git repository.
- GitHub LFS stores pointer files in normal Git and the original MP3 binaries in LFS storage.
- GitHub Free currently includes 10 GiB LFS storage and 10 GiB monthly LFS bandwidth. Each LFS file can be up to 2 GB on GitHub Free/Pro.
- GitHub Pages does NOT support serving Git LFS objects. If the site is going to be hosted with GitHub Pages, keep the audio files on a normal web host/object storage/CDN instead of LFS.
