# My Angular App

This is a simple Angular application created to demonstrate the basic structure and functionality of an Angular project.

## Project Structure

```
my-angular-app
├── src
│   ├── app
│   │   ├── app.component.ts      # Root component of the application
│   │   ├── app.module.ts         # Root module of the application
│   │   └── app.component.html     # HTML template for the AppComponent
│   ├── assets                     # Directory for static assets
│   ├── environments               # Directory for environment-specific settings
│   │   ├── environment.ts         # Development environment settings
│   │   └── environment.prod.ts    # Production environment settings
│   └── main.ts                   # Entry point of the application
├── angular.json                   # Angular CLI configuration file
├── package.json                   # npm configuration file
└── tsconfig.json                  # TypeScript configuration file
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository or download the project files.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Use `ng serve` to start the development server.
5. Open your browser and go to `http://localhost:4200` to see the application in action.

## Features

- Basic Angular application structure
- Environment-specific configurations
- Modular architecture with components and modules

## License

This project is licensed under the MIT License.

Here’s a developer manual outline for creating and publishing an Angular web application, based on your workflow and troubleshooting. You can copy this into a Word document.

---

# Developer Manual: Creating and Publishing an Angular Web Application

## 1. Setting Up the IDE

### Install Visual Studio Code
- Download and install [VS Code](https://code.visualstudio.com/).

### Install GitHub Copilot Extension
- Go to Extensions (`Ctrl+Shift+X`), search for "GitHub Copilot", and install.

### Link GitHub Account
- Sign in to GitHub in VS Code (bottom left or via Command Palette).
- [GitHub Docs: Connecting to GitHub](https://docs.github.com/en/get-started/quickstart/set-up-git)

### Install Git
- Install Git:  
  ```bash
  sudo apt install git
  ```
- Configure Git:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
  ```

## 2. Creating an Angular Application

### Install Node.js and npm
- Use [nvm](https://github.com/nvm-sh/nvm) to install Node.js:
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  source ~/.bashrc
  nvm install --lts
  nvm use --lts
  ```

### Install Angular CLI
```bash
npm install -g @angular/cli
```

### Create a New Angular Project
```bash
ng new my-angular-app
cd my-angular-app
```

### Initialize GitHub Repository
- Create a repo on GitHub.
- Link local project:
  ```bash
  git init
  git remote add origin https://github.com/your-username/your-repo.git
  git add .
  git commit -m "Initial commit"
  git push -u origin main
  ```

### Use Copilot to Assist Coding
- Start coding in VS Code.
- Use Copilot suggestions for components, services, etc.

### Test Locally
```bash
ng serve
```
- Visit `http://localhost:4200` in your browser.

## 3. Publishing the Application on GitHub Pages

### Build for Production
```bash
ng build --prod --output-path docs --base-href ./
```

### Add `.nojekyll` File
```bash
touch docs/.nojekyll
git add docs/.nojekyll
```

### Commit and Push Build
```bash
git add docs
git commit -m "Production build for GitHub Pages"
git push
```

### Configure GitHub Pages
- Go to **Settings > Pages** in your repo.
- Set **Source** to `main` branch and docs folder.
- Save.

### Access Your App
- Visit: `https://your-username.github.io/your-repo/`

## 4. Troubleshooting & FAQ

### Q: Node.js version too old?
**A:** Install latest Node.js using nvm.

### Q: Missing node_modules folder?
**A:** Run `npm install` in project root.

### Q: Cannot find module '@angular/core'?
**A:** Run `npm install @angular/core`.

### Q: Missing files like `styles.css`, `polyfills.ts`, index.html?
**A:** Create them manually in the correct folders.

### Q: Schema validation failed (extractCss)?
**A:** Remove `"extractCss": true,` from angular.json.

### Q: Bundle exceeded maximum budget?
**A:** Increase `maximumWarning` and `maximumError` in angular.json budgets.

### Q: GitHub Pages 404 error?
**A:** 
- Ensure docs folder contains index.html and build files.
- Add `.nojekyll` file to docs.
- Set GitHub Pages source to `main` branch and docs folder.
- Wait a few minutes after pushing.

### Q: Git errors (not a repository, branch not found)?
**A:** 
- Run `git init` if not initialized.
- Make an initial commit before pushing.
- Use correct branch name (`main` or `master`).

### Q: Jekyll build errors on GitHub Pages?
**A:** Add `.nojekyll` file to docs folder.

### Reference Links
- [Angular CLI Docs](https://angular.io/cli)
- [GitHub Pages Docs](https://pages.github.com/)
- [VS Code Docs](https://code.visualstudio.com/docs)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)


