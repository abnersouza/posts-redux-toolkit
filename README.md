# React APP using Typescript, Redux and RTK (Redux Toolkit)

## ❔ About

This project can be used as a boilerplate to another app,

The project is already setup with redux and redux toolkit, it can be modified in any way.

It has ADD and FETCH posts used as example to illustrate the use of it.

#### Advantages to Redux Toolkit

The main advantages to using RTK are:

- Easier to set up (less dependencies)
- Reduction of boilerplate code (one slice vs. many files for actions and reducers)
- Sensible defaults (Redux Thunk, Redux DevTools built-in)
- The ability to use direct state mutation, since RTK uses immer under the hood. This means you no longer need to return { ...state } with every reducer.

<p align="center"><b>Screenshot</b></p>
<p align="center">
  <img src="https://github.com/abnersouza/posts-redux-toolkit/blob/master/public/assets/screenshots/post.png" alt="Screenshot" />
</p>

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/basics/usage-with-react)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/quick-start)

## Installation

Fork the Repository:

Simply click on the “fork” button of the repository page on GitHub.

Clone the Repository:

```
git clone https://github.com/abnersouza/posts-redux-toolkit.git
```

### How to Run, Build and Run the Tests

```bash
# Navigate to root directory
> cd ./posts-redux-toolkit

# Install all dependencies
> npm install

# Run localhost
> npm run start

# Run the tests
> npm run test

# Build for production, it creates a folder called /build
> npm run build

```

## Credits

[Tania Rascia](https://www.taniarascia.com/redux-react-guide/)
