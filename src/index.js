import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Redux
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react"

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
    </PersistGate>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
