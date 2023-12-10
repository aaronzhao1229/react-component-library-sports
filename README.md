## Tech Stack 

Storybook, React, Tailwind, TypeScript, Redux 

# Setup

`npm install`

# Start

`npm run storybook`

# Build/Bundle Component Library

`npm run build`

# Build/Bundle Storybook For Deployment

`npm run build-storybook`

# How to use the UI component

```
import { SportsUI } from "react-component-library-sports";
import "react-component-library-sports/styles.css";

function App() {
  return (
    <div className="App">
      <SportsUI />
    </div>
  );
}

export default App;

```