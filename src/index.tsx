import React from "react";
import {createRoot} from "react-dom/client";
import App from "@/App"
function Root(){
  return(
    <App />
  )
}
const rootElement = document.getElementById("root") as Element
createRoot(rootElement).render(<Root />);

