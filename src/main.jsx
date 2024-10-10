import App from "./App.jsx";
import { Provider } from "react-redux";
import { Store } from "./app/Store.js";
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
