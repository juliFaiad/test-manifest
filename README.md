# Manifest Test

This is a test of how the manifest works for creating an app.

## How to use

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173` in your browser.

## How to build

1. Run `npm run build`
2. The build will be in the `dist` folder

## Explanation

- We are rendering two times the same component, but with different rendering methods. The first one is rendered as a component of `App` (called "Component" inside the app), and the second one is rendered as a route (and is called "Route" inside the app).

- There is an event listener to tell if the browser is online or offline.
- When the listener is triggered, the component will update its state and show a message. _This causes a re-render of the component, and the images break_. There are solutions to this.

- The app will attempt to tell what browser and device you are using.
- This is easily spoofed, so it's not a reliable way to tell what device you are using (there isn't a way to do so with 100% accuracy ).
