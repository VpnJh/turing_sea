import React from "react";
import { createRoot } from "react-dom/client";
import "@/style/index.css";
import App from "@/layout/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
