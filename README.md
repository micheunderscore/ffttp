# ffttp React Native
### Furnishing Futures TTP App Project

# Getting Started

Make sure your Powershell/VSCode terminal is cd-ed into the folder.

1. Install dependencies
```bash
$ yarn
# -- or --
$ yarn install
```
2. Start coding
3. Run App
```bash
# Installing Android App
$ yarn run android

# Running App
$ yarn start

```

### Extra Commands

```bash

# ==================
# IOS (WORK IN PROGRESS)
# ==================

# Installing `iOS` dependencies
$ cd ios && pod update && pod install && cd -

# to open project in xcode
$ yarn run xcode

# to start `ios` emulator
$ yarn run ios

```

### Miscellaneous

If you wish to install/remove dependencies in projects or packages, you can use command below

```bash
# Installing new packages
yarn add <DEPENDENCIES>

# Removing packages
yarn remove <DEPENDENCIES>
```

---

## Technologies Used

1.  Package Manager - `yarn`
2.  Coding styles - `TypeScript`
3.  UI styles - `styled-components`
4.  UI Framework - `React Native`
5.  Coding Practice - `Eslint` rules for `(.ts, .tsx)`

---

## Folder Structure

```
To Be Added
```

---

## Assets

Assets should be stored within the Assets folder (TBA)

```TypeScript

// In react native project
import { Image } from "react-native";

const logo = require("../assets/static/dog.png");
<Image source={logo} />

```

---

## Theme

This project sports 

```
└── src
    └── theme
        ├── colors
        └── palette
```

To minimize excess typing, just modify the colors within `colors`, `palatte` under the `theme` folder. You can then access the value by importing the package. For example:

```TypeScript
import { colors, palette } from "../../theme"; // This import will be fixed soon

colors.primary // primary color
palette.black // black color

```

---

## Remember to practice using reusable components

### React Native
If you are currently running into issues please remember to refer to the [React Native Official Documentation](https://reactnative.dev/)


### Styled Component

1. Official Docs - https://styled-components.com/
2. Github - https://github.com/styled-components/styled-components

