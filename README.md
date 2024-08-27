# react-loadscreen-ui (package)

`react-load-ui` is a customizable React component for creating engaging loading screens. It provides a seamless way to display load screens with various styles, making it easy to enhance the user experience in your React applications.

<img src="https://github.com/user-attachments/assets/a798b622-efce-41cd-820b-927ff3688d82" alt="Loading Screen" width="350" height="350">

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contact](#contact)


## Installation

To install the package, use npm 

```bash

  npm install react-loadscreen-ui

```

visit the website for any issue - https://www.npmjs.com/package/react-loadscreen-ui

## Usage

Import the 'LoadingProvider' and wrap it arround the entire application. So that the loadscreen can be used and called anywhere in the application.

```js

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// package imports for react-loadscreen-ui
import { LoadingProvider, LoadingScreen } from 'react-loadscreen-ui'
import "react-loadscreen-ui/dist/style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingProvider>
      <LoadingScreen
        text="Please wait ..."
        spinnerSize={30}
        backgroundColor='rgba(40, 44, 52, 0.7)'
        textColor="#61dafb"
      />
      <App />
    </LoadingProvider>
  </StrictMode>,
)

```

After that you can inport the useLoading context for controlls over the loadscreen.

```js

import { useEffect } from 'react'
import './App.css'
//package import for laodscreen context.
import { useLoading } from 'react-loadscreen-ui';

export default function App() {

  // function to controll the loadscreen (hide / show)
  const { showLoadScreen, hideLoadScreen } = useLoading();

  useEffect(() => {
    showLoadScreen();     // for showing the loadscreen ui
    setTimeout(() => {
      hideLoadScreen();   // for hiding the loadscreen ui
    }, 5000);
  }, []);

  return (
    <>
      <p className="read-the-docs">
      This is a demo page for testing the loadscreen ui.
      {/* Rest of your content */}
      </p>
    </>
  )
}

```

## Features

The ui package is responsible for displaying the laoding screen as pre required, 
it has context that controls the state of the loading screen. The contextProvider,
provides the state `isLoading`, `showLoading()` and `hideLoading()`.

Currently the package comprises for one screen
- `{LoadingScreen}` (loading screen with props for customization)

The `LoadScreen` component accept the following props : 

| Prop  | Type | Default | Description | 
| ----- | ---- | ------- | ----------- |
| `text` | `string` | `Loading...` | The message displayed on the loading screen |
| `spinner` | `boolean` | `true` | Whether to display a spinner |
| `spinnerSize` | `number` | `50` | The size of the spinner in pixels |
| `backgroundColor` | `string` | `rgba(0, 0, 0, 0.5)` | The background color of the loading screen |
| `textColor` | `string` | `#fff` | The color of the loading text |

## Project-Structure

```bash
react-loadscreen-ui/
│
├── lib/                      # Contains all the package files
│   ├── LoadingScreen/        # Components and style files
│   |   ├── index/            # Exports the resources
│   |   ├── LoadingContext/   # Context for loadingScreen
│   |   ├── LoadingScreen/    # UI components
│   |   └── styles/           # UI styling
│   └── main                  # main file (entry point)
├── public/                   # Public files
├── src/                      # Source files for testing
│   ├── App/                  # App page
│   ├── main/                 # Main application page
│   ├── assets/               # Images, icons, etc.
│   └── ...                   # Other directories or files
├── package.json              # Node.js dependencies and scripts
├── README.md                 # The file you're reading
└── ...                       # Any other essential files
```

## Contact
  email - reachtoabhisheko@gmail.com
  linkedIn - https://www.linkedin.com/in/abhishek-oraon-developer/