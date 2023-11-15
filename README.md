# Introduction to Testing in React Native

Unit testing is an essential practice in software development that enables developers to ensure that each component or function of the application works as intended. In this guide, we will provide an overview of testing in React Native using Jest and React Testing Library.

## Pure Functions

Pure functions are functions that produce the same output when given the same input and have no side effects. In the [Pure Functions](./PURE_FUNCTIONS.md) section, we will explain how to test pure functions by changing the inputs and observing the outputs to ensure that the function works as intended.

## Components and Hooks

Components and hooks are the building blocks of React Native applications. In the [Components and Hooks](./COMPONENTS.md) section, we will explain how to test components and hooks by varying the inputs and observing the outputs, including props, state, user interaction, and return values.

## Side Effects

Functions with side effects are those that modify the state or variables outside of their scope and often interact with external systems, such as APIs or databases. In the [Side Effects](./SIDE_EFFECTS.md) section, we will explain how to test functions with side effects by mocking external systems and observing the output of callbacks or return values.

By testing our code in these different sections, we can ensure that our React Native applications are reliable and maintainable.

---

> You will find examples for tests in the `src` folder.
> Run `yarn install` and check out the tests.
> If you are using `Visual Studio code` please try the [Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) to run the tests.
