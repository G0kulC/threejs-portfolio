import React from "react";
import ReactDOM from "react-dom/client";
import { personalDetails } from "./constants"; // Importing personalDetails
import App from "./App";
import { logo } from "../src/assets"; // Assuming logo is exported from assets
import "./index.css";

// Set the document title using personalDetails.name
document.title = `${personalDetails.full_name} — ${personalDetails.current_title}`;

// Create a link element for the favicon and append it to the document head
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/svg+xml"; // Or 'image/png' depending on your file type
link.href = logo;  // Assuming logo is the correct path to your image
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
