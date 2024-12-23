import { StrictMode } from "react";
import {createRoot} from "react-dom/client"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  return <h1>こんにちは！</h1>
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
