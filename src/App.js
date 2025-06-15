// This is the main entry point of the application, where the Redux store is provided to the entire app and the router component is rendered.
import React from "react";
import { Provider } from "react-redux";
import RouterComponent from "./router";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
}

export default App;
