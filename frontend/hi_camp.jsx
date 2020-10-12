import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

// test import



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    const store = configureStore(preloadedState);
    ReactDOM.render(<h1>Welcome to HiCamp</h1>, root);

    // Test Section
    
});

