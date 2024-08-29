# React + Vite

## Using Issues

Create Issues and create a development branch from the Issues.

```
git fetch origin
git checkout 1-your-first-component
```

## Using **react-bootstrap**

Comment out the original default css file in **main.jsx** and **App.jsx**.

```
npm install bootstrap
```

The [**Broswer globals**](https://react-bootstrap.netlify.app/docs/getting-started/introduction) is included in the **index.html**.


Include this **css** in the **index.html**.
```
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>
```


## Deploying to Azure Static Web Apps

This is the Vite documentation on how to deploy to 
[Azure Static Web Apps](https://vitejs.dev/guide/static-deploy.html#azure-static-web-apps)

Find the [app](https://yellow-water-006b8980f.5.azurestaticapps.net/) here.

## Tic-Tac-Toe tutorial

[Tutorial](https://react.dev/learn/tutorial-tic-tac-toe#adding-time-travel)

## Provide by create vite@latest
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
