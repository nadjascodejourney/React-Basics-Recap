# React Recap

This repository is a recap of setting up a React project using Vite, with detailed explanations of the package.json setup and additional configurations. It also contains some components to explain important concepts like passing data to the child components with props or how you could build a filtered Search functionality or how to handle Emailinput and more. You will find a lot of comments in the code, as it´s purpose is for study reasons. Feel free to add some more components or improve the components, which are already there.

## Setup

To get started, make sure you have Node.js installed on your machine.

1. Clone this repository:

```bash
git clone <repository-url>
cd self-react-recap
```

2. Install dependencies with 'npm install' and run everything with 'npm run dev'

## Available Scripts

In the project directory, you can run the following scripts:

- npm run dev: Starts the development server using Vite.
- npm run build: Builds the application for production.
- npm run lint: Runs ESLint to check for code errors and enforce code quality standards.
- npm run preview: Previews the production build locally.

## ESLint Configuration

The ESLint configuration ensures code quality by enforcing best practices and identifying errors. Here's a breakdown of the ESLint script:

- eslint: Main ESLint program.
- .: Indicates the current directory for ESLint to search for files to lint.
- --ext js,jsx: Lints JavaScript and JSX files.
- --report-unused-disable-directives: Reports unused ESLint directives like eslint-disable.
- --max-warnings 0: Fails the script if any warnings are reported.

### ESLint Plugin React Refresh

The eslint-plugin-react-refresh plugin ensures compatibility of React components with Fast Refresh. It checks for correct configuration and enforces conventions to optimize component refreshing. To install use:

```bash
npm install -D eslint-plugin-react-refresh
```

Then, configure your .eslintrc file:

```bash

{
  "plugins": ["react-refresh"],
  "rules": {
    "react-refresh/only-export-components": "warn"
  }
}
```

##

Vite Plugins for Fast Refresh
Two Vite plugins facilitate Fast Refresh:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
