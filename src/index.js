import React from "react";
import ReactDOM from "react-dom";
import { Root, Routes } from "react-static";

import "./index.css";

export default function App() {
    return (
        <Root>
            <React.Suspense fallback={<em>{"Caricamento..."}</em>}>
                <Routes path="*" />
            </React.Suspense>
        </Root>
    );
}

if (typeof document !== "undefined") {
    const target = document.getElementById("root");
    const renderMethod = target.hasChildNodes()
        ? ReactDOM.hydrate
        : ReactDOM.render;
    renderMethod(<App />, target);
}
