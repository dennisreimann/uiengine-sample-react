# UIengine sample project with React

React sample project utilizing the [UIengine](https://github.com/dennisreimann/uiengine).
Based on [Next.js](https://github.com/zeit/next.js).

See the deployed website and design system documentation here:

- [Tasty BBQ Design System](https://uiengine-sample-react.uix.space/design-system/): The UIengine output for this sample project
- [Tasty BBQ Website](https://uiengine-sample-react.uix.space/): The corresponding website, built with React and Next.js.

Or try it yourself and play with the code …

## 📦 Setup

Once you have this repo cloned, you can setup the packages:

```bash
npm install
```

## 🛠 Development

Create a build and rebuild on file change.

```bash
npm start
```

This starts the following servers:

- Next.js running the app on [localhost:3000](http://localhost:3000)
- UIengine running the pattern library on [localhost:4000](http://localhost:4000/design-system/)

The build process is provided by Next.js.
If you want to see the changes in the JSX and CSS files to be reflected in the UIengine, make sure the Next.js server is also running.

In case the styles are missing, open up [localhost:3000](http://localhost:3000) in your browser.
This will trigger a Next.js build.
