# Notes
- vs Code
    -- Copilot extension
    -- link to github, build project locally first, then push to github
- use Copilot to create the Angular project
- Copilot can analyze the code in files and
    -- provide suggestions to be inserted into the files, compare to the existing lines
    -- suggest commands and copy to the terminal
- Copilot suggested code had the following issues:
    -- version, failed at dependencies, suggested to download/install the right version
    -- obsoleted command, build in production mode, vs Code prompts the right one
- Copilot generates a developer guide in README.md
- Copilot(free version) has monthly quata
- Copilot generates a tutorial to guide developers in coding an Angular application with GitHub Copilot’s help:

---

# Tutorial: Building an Angular Application with GitHub Copilot

## 1. **Set Up Your Development Environment**

- **Install Visual Studio Code:**  
  Download from [VS Code](https://code.visualstudio.com/).

- **Install GitHub Copilot Extension:**  
  In VS Code, go to Extensions (`Ctrl+Shift+X`), search for "GitHub Copilot", and install.

- **Sign in to GitHub:**  
  Use the Accounts menu in VS Code to sign in and link your GitHub account.

- **Install Node.js and npm:**  
  Use [nvm](https://github.com/nvm-sh/nvm) for easy Node.js management:
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  source ~/.bashrc
  nvm install --lts
  nvm use --lts
  ```

- **Install Angular CLI:**  
  ```bash
  npm install -g @angular/cli
  ```

## 2. **Create a New Angular Project**

- **Start a new project:**
  ```bash
  ng new my-angular-app
  cd my-angular-app
  ```

- **Initialize a Git repository and link to GitHub:**
  ```bash
  git init
  git remote add origin https://github.com/your-username/your-repo.git
  git add .
  git commit -m "Initial commit"
  git push -u origin main
  ```

## 3. **Use Copilot to Assist Coding**

- **Open files in VS Code and start coding.**
- **Copilot will suggest code as you type.**  
  For example, when creating a service or component, Copilot can auto-complete functions, generate boilerplate, and even suggest logic.

- **Example:**  
  When creating a Sudoku service, Copilot can help generate puzzle arrays, solution checking logic, and more.

## 4. **Test Locally**

- **Run the app:**
  ```bash
  ng serve
  ```
- **Open `http://localhost:4200` in your browser to test.**

## 5. **Publish to GitHub Pages**

- **Build for production:**
  ```bash
  ng build --prod --output-path docs --base-href ./
  ```

- **Add `.nojekyll` to disable Jekyll on GitHub Pages:**
  ```bash
  touch docs/.nojekyll
  git add docs/.nojekyll
  ```

- **Commit and push:**
  ```bash
  git add docs
  git commit -m "Production build for GitHub Pages"
  git push
  ```

- **Configure GitHub Pages:**  
  In your repo’s **Settings > Pages**, set source to `main` branch and docs folder.

- **Access your app:**  
  Visit `https://your-username.github.io/your-repo/`

## 6. **Troubleshooting (FAQ)**

- **Node.js version too old?**  
  Use nvm to install the latest version.

- **Missing node_modules?**  
  Run `npm install`.

- **404 on GitHub Pages?**  
  Ensure docs folder contains `index.html`, add `.nojekyll`, and check Pages settings.

- **Jekyll build errors?**  
  Add `.nojekyll` file to docs.

- **Git errors?**  
  Make sure you’ve committed at least once and are on the correct branch.

## 7. **References**

- [Angular CLI Documentation](https://angular.io/cli)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [GitHub Pages Documentation](https://pages.github.com/)
- [VS Code Documentation](https://code.visualstudio.com/docs)

---
 
