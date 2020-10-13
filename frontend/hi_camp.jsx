import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { login, logout, signUp } from "./actions/session_actions";

// test import



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    const store = configureStore(preloadedState);
    ReactDOM.render(<h1>Welcome to HiCamp</h1>, root);

    // Test Section
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signUp = signUp;
    window.login = login;
    window.logout = logout;
});

