# Open PR opening wrong repo (e.g. HTMLCSSLearning)?

- **Open only this folder:** Use **File → Open Folder** and choose the `shoptrac` folder (this repo) only. If you have a workspace that includes both shoptrac and HTMLCSSLearning (or you opened a parent folder), the "Open PR" / GitHub Pull Requests extension may use the other repo.
- **Source Control:** In the Source Control view, make sure the repo shown is **shopTrac** (origin: `KamiKruse/shopTrac.git`). Use the repo dropdown if you have multiple roots to pick this one before creating a PR.
- **Create PR from CLI:** From this folder you can run:  
  `gh pr create`  
  (if you use GitHub CLI) to open a PR for this repo in the browser.
